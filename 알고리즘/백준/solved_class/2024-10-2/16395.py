# 입력
n , k = map(int,input().split())

dp = [ [] for _ in range(31) ]
dp[0] = [1]
dp[1] = [1,1]
dp[2] = [1, 2 , 1]

for i in range(3 , n):

    dp[i].append(1)

    for j in range(1 , i ) :  
        dp[i].append( 
            dp[i-1][j] + 
            dp[i-1][j-1] 
        )

    dp[i].append(1)

print(dp)

print(dp[n-1][k-1])

