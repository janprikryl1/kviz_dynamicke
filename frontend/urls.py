from django.urls import re_path
from .views import index

urlpatterns = [
    re_path(r'^(?!api)(?!media)(?!admin).*$', index, name='index'),
]