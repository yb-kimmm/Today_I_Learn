import sys;

input = sys.stdin.readline;
N = int(input())

arr = [];

for _ in range(N) : 
    K = int(input().rstrip());
    
    if K != 0 : 
        arr.append(K)
    else : 
        arr.pop();

print(sum(arr))
    
    
