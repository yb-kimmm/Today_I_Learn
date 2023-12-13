

N = int(input())
num = [* map(int,input().split())];

for i in range(1 , N):
    num[i] = max(num[i] , num[i-1] + num[i])

print(max(num))
