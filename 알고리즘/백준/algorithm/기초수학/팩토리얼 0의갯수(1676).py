import sys

n = int(input())

if n == 0 : 
    print(0)
    exit();

answer = 1;
def factorial(n):
    if n == 1  : 
        return 1;
    else :
        return n * factorial(n-1) 


m = factorial(n);

m = str(m)
zeroCount = 0;
for i in range(len(m)-1 , 0 , -1) :
    if m[i] == '0' :
        zeroCount += 1;
    else : 
        break;

print(zeroCount)
