
import sys
input = sys.stdin.readline;

a = int(input())

dp = [0,1,1]

if a < 3 : 
    print(dp[a])

else : 
    a1 , b1 = dp[2] , dp[1] ;

    for i in range(3 , a+1) : 
        c1 = (a1 +b1)% 1000000007 
        b1 = a1
        a1 = c1

    print(c1)