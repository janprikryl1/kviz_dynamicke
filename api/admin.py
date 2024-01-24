from django.contrib import admin
from .models import AppUser, Question, Question_set, Category

# Register your models here.
admin.site.register(AppUser)
admin.site.register(Question)
admin.site.register(Question_set)
admin.site.register(Category)