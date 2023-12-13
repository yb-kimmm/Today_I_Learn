

T = int(input())



arr = [1 , 1 , 1 , 2];

for i in range(4 , 101) :
    arr.append(arr[i-2] + arr[i-3]);


for i in range(T) : 
    n = int(input());
    print(arr[n-1])
