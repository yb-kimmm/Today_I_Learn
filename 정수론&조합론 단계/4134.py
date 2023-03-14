# 다음 소수

import math

def primenumber(x):
    if x == 0 or x == 1 : 
        return False;
    for i in range (2, int(math.sqrt(x) + 1)):
        if x % i == 0:		
            return False
    return True				


n = int(input())
for i in range(n):
    m  = int(input())    
    
    while True : 
        if primenumber(m):
            print(m)
            break;
        else : 
            m+=1;
