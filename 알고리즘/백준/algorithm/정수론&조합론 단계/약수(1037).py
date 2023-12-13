
import sys;

N = int(input())

lst = list(map(int , input().split( )))

if N == 1 : 
    print(lst[0] * lst[0])
elif N == 2 : 
    print(lst[0] * lst[1])
else : 
    lst.sort();
    print(lst[0]*lst[-1])
        
