import django
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import generics

from .tasks import send_email_task, send_test_email
from .models import Chore, Chore_Tracker, CustomUser, Follow
from .serializers import ChoreSerializer, ChoreTrackerSerializer, FollowSerializer, UserPointsSerializer, TrackerCreateSerializer
from django.db.models import Sum, Q
from rest_framework.views import APIView
from django.http import HttpResponse
from django.core.mail import send_mail
from django.db import IntegrityError
from rest_framework import status

# Create your views here.


class ChoreList(generics.ListAPIView):
    queryset = Chore.objects.all()
    serializer_class = ChoreSerializer

    def index(request):
        send_email_task()
        return HttpResponse('Email Sent')

    def index(request):
        send_test_email()
        return HttpResponse('Email Sent')


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
        queryset = Chore_Tracker.objects.filter(
            user=self.request.user.pk, completed=False).order_by('due_date')
        return queryset

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return TrackerCreateSerializer
        return self.serializer_class

    def create(self, request, *args, **kwargs):
        try:
            return super().create(request, *args, **kwargs)
        except IntegrityError:
            error_data = {
                "error": "This chore has already been added to your list."
            }
            return Response(error_data, status=status.HTTP_400_BAD_REQUEST)


class ChoreTrackerUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chore_Tracker.objects.all()
    serializer_class = ChoreTrackerSerializer


class PointsList(APIView):

    def get(self, request, format=None):
        query_results = request.user.actual_points()

        return Response({"actual_points": query_results})


class GlobalLeaderboard(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserPointsSerializer


class FriendsLeaderboard(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserPointsSerializer

    def get_queryset(self):
        queryset = CustomUser.objects.filter(Q(friends__in=self.request.user.follows.all()) | Q(
            pk=self.request.user.pk)).distinct('pk')
        return queryset


class FollowList(generics.ListCreateAPIView):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer

    def get_queryset(self):
        queryset = Follow.objects.filter(follower=self.request.user.pk)
        return queryset

    def perform_create(self, serializer):
        serializer.save(follower=self.request.user)

    def create(self, request, *args, **kwargs):
        try:
            return super().create(request, *args, **kwargs)
        except IntegrityError:
            error_data = {
                "error": "You are already following this user."
            }
            return Response(error_data, status=status.HTTP_400_BAD_REQUEST)


class FollowDetail(generics.RetrieveDestroyAPIView):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer


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
