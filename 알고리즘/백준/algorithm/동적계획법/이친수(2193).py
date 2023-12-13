t  = int(input())


arr = [0 , 1 , 1 , 2]

def dp (n):
    if n > 3:
        for i in range(4 , n+1) :
            arr.append(arr[i-1] + arr[i-2]);

dp(t)

print( arr[t] )
