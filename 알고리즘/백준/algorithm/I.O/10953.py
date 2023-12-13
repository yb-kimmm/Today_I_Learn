
def fn_sum( i , j):
    return i + j


count = int(input())

for c in range(count) :
    i , j =  map(int , input().split(','))
    print( fn_sum ( i  , j ))

