arr = ['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'];
    #    3    4    5      6     7    8      9       10

str = list(input());

count = 0;
for i in range(0 , len(str)):
    for j in range(0 , len(arr)):
        if(arr[j].find(str[i]) != -1) :
            count = count + (j+3);  
            
print(count);
