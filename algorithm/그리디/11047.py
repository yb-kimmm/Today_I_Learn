n , m = map ( int , input().split());

# 동전 0

arr = [];
for _ in range(n) :
    i  = int(input());
    if m >= i :
        arr.append(i)
    

arr.sort(reverse=True);

cnt = 0;

tmp = m ;

for j in arr :
    
    if tmp < j :
        continue;
        
    mok = tmp // j;
    remain = tmp % j;
    
    cnt+= 1*mok;
    
    if remain == 0 :
        print(cnt)
        break;
    
    
    if remain != 0 :
        tmp = tmp - j * mok



