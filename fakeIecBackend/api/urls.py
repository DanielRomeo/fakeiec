from django.urls import path
# from . import views

from .views import (
    voter_list, voter_detail,
    ethnicity_list, ethnicity_detail,
    address_list, address_detail,
    vote_list, vote_detail
)

urlpatterns = [
    # Voter URLs
    path('voters/', voter_list, name='voter-list'),
    path('voters/<int:pk>/', voter_detail, name='voter-detail'),

    # Ethnicity URLs
    path('ethnicities/', ethnicity_list, name='ethnicity-list'),
    path('ethnicities/<int:pk>/', ethnicity_detail, name='ethnicity-detail'),

    # Address URLs
    path('addresses/', address_list, name='address-list'),
    path('addresses/<int:pk>/', address_detail, name='address-detail'),

    # Vote URLs
    path('votes/', vote_list, name='vote-list'),
    path('votes/<int:pk>/', vote_detail, name='vote-detail'),
]
