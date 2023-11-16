import random

#118
# num = int(input("enter number: "))
# 
# def count(num):
#     for x in range(0,num+1):
#         print(x)
# count(num)

#119
# low = int(input("low number: "))
# high = int(input("high number: "))
# comp_num = random.randint(low, high)
# user_num = int(input("I am thinking of... "))
#  
# def checknum(comp_num, user_num):
#     if user_num > high:
#         return print("number higher than limit")
#     if user_num < low:
#         return print("number lower than limit")
#     if comp_num < user_num:
#         return print(f'{user_num} is too big')
#     if user_num < comp_num:
#         return print(f'{user_num} is too small')
#     if comp_num == user_num:
#         return print("yipiieeee")
# checknum(comp_num, user_num)
# while user_num != comp_num:
#     user_num = int(input("I am thinking of... "))
#     checknum(comp_num, user_num)

#120
# userinp = input("1) Addition\n2) Subtraction\nEnter 1 or 2: ")
# def addition():
#     x = random.randint(5,20)
#     y = random.randint(5,20)
#     print(f'{x} + {y}')
#     useranswer = int(input("add both numbers: "))
#     xy = x + y
#     def check():
#         if useranswer != xy: print("incorrect")
#         else: print("correct")
#     check()
# def subtraction():
#     x = random.randint(25,50)
#     y = random.randint(1,25)
#     print(f'{x} - {y}')
#     useranswer = int(input("subtract both numbers: "))
#     xy = x - y
#     def check():
#         if useranswer != xy: print("incorrect")
#         else: print("correct")
#     check()
# if userinp == "1":
#     addition()
# if userinp == "2":
#     subtraction()
# if userinp != "1" and userinp != "2":
#     print("invalid")

#121
userinp = input("[1] add name\n[2] change name\n[3] delete name\n[4] view all names\n")