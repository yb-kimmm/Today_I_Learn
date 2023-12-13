
n = int(input())
m = int(input())


arr = []

for i in range(1 , 101) : 
    arr.append(i ** 2 )


answer = [];

for k , v in enumerate(arr):
    if v >= n and v <= m : 
        answer.append(v)
    elif v > m :
        break;
        
if len(answer) == 0  :
    print(-1)
else :
    print(sum(answer))
    print(min(answer))
    
        
    
