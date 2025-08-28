from django.urls import path
from . import views   # import views from this app

urlpatterns = [
    path("", views.index, name="index"),  # homepage route
]
