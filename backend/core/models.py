from email.policy import default
from secrets import choice
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models import Sum, Q
from django.db.models.constraints import UniqueConstraint




class CustomUser(AbstractUser):
    
    avatar_picture = models.ImageField(upload_to = 'users', blank=True, null=True)

    @property
    def total_points(self):
        return self.choretrackers.filter(complete=True).aggregate(Sum('chore__point', default=0))

    pass

    def __str__(self):
        return self.username


class Chore(models.Model):
    
    EASY = 5
    MEDIUM = 25
    HARD = 100
    BONUS = 30
    CATEGORY_CHOICES = (
        (EASY, 'Easy'),
        (MEDIUM, 'Medium'),
        (HARD, 'Hard'),
        (BONUS, 'Bonus'),
    )

    chore = models.CharField(max_length=500)
    point = models.IntegerField(choices=CATEGORY_CHOICES)

    def __str__(self):
        return f'{self.chore}, {self.point} points'



class Chore_Tracker(models.Model):
    chore = models.ForeignKey(Chore, on_delete=models.CASCADE, related_name = 'choretrackers')
    day = models.DateTimeField()
    complete = models.BooleanField(default=False)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name = 'choretrackers')

    def __str__(self):
        return f'{self.chore} on {self.day}'


class Follow(models.Model):
    follower = models.ForeignKey(CustomUser,on_delete=models.CASCADE,related_name = 'follows')
    friend = models.ForeignKey(CustomUser,on_delete=models.CASCADE, related_name = 'friends')

    class Meta:
        unique_together = ['follower', 'friend']


    def __str__(self):
        return f'{self.follower} following {self.friend}'


class Notification(models.Model):
    message: models.TextField()
    chore = models.ForeignKey(Chore, on_delete=models.CASCADE, related_name = 'notifications')
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name = 'notifications')
