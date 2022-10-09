from django.urls import path
from .views import TournamentView

urlpatterns = [
    path(r'', TournamentView.as_view(), name='index'),
    
]