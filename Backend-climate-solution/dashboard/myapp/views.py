from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, Django is working! Now i am a DJainga developer.")
