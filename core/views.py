from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import generics
from .models import Chore, Chore_Tracker
from .serializers import ChoreSerializer, ChoreTrackerSerializer
from django.db.models import Sum
from rest_framework.views import APIView

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


class ChoreTracker(generics.ListCreateAPIView):
    queryset = Chore_Tracker.objects.all()
    serializer_class = ChoreTrackerSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        queryset = Chore_Tracker.objects.filter(user=self.request.user.pk).order_by('day')
        return queryset


class ChoreTrackerUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chore_Tracker.objects.all()
    serializer_class = ChoreTrackerSerializer


class PointsList(APIView):

    def get(self, request, format=None):
        query_results = request.user.choretrackers.filter(complete=True).aggregate(Sum('chore__point'))

        return Response(query_results)

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'chores': reverse('chore-list', request=request, format=format),
        'easy': reverse('easy-chore-list', request=request, format=format),
        'medium': reverse('medium-chore-list', request=request, format=format),
        'hard': reverse('hard-chore-list', request=request, format=format),
        'bonus': reverse('bonus-chore-list', request=request, format=format),
        'tracker': reverse('chore-tracker', request=request, format=format),
    })
