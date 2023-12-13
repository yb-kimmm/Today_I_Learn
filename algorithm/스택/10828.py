import sys;

input = sys.stdin.readline;
N = int(input())

arr = [];

for _ in range(N) : 
    stx = input().rstrip();
    
    if stx.startswith('push') == True : 
        arr.append(stx.split(' ')[1])

    if stx == 'top' : 
        if len(arr) == 0 : 
            print('-1')
        else : 
            print(arr[len(arr)-1])
    
    if stx == 'size' : 
        print(len(arr))
    
    if stx == 'empty' : 
        if len(arr) == 0 : 
            print('1')
        else : 
            print('0')
    
    if stx == 'pop' : 
        if len(arr) == 0 : 
            print('-1')
        else : 
            print(arr.pop())
    
