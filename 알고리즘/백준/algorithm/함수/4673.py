arr = [False for x in range(10001)]



def selfNumber() :
    cnt = 1;
    
    while True :
        if cnt == 10001:
            break;
        
        if cnt < 10 :
            arr[cnt+cnt] = True;

        tmp = cnt;
        for i in str(cnt) :
            tmp += int(i)
            
        if tmp <= 10000 :
            arr[tmp] = True;
            
        cnt+=1;

selfNumber();

for i in range(len(arr)):
    if arr[i] == False and i != 0:
        print(i)
