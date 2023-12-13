import sys 
input = sys.stdin.readline

n , m  = map(int,input().split());

arr = [* map(int , input().split())];
sumArr = [];

for i in range(len(arr)) :
    if i == 0 : 
        sumArr.append(arr[0])
    else : 
        sumArr.append(sumArr[i-1] + arr[i])

    
for i in range(m) :
    a , b  = map(int,input().split());
    
    if a == 1 : 
        print(sumArr[b-1])
    else : 
        print(sumArr[b-1] - sumArr[a-2])

    
