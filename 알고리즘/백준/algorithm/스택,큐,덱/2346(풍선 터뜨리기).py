import sys;
import collections;

deque = collections.deque;


input = sys.stdin.readline;
n = int(input());
m = list(map(int , input().split(' ')));
d = deque(m)


index = 0

while len(d) != 0: 
    r = m[index]
    t = d.copy();

    for j in range(r+1):
        if r > 0:
            t.popleft()
        else : 
            t.pop()

    
    print(t[0])
    d.remove(m[index])
    index = r + t[0]
    # print(d.index(t[0]))

    



