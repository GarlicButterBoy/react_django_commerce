from django.urls import path
from . import views

urlspattern = [
    path('', views.getRouts, )
]