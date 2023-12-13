
n = int(input());

cnt = 0;
for i in range(1, n+1):
    lst = [];
    
    if i < 100 : 
        cnt += 1;
    else : 
        tmp = i
        if i >= 100 :  lst.append(  tmp // 100  ); tmp = tmp - (tmp // 100 * 100) ; 
        if i >= 10 :  lst.append(  tmp // 10  ); tmp = tmp - (tmp // 10 * 10);
        if i >= 1 :  lst.append(  tmp // 1  );
        
        
        if lst[1] - lst[0] == lst[2] - lst[1] :
            cnt += 1;

print(cnt)    
