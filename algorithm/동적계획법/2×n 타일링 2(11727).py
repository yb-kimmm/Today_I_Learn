N = int(input())

arr = [];


arr.append(0);
arr.append(1); 
arr.append(3); 
arr.append(5); 
arr.append(11); 

for i in range(5 , N + 1):
    arr.append( ((arr[i-2] * 2) + (arr[i-1])) % 10007  )

print(arr[N])
