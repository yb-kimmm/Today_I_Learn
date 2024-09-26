import sys
# input = sys.stdin.readline;

a = int(input())

lst = [0];

count = 0;
while True :
    count+=1
    if count + lst[-1] > a: 
        print(count-1)
        break;
    
    lst.append(count + lst[-1]);
