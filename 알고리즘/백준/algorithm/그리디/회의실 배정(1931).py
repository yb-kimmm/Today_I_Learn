import sys;
input = sys.stdin.readline
m = int(input());

arr = []
for _ in range(m) :
    arr.append([* map(int , input().rstrip().split())])

arr.sort(key=lambda x : (x[1],x[0]) )

result = []
a , b = arr[0]
result.append(arr[0])

for i in range(1 , len(arr)) : 
    
    [c , d ] = arr[i];
    
    if b <= c :
        a , b =  c , d;
        result.append(arr[i]);
    

print(len(result))
    
    
