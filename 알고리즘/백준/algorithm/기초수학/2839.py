import sys;
input = sys.stdin.readline;

num = int(input())
cnt = 0;

while num >= 0 : 
    if num % 5 == 0 :
        print( (num // 5) + cnt );
        exit();
    
    num -= 3;
    cnt += 1;


print(-1)



