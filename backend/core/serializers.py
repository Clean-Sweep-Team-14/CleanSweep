from asyncore import read
from dataclasses import fields
from rest_framework import serializers
from .models import Chore, Chore_Tracker, CustomUser, Follow
from django.db.models import Sum
from django.db.models.constraints import UniqueConstraint


class ChoreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Chore
        fields = ('chore', 'point', 'pk')


class ChoreTrackerSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field='username', read_only=True)
    chore = ChoreSerializer(read_only=True)

    class Meta:
        model = Chore_Tracker
        fields = ('chore', 'due_date', 'completed',
                  'completed_at', 'user', 'pk', 'is_late')


class TrackerCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Chore_Tracker
        fields = ('chore',)


class FollowSerializer(serializers.ModelSerializer):

    class Meta:
        model = Follow
        fields = ('pk', 'friend')


class UserPointsSerializer(serializers.ModelSerializer):
    actual_points = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = ('pk', 'username', 'actual_points')

    def get_actual_points(self, obj):
        return obj.actual_points()
