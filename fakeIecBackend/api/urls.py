from django.urls import path
from . import views

urlpatterns = [
    path('getblogs', views.getBlogs),
    path('gedata', views.getData),
    
    path('getblog/<str:id>', views.getBlog),
    path('getauthor/<str:id>', views.getAuthor)
]