import sys 
input = sys.stdin.readline

n , m  = map(int,input().split());

arr = [* map(int , input().split())];
sumArr = [];

sum = 0;

for i in range(m) : 
    sum += arr[i];

sumArr.append(sum)

for i in range( 1 , n-m+1 ) : 
    sumArr.append(sumArr[i-1] + arr[i+m-1] - arr[i-1])
    

print(max(sumArr))


    
