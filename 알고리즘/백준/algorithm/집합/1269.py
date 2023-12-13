import sys
input  = sys.stdin.readline


n , m = map(int , input().rstrip().split(' '));

iDict = {};
jDict = {};

lst = [* input().rstrip().split(' ')];

lst1 = [* input().rstrip().split(' ')];

for i in lst:
    iDict[i]=True;
    
for i in lst1:
    jDict[i]=True;
    
    
cnt = 0;
for i in lst:
    if jDict.get(i) == None : 
        cnt +=1;
    
for i in lst1:
    if iDict.get(i) == None : 
        cnt +=1;

print(cnt)
