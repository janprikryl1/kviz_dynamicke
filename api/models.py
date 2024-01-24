from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.db import models


# Create your models here.

class AppUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        user = self.create_user(email, password)
        user.is_superuser = True
        user.save()
        return user


class AppUser(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50, unique=True)
    phone = models.CharField(max_length=15, blank=True)
    username = models.CharField(max_length=50)
    surname = models.CharField(max_length=50, blank=True)
    is_staff = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    objects = AppUserManager()

    def __str__(self):
        return self.username

    def name(self):
        return f'{self.username} {self.surname}'




class Question(models.Model):
    date_time_created = models.DateTimeField(auto_now=True)
    points = models.IntegerField(blank=True)
    text = models.TextField(blank=True)

class Category(models.Model):
    title = models.CharField(max_length=35)
    questions = models.ManyToManyField(Question, blank=True)

class Question_set(models.Model):
    title = models.TextField()
    date_time_created = models.DateTimeField(auto_now=True)
    categories = models.ManyToManyField(Category, blank=True)
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='question_sets')