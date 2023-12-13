lst = [];

while(True) :
    tmp = int(input());
    if tmp == 0 :
        break;
    else : 
        lst.append(tmp);

maxValue = max(lst);


n = maxValue * 2 + 1;
arr = [True] * (n * 2);


for i in range(2, int(n**0.5)+1 ):
    if arr[i]:
        for j in range(2*i, n, i):   
            arr[j] = False


for i in lst:
    if i == 0 : continue;
    if i == 1 : print(1);
    else : 
        cnt = 0;
        for j in range( i+1 , (i * 2)) :
            if arr[j] == True :
                cnt +=1;
            
        print(cnt); 
