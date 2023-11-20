import time
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import serial

ser = serial.Serial()
ser.baudrate = 115200
ser.port = "COM8"
ser.open()

cred = credentials.Certificate("C:/Users/19ASkrins.ACC/Downloads/lccs-test-a3d1b-firebase-adminsdk-50a10-9616e3af4f.json")
firebase_admin.initialize_app(cred, {'databaseURL': 'https://lccs-test-a3d1b-default-rtdb.europe-west1.firebasedatabase.app/'})

ref = db.reference()
ref.update({'switch':''})
ref = db.reference().child('switch')


while True:
    print(ser.readline().decode('utf-8').strip())
    mb_switch = str(ser.readline().decode('utf-8').strip())
    print(mb_switch)
    if mb_switch.isdigit():
        ref.update({str(int(time.time())):{'Switch':mb_switch}})
    else:
        print('check data source')