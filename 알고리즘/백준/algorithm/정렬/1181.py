N  = int(input());

arr = [];
for _ in range(N):
    arr.append(input());

arr = list(set(arr));
arr.sort()
arr.sort(key=lambda x : len(x))

for i in range(0 , len(arr)) :
    print( arr[i] )

