from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings

@api_view(['GET'])
def health_check(request):
    """
    Health check endpoint to test connection between React and Django.
    """
    db_engine = settings.DATABASES['default']['ENGINE'].split('.')[-1]
    return Response({
        "status": "online",
        "service": "NexCampus API",
        "database": db_engine,
        "message": "Django backend is connected and ready!"
    })

@api_view(['GET'])
def sample_dashboard_data(request):
    """
    Sample starter endpoint that React components can fetch.
    """
    return Response({
        "student": {
            "name": "Alex Johnson",
            "student_id": "NEX-2026-081",
            "course": "Computer Science & Engineering",
            "semester": "6th Semester"
        },
        "stats": {
            "attendance_rate": "89.5%",
            "gpa": "3.82",
            "credits_completed": 94,
            "pending_assignments": 2
        }
    })
