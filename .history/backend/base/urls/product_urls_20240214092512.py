from django.urls import path
from base.views import views


urlpatterns = [
    path('', views.getProducts, name="products" ),
    path('<str:pk>/', views.getProduct, name="product" ),
]