

N = int(input());
lst = [  *map(int,input().split(' ')) ]


result = 0;
for i in range(N):
    cnt = 0;
    tmp = 2;
    
    if lst[i] == 1 :
        cnt +=1 ;
         
    elif lst[i] != 1 : 
        while( tmp < lst[i] ):
            if  lst[i] % tmp == 0 : 
                cnt +=1 ;
                break;
            else : 
                tmp += 1;

    if cnt == 0  :
        result +=1;
        
print(result);
            
