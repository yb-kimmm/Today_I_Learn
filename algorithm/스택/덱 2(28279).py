from collections import deque
import sys
input = sys.stdin.readline

N = input().rstrip();

queue = deque()

for i in range(int(N)) : 
    temp = list(map(int, input().split()))

    if temp[0] == 1 : 
        queue.appendleft(temp[1]);
    elif temp[0] == 2 : 
        queue.append(temp[1]);
    elif temp[0] == 3 : 
        if len(queue) != 0 :
            print(queue.popleft())
        else : 
            print(-1)
    elif temp[0] == 4 : 
        if len(queue) != 0 :
            print(queue.pop())
        else : 
            print(-1)
    
    elif temp[0] == 5 : 
        print(len(queue))
    elif temp[0] == 6 : 
        if len(queue) == 0 :
            print(1)
        else : 
            print(0)
    elif temp[0] == 7 : 
        if len(queue) != 0 :
            print(queue[0])
        else : 
            print(-1)
    elif temp[0] == 8 : 
        if len(queue) != 0 :
            print(queue[len(queue)-1])
        else : 
            print(-1)
