# photo-app
A photo app for storing and sharing photos amongst friends.

# Setup
step 1. Install packages from requirements.txt <br/>
step 2. Make a superuser. <br/>
## Backend
```source env/bin/activate``` <br/>
```pip install -r requirements.txt``` <br/>
### Start server
```python manage.py runserver 0.0.0.0:8000``` <br/>
### Run test
```python manage.py test```

### API endpoint
### Albums
    api_urls = {
        'List': '/api/album/',
        'Detail': '/api/album/<str:pk>/',
        'Create': '/api/album/',
        'Update': '/api/album//<str:pk>',
        'Delete': '/api/album/<str:pk>'
    }
