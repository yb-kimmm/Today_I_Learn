


max = -1;
x = 0;
y = 0

for i in range(0 , 9) :
    tmpList = list(map(int , input().split(' ')));
    
    for j in range(len(tmpList)) : 
        if tmpList[j] > max : 
            max = tmpList[j];
            x = i+1;
            y = j+1;


print(max);
print(x , y)
        
