from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.serializers import ProductSerializer
from base.models import Product, Order, OrderItem, ShippingAddress

from rest_framework import status

@api_view('POST')
@permission_classes([''])
def addOrderItems(request):
    return Response('Order')