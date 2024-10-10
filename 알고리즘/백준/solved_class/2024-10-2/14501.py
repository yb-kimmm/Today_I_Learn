import sys
input = sys.stdin.readline;

a = int(input())

lst = []

for i in range(a):
    lst.append([*map(int , input().split())])

dp = [];

for i , v in enumerate(lst) : 
    l = v[0]
    result = v[1]
    # print(l , result)
    for j in range( i+1 , a):
        

        if j > l and (j + lst[i][0]) <= a: 
            result += lst[i][1]  
            l = lst[i][0]

            print(result , l , j)
    print()
    # print(result)
    # dp.append(result)
