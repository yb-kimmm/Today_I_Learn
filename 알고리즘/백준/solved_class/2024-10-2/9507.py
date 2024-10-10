import sys
input = sys.stdin.readline;


dp = []
dp.append(1)
dp.append(1)
dp.append(2)
dp.append(4)

n = int(input())
lst=[]
for i in range(n):
    lst.append(int(input()))

for i in range(4 , max(lst)+1):
    dp.append(dp[i-1] + dp[i-2] + dp[i-3] + dp[i-4])

for i in lst:
    print(dp[i])

