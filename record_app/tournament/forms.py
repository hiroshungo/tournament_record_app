from django import forms

class TournamentForm(forms.Form):
    check1 = forms.BooleanField(label='Checkbox', required=False)
    