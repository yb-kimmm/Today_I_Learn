import sys
# input = sys.stdin.readline;

n = int(input())
size = [*map(int ,input().split())];
t , p = map(int ,input().split());

if max(size) == 0 :
    print( 0  , 0 )
else : 
    answer = []

    for i in size : 
        m = 1 if i / t > 1 else 0;

        if m not in answer:
            answer.append(m)

    v = 0 
    for i in answer: 
        v += (i+1)
    print(v , max(size) // p + 1)

