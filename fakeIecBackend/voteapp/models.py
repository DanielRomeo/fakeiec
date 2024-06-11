from django.db import models


class Ethnicity(models.Model):
    name = models.CharField(max_length=50, unique=True)
    language_group = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name

class Address(models.Model):
    province = models.CharField(max_length=50)
    district = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.province} - {self.district}"

class Vote(models.Model):
    national = models.CharField(max_length=50)
    provincial = models.CharField(max_length=50)
    regional = models.CharField(max_length=50)

    def __str__(self):
        return f"National: {self.national}, Provincial: {self.provincial}, Regional: {self.regional}"

class Voter(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    idnumber = models.CharField(max_length=20, unique=True)
    ethnicity = models.ForeignKey(Ethnicity, on_delete=models.SET_NULL, null=True)
    address = models.ForeignKey(Address, on_delete=models.SET_NULL, null=True)
    vote = models.ForeignKey(Vote, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f"{self.firstname} {self.lastname} - {self.idnumber}"
