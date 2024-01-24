from django.contrib.auth import get_user_model, login, logout
from django.shortcuts import render
from rest_framework import permissions, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Question_set, Question, Category

from api.serilizers import UserLoginSerializer, UserSerializer, UserRegisterSerializer
from api.validations import validate_email, validate_password

UserModel = get_user_model()


# Create your views here.


class UserRegister(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

    def post(self, request):
        email = request.data['email'].strip()
        if not email or UserModel.objects.filter(email=email).exists():
            return Response({"error": "already_used"}, status=status.HTTP_400_BAD_REQUEST)
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(request.data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

    ##
    def post(self, request):
        data = request.data
        assert validate_email(data)
        assert validate_password(data)
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(data)
            login(request, user)
            return Response(serializer.data, status=status.HTTP_200_OK)


class UserLogout(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)


class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)

class GetUserDetails(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request):
        user = request.user
        return Response({"email": user.email, "phone": user.phone, "name": user.username, "surname": user.surname}, status=status.HTTP_200_OK)


class GetQuizes(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def get(self, request):
        quizes = Question_set.objects.all()
        quiz_set = []
        for i in quizes:
            quiz_set.append({"title":i.title, "id":i.id, "author":i.user.username+" "+i.user.surname})
        return Response({"quizes":quiz_set}, status=status.HTTP_200_OK)


class GetCategories(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def get(self, request):
        question_set = Question_set.objects.get(id=int(request.GET['quiz_id']))
        data = []
        for i in question_set.categories.all():
            categories = []
            for x in i.questions.all():
                categories.append({"title":x.text, "points":x.points})
            data.append({"title":i.title, "questions":categories})
        return Response({"title":question_set.title, "categories":data}, status=status.HTTP_200_OK)