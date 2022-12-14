from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from .forms import TournamentForm
# Create your views here.

class TournamentView(TemplateView):
    def __init__(self):
        self.params = {
            'form': TournamentForm(),
            'result': None
        }
    def get(self, request):
        return render(request, 'tournament/index.html', self.params)
    def post(self, request):
        if ('check1' in request.POST):
            self.params['result'] = 'Checked'
        else:
            self.params['result'] = 'not checked'
        self.params['form'] = TournamentForm(request.POST)
        return render(request, 'tournament/index.html', self.params)
def index(request):
    return render(request, 'index.html')
def show(request):
    return render(request, 'show.html')


    