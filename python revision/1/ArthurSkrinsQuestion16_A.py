# Question 16(a)
# Name and School: Arthur Skrins, Athlone Community College
import random

def main_function():
    super_vaccines= ['A','B','C']
    s_name=input("Enter your surname:         ")    
    f_name=input("Enter your first name:      ")
    age=input("Enter your age:             ")
    eircode=input("Enter your ericode:         ")
    vaccine_trial=input("Do you agree to enrol in a vaccine trial?\nType 'Yes' or 'No':         ")
    
    print(f'Hello {f_name} {s_name} you are {age} years old') #formatted string
    
    if int(age) <= 49:
        print(f'{f_name}, you will receive the MRNA vaccine')
    else:
        print(f'{f_name}, you will receive the ADENO vaccine')
        
    if eircode[-1] in ['1','3','5','7','9']:
        print('You must attend Northfield for your vaccine')
    elif eircode[-1] in ['0','2','4','6','8']:
        print('You must attend Westwood for your vaccine')
        
    if vaccine_trial == 'Yes':
        print(f'You are now enrolled in the trial to receive Super vaccine {random.choice(super_vaccines)}')
    continue_choice=input("If you have finished entering people's details type 'END', otherwise press RETURN:")
    
    if continue_choice == 'END':
        return 0
    else:
        return 1
    
main_function()
while main_function() == 1: #calls back function until continue_choice inside function equals to 'END'
    main_function()