from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.serializers import ProductSerializer
from base.models import Product, Order, OrderItem, ShippingAddress

from rest_framework import status

@api_view(['POST'])
@permission_classes(['IsAuthenticated'])
def addOrderItems(request):
    user = request.user
    data = request.data
    
    orderItems = data['orderItems']

    if orderItems and len(orderItems) == 0:
        return Response({'detail': 'No Order Items', status=status.HTTP_400_BAD_REQUEST})
    else:
        #(1) Create Order
        order = Order.objects.create(
            user=user
            paymentMethod=data['paymentMethod']
            taxPrice=data['taxPrice']
            shippingPrice=data['shippingPrice']
            totalPrice=data['totalPrice']
        )

        #(2) Create Shipping Address

        #(3) Create Order Items and Set Order to orderItem Relationship

        #(4) Update Stock

    return Response('Order')