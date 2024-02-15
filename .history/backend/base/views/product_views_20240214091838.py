from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .serializers import ProductSerializer
from .models import Product
from django.contrib.auth.models import User
from .products import products
from rest_framework import status