from dataclasses import fields
from rest_framework import serializers
from .models import Chore, Chore_Tracker
from django.db.models import Sum

class ChoreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Chore
        fields = ('chore', 'point', 'pk')


class ChoreTrackerSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field='username', read_only=True)

    class Meta:
        model = Chore_Tracker
        fields = ('chore', 'day', 'complete', 'user', 'pk')
