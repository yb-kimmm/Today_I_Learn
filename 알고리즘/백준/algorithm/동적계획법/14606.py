import sys
input = sys.stdin.readline;

n = int(input())

lst = [] 

lst.append(0)
lst.append(0)
lst.append(1)

for i in range(3 , n+1) :
    lst.append( (i-1) + lst[-1] )

print(lst[n])