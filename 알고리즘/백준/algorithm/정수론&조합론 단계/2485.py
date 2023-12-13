#2485

import sys;
input = sys.stdin.readline


def gcd(a , b) :
    if a < b : 
        a , b = b , a;
    if b == 0 :
        return a;
    return gcd(b , a%b)
    

m = int(input())

arr1 = [];

tmp = int(input())

for a in range(m-1):
    i = int(input());
    a , b = i , tmp;
    if b > a :
        a , b = b , a;
    arr1.append(a-b)
    tmp = a


temp = arr1[0]
for a in arr1 :
    temp = gcd(temp , a)
    
result = 0;

for j in arr1 :
    result += j // temp -1 ;

print(result)


