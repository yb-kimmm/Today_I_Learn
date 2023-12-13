from collections import deque

N , M = map(int,input().split());

queue = deque([x for x in range(1 , N+1)])

count = 1;
lst = [];
while len(queue) > 0:
    if count == M :
        lst.append(str(queue.popleft()))
        count = 1;
    else : 
        queue.append(str(queue.popleft()));
        count = count + 1;

print("<" + ", ".join(lst) + ">")
