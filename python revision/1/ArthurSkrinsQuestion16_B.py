list_1 = [4,5,9,8,10,17,99,77]
x = sorted(list_1)

if len(x)%2 == 0:
    print((x[(len(x)//2)-1]+x[(len(x)//2)])/2)
else:
    print(x[len(x)//2])