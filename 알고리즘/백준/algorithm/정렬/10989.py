import sys
input = sys.stdin.readline


arr = [0] * 10001;

N = int(input())

for _ in range(N):
    temp = int(input());
    arr[temp]+=1;

for i in range(10001):
    if arr[i] != 0 :
        for j in range(arr[i]) :
            print(i);
