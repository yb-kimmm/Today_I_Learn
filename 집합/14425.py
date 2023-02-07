import sys

n , m = map(int , input().split(' '));

input = sys.stdin.readline

iDict = {};

for i in range(n):
    tmp = input().rstrip();
    iDict[tmp] = 1;
    
cnt = 0;
for i in range(m):
    tmp = str(input().rstrip());
    
    if iDict.get(tmp) == 1 : 
        cnt +=1;
        
print( cnt ); 
   
