from django.urls import path, include
from core import views

urlpatterns = [
    path('', views.api_root),
    path('api-auth/', include('rest_framework.urls',)),

#Chores
    path('chores/', views.ChoreList.as_view(), name='chore-list'),
    path('chores/easy/', views.EasyChoreList.as_view(), name='easy-chore-list'),
    path('chores/medium/', views.MediumChoreList.as_view(), name='medium-chore-list'),
    path('chores/hard/', views.HardChoreList.as_view(), name='hard-chore-list'),
    path('chores/bonus/', views.BonusChoreList.as_view(), name='bonus-chore-list'),

#Tracker
    path('chores/tracker/', views.ChoreTracker.as_view(), name='chore-tracker'),
    path('chores/tracker/<int:pk>/', views.ChoreTrackerUpdate.as_view(), name='chore-tracker-update'),

#Points
    path('user/points/', views.PointsList.as_view(), name='user-points'),
]
