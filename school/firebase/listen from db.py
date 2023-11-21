import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

def doSomething(response):
    print(response.data)

cred = credentials.Certificate("C:/Users/19ASkrins.ACC/Downloads/lccs-test-a3d1b-firebase-adminsdk-50a10-9616e3af4f.json")
firebase_admin.initialize_app(cred, {'databaseURL': 'https://lccs-test-a3d1b-default-rtdb.europe-west1.firebasedatabase.app/'})

ref = db.reference()
ref = db.reference().child('switch')
ref.listen(doSomething)