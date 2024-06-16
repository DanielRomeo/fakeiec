from rest_framework import serializers
from voteapp.models import Ethnicity, Address, Vote, Voter

class EthnicitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Ethnicity
        fields = ['id', 'name', 'language_group']

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['id', 'province', 'district']

class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = ['id', 'national', 'provincial', 'regional']

class VoterSerializer(serializers.ModelSerializer):
    ethnicity = EthnicitySerializer()
    address = AddressSerializer()
    vote = VoteSerializer()

    class Meta:
        model = Voter
        fields = ['id', 'firstname', 'lastname', 'gender', 'idnumber', 'ethnicity', 'address', 'vote']

    def create(self, validated_data):
        ethnicity_data = validated_data.pop('ethnicity')
        address_data = validated_data.pop('address')
        vote_data = validated_data.pop('vote')

        ethnicity = Ethnicity.objects.create(**ethnicity_data)
        address = Address.objects.create(**address_data)
        vote = Vote.objects.create(**vote_data)

        voter = Voter.objects.create(
            ethnicity=ethnicity,
            address=address,
            vote=vote,
            **validated_data
        )
        return voter

    def update(self, instance, validated_data):
        ethnicity_data = validated_data.pop('ethnicity', None)
        address_data = validated_data.pop('address', None)
        vote_data = validated_data.pop('vote', None)

        instance.firstname = validated_data.get('firstname', instance.firstname)
        instance.lastname = validated_data.get('lastname', instance.lastname)
        instance.gender = validated_data.get('gender', instance.gender)
        instance.idnumber = validated_data.get('idnumber', instance.idnumber)

        if ethnicity_data:
            instance.ethnicity.name = ethnicity_data.get('name', instance.ethnicity.name)
            instance.ethnicity.language_group = ethnicity_data.get('language_group', instance.ethnicity.language_group)
            instance.ethnicity.save()

        if address_data:
            instance.address.province = address_data.get('province', instance.address.province)
            instance.address.district = address_data.get('district', instance.address.district)
            instance.address.save()

        if vote_data:
            instance.vote.national = vote_data.get('national', instance.vote.national)
            instance.vote.provincial = vote_data.get('provincial', instance.vote.provincial)
            instance.vote.regional = vote_data.get('regional', instance.vote.regional)
            instance.vote.save()

        instance.save()
        return instance
