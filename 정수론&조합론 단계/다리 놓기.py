# 다리 놓기
import sys;

    
def factorial(num) :
    if num == 1 : return 1;
    elif num == 0 : return 1;
    return num * factorial(num-1)

T = int(input());

for i in range(T):
    N , K = map(int , input().split());
    if N < K : 
        N , K = K , N;
    
    print(factorial(N) // (factorial(K)*(factorial(N-K))))
