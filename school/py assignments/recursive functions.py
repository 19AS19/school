def one(number_list):
    if len(number_list) == 0:
         return 0
    else: return number_list[-1] + one(number_list[:-1])
one([1,2,3,4,5,6])