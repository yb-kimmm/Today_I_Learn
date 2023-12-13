
N = int(input());
lst = [[0] * 100 for _ in range(100)];

for i in range(0 , N) :
    x , y = map(int,input().split(' '));
    
    for x1 in range(x , x+10) :
        for y1 in range(y , y+10) :
            lst[x1][y1] = 1;

result = 0;

for i in range(100):
    for j in range(100):
        if lst[i][j] == 1 :
            result += 1;        
            
print(result);
        
