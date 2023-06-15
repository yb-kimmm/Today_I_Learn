import sys;


N = int(input());


iDict = {};

for i in range(N): 
    n , m = input().split();

    if m == 'leave' : 
        iDict[n] = 0;
    else : 
        iDict[n] = 1;

cnt = 0;
lst = list(iDict.keys());
lst.sort(reverse=True);

for i in lst: 
    if iDict.get(i) == 1 :
        print(i)





    

