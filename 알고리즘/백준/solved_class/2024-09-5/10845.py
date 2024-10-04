import sys

input = sys.stdin.readline

a = int(input().rstrip())

lst = [];

for _ in range(a):
    c = input().rstrip().split();

    if len(c) == 1 :
        if c[0] == 'front':
            if len(lst) == 0 :
                print(-1)
            else : 
                print(lst[0])
        elif c[0] == 'back':
            if len(lst) == 0 :
                print(-1)
            else : 
                print(lst[-1])
        elif c[0] == 'size':
            print(len(lst))
        elif c[0] == 'empty':
            if len(lst) == 0 :
                print(1)
            else : 
                print(0)
        elif c[0] == 'pop':
            if len(lst) == 0 :
                print(-1)
            else : 
                print(lst.pop(0))
        
    else : 
        if c[0] == 'push':
            lst.append(c[1])



