from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import generics, serializers
from .models import Chore
from .serializers import ChoreSerializer

# Create your views here.


class ChoreList(generics.ListAPIView):
    queryset = Chore.objects.all()
    serializer_class = ChoreSerializer


class EasyChoreList(generics.ListAPIView):
    queryset = Chore.objects.filter(point=5)
    serializer_class = ChoreSerializer

class MediumChoreList(generics.ListAPIView):
    queryset = Chore.objects.filter(point=25)
    serializer_class = ChoreSerializer

class HardChoreList(generics.ListAPIView):
    queryset = Chore.objects.filter(point=100)
    serializer_class = ChoreSerializer

class BonusChoreList(generics.ListAPIView):
    queryset = Chore.objects.filter(point=30)
    serializer_class = ChoreSerializer



@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'chores': reverse('chore-list', request=request, format=format),
        'easy': reverse('easy-chore-list', request=request, format=format),
        'medium': reverse('medium-chore-list', request=request, format=format),
        'hard': reverse('hard-chore-list', request=request, format=format),
        'bonus': reverse('bonus-chore-list', request=request, format=format),
    })
