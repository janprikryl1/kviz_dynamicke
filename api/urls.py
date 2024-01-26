from django.urls import path
from .views import *

urlpatterns = [
    path('register', UserRegister.as_view(), name='register'),
    path('login', UserLogin.as_view(), name='login'),
    path('logout', UserLogout.as_view(), name='logout'),
    path('user', UserView.as_view(), name='user'),
    path('get_user_deails', GetUserDetails.as_view(), name='get_user_details'),
    path('get_quizes', GetQuizes.as_view(), name='get_quizes'),
    path('get_categories', GetCategories.as_view(), name='get_categories'),
    path('create_question_set', CreateQuestionSet.as_view(), name='create_question_set')
]