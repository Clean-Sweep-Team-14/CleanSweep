from curses import savetty
from email.policy import default
from secrets import choice
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models import Sum, Q
from django.db.models.constraints import UniqueConstraint
import datetime
import pytz



class CustomUser(AbstractUser):
    
    avatar_picture = models.ImageField(upload_to = 'users', blank=True, null=True)

    def total_points(self):
        chores_points=[tracker.chore.point for tracker in self.choretrackers.all() if tracker.completed==True and not tracker.is_late]
        positive_points = sum(chores_points)
        return positive_points

    def point_deduction(self):
        late_chores_points=[tracker.chore.point for tracker in self.choretrackers.all() if tracker.is_late]
        negative_points = sum(late_chores_points)
        return negative_points


    def actual_points(self):
        return self.total_points() - self.point_deduction()


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
    
    def get_due_date():
        now = pytz.utc.localize(datetime.datetime.today())
        return now + datetime.timedelta(days=1)


    chore = models.ForeignKey(Chore, on_delete=models.CASCADE, related_name = 'choretrackers')
    due_date = models.DateTimeField(default=get_due_date)
    completed = models.BooleanField(default = False)
    completed_at = models.DateTimeField(null=True, blank=True) 
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name = 'choretrackers')

    def save(self, *args, **kwargs):
        if self.completed == True and self.completed_at is None:
            self.completed_at = pytz.utc.localize(datetime.datetime.now())
        super().save(*args, **kwargs)

    @property
    def is_late(self):
        return pytz.utc.localize(datetime.datetime.today()) > self.due_date and (not self.completed_at or self.completed_at > self.due_date)
    

    def __str__(self):
        return f'{self.chore} on {self.due_date} late:{self.is_late}'


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
