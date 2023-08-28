from collections import deque

N = int(input())
queue = deque([x for x in range(1 , N+1)])
first = True;


while len(queue) > 1:
    if first == True :
        queue.popleft()
        first = False;
    else:
        queue.append(queue.popleft())
        first = True;

print(queue[0])
