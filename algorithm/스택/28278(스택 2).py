import sys;

input = sys.stdin.readline

N = int(input());

lst = [];
for i in range(N):
    xList = input().rstrip()
    
    if len(xList) > 2 : 
        lst.append(xList[2:])
    elif xList == '2' : 
        if len(lst) == 0 : 
            print(-1)
        else : 
            print(lst.pop())
    elif xList == '3' : 
        print(len(lst))
    elif xList == '4' : 
        if len(lst) == 0 : 
            print(1)
        else : 
            print(0)
    elif xList == '5' : 
        if len(lst) == 0 : 
            print(-1)
        else : 
            print(lst[-1])
