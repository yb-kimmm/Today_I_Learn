import sys;
input = sys.stdin.readline

N = int(input())

arr = [0] * 10;

for i in str(N) : 
    tmp = int(i);

    if tmp == 6 or tmp == 9 : 
        if arr[6] <= arr[9]  : 
            arr[6]+=1;
        else : 
            arr[9]+=1;
    else : 
        arr[tmp] = arr[tmp] + 1;


print(max(arr));
