# 인사성 밝은 곰곰이
import sys;

N = int(input());

cnt = 0;
S = set();  
for i in range(N) : 
    tmp = input();

    if tmp == 'ENTER' : 
        cnt += len(S);
        
        S.clear();
    else : 
        S.add(tmp);

cnt += len(S);

print(cnt)
