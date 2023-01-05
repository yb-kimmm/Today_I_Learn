from functools import reduce

a = input()
c = input()

result = reduce(lambda a ,b : int(a) + int(b) , c , 0 );

print(result)
