from dataclasses import fields
from rest_framework import serializers
from .models import Chore


class ChoreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Chore
        fields = ('chore', 'point', 'pk')
