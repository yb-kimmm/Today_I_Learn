# 이항계수
import sys;

    
def factorial(num) :
    if num == 1 : return 1;
    elif num == 0 : return 1;
    return num * factorial(num-1)

N , K = map(int , input().split());

print(factorial(N) // (factorial(K)*(factorial(N-K))))
