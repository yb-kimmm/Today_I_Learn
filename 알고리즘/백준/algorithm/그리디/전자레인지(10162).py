import sys;

input = sys.stdin.readline

N = int(input())


answer = [0 , 0 , 0 ];
while N >= 10 : 

    if N >= 300 : 
        answer[0] += 1;
        N -= 300;
    elif N >= 60 :
        answer[1] += 1;
        N -= 60;
    elif N >= 10 :
        answer[2] += 1;
        N -= 10;

if N != 0 : 
    print(-1)
else :
    for i in answer:
        print(i , end= " ")
