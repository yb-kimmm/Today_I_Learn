#골드바흐 파티션
import sys;

input = sys.stdin.readline

m = int(input())

arr = [];
for _ in range(m) :
    arr.append(int(input()));
    
lst = [False ,False] + [True] * 1000001;

for i in range(2 , 1000001) :
    if lst[i] :
        for j in range( 2 * i , 1000001 , i ) :
            if lst[j]:
                lst[j] = False;


for i in arr : 
    cnt = 0;
    
    for j in range(2 , i//2+1):
        if lst[j] == True and lst[i-j] == True :
            cnt+=1;
    
    print(cnt)
        

