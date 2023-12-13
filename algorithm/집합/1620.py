import sys

n , m = map(int , input().split(' '));

input = sys.stdin.readline

iDict = {};
jDict = {};

for i in range(n):
    pocketmon = input().rstrip();
    iDict[pocketmon] = i+1;
    jDict[str(i+1)] = pocketmon;
    
for i in range(m):
    tmp = str(input().rstrip());
    if tmp.isdigit() :
        print(jDict[tmp])
    else : 
        print(iDict[tmp])
   
