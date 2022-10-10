from django.urls import path, include
from core import views
urlpatterns = [
    path('', views.api_root),
    path('api-auth/', include('rest_framework.urls',)),
    path('chores/', views.ChoreList.as_view(), name='chore-list')
]