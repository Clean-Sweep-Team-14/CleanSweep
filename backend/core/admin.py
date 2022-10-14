from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Chore, Chore_Tracker, Follow, Notification
# Register your models here.


class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['email', 'username',]

    
admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Chore)
admin.site.register(Chore_Tracker)
admin.site.register(Follow)
admin.site.register(Notification)