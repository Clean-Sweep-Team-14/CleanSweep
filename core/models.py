from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    
    avatar_picture = models.ImageField(upload_to = 'users', blank=True, null=True)

    pass

    def __str__(self):
        return self.username
