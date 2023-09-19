#question-71
# list1 = ["Football", "Basketball"]
#user_input = input("What is your favorite sport: ")
# list1.append(user_input)
# print(list1)

#question-72
# list = ["English", "Irish", "Mathematics", "Engineering", "Computer Science", "History"]
# user_input = input("What subject do you not like: ")
# list.remove(user_input)
# print(list)

#question-74
# colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Black", "White", "Brown"]
# start = int(input("starting number 0-4: "))
# end = int(input("ending number 5-9: "))
# print(colors[start:end])

#question-75
# list = [123,932,773,254]
# for x in list:
#     print(x)
# user_input = int(input("enter 3 digit number: "))
# if user_input in list:
#     print(list.index(user_input))
# else:
#     print("Item is not in list")

#question-76
# people = []
# for x in range(3):
#     user_input = input("name of person: ")
#     people.append(user_input)
# question = input("do you want to add another(Y,N): ")
# while question == "Y":
#     user_input = input("name of person: ")
#     people.append(user_input)
#     question = input("do you want to add another(Y,N): ")
# print(people)
# question2 = input("type in a name: ")
# print(people.index(question2))
# question3 = input("do you still want him in the party(Y,N): ")
# if question3 == "N":
#     people.remove(question2)
# print(people)

#question-78
# list = ["The Big Bang Theory", "Breaking Bad", "Home Alone", "Better Call Saul"]
# for x in list:
#     print(x)
# user_input = input("name a tv programme: ")
# index = int(input("index: "))
# list.insert(index,user_input)
# print(list)

nums = []
for x in range(3):
    user_input = int(input("add a number: "))
    nums.append(user_input)
    print(nums)
question = input("do you want the last number?(Y,N): ")
if question == "N":
    nums.pop()
print(nums)