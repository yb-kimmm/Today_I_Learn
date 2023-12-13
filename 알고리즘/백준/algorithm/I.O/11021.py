def fn_sum( i , j ) : 
    return i + j


count = int(input())

for c in range(count) :
    i , j =  map(int , input().split())
    print(f'Case #{c+1}: {fn_sum ( i  , j )}' )


        

