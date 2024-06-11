from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from voteapp.models import Voter, Ethnicity, Address, Vote
from .serializers import VoterSerializer, EthnicitySerializer, AddressSerializer, VoteSerializer

# Voter Views
@api_view(['GET', 'POST'])
def voter_list(request):
    if request.method == 'GET':
        voters = Voter.objects.all()
        serializer = VoterSerializer(voters, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = VoterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def voter_detail(request, pk):
    try:
        voter = Voter.objects.get(pk=pk)
    except Voter.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = VoterSerializer(voter)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = VoterSerializer(voter, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        voter.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Ethnicity Views
@api_view(['GET', 'POST'])
def ethnicity_list(request):
    if request.method == 'GET':
        ethnicities = Ethnicity.objects.all()
        serializer = EthnicitySerializer(ethnicities, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = EthnicitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def ethnicity_detail(request, pk):
    try:
        ethnicity = Ethnicity.objects.get(pk=pk)
    except Ethnicity.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EthnicitySerializer(ethnicity)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = EthnicitySerializer(ethnicity, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        ethnicity.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Address Views
@api_view(['GET', 'POST'])
def address_list(request):
    if request.method == 'GET':
        addresses = Address.objects.all()
        serializer = AddressSerializer(addresses, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = AddressSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def address_detail(request, pk):
    try:
        address = Address.objects.get(pk=pk)
    except Address.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AddressSerializer(address)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = AddressSerializer(address, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        address.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Vote Views
@api_view(['GET', 'POST'])
def vote_list(request):
    if request.method == 'GET':
        votes = Vote.objects.all()
        serializer = VoteSerializer(votes, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = VoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def vote_detail(request, pk):
    try:
        vote = Vote.objects.get(pk=pk)
    except Vote.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = VoteSerializer(vote)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = VoteSerializer(vote, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        vote.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
