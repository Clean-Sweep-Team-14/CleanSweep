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

    class Meta:
        model = Chore_Tracker
        fields = ('chore', 'day', 'complete', 'user', 'pk')


class FollowSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Follow
        fields = ('pk', 'friend')


class UserPointsSerializer(serializers.ModelSerializer):
    total_points = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = ('pk', 'username', 'total_points')

    def get_total_points(self, obj):
        return obj.total_points.get("chore__point__sum")