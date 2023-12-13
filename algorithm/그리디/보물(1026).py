import sys;

input = sys.stdin.readline

N = int(input())

arr1 = list(map(int,input().split()))
arr2 = list(map(int,input().split()))



sumArr = 0;

for i in range(N):
    index1 = 0;
    index2 = 0;

    for idx , val in enumerate(arr1) : 
        min1 = min(arr1);
        if(val == min1) :
            index1 = idx 


    for idx1 , val1 in enumerate(arr2) : 
        max1 = max(arr2);
        if(val1 == max1) :
            index2 = idx1 

    sumArr += arr1[index1] * arr2[index2];
    arr1.pop(index1)
    arr2.pop(index2)

print(sumArr);


