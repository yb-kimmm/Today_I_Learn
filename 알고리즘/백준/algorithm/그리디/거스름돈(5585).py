import sys;

input = sys.stdin.readline

N = int(input())


WON = 1000 - N;

answer = 0;

while WON != 0 :
    if WON >= 500 : 
        answer += 1;
        WON -= 500;
    elif WON >= 100 : 
        answer += 1;
        WON -= 100;
    elif WON >= 50 : 
        answer += 1;
        WON -= 50;
    elif WON >= 10 : 
        answer += 1;
        WON -= 10;
    elif WON >= 5 : 
        answer += 1;
        WON -= 5;
    elif WON >= 1 : 
        answer += 1;
        WON -= 1;

print(answer);
