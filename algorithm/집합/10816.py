import sys

input = sys.stdin.readline

n = input();

lst = [ * input().rstrip().split(' ')];

iDict = {};
for i in lst:
    if iDict.get(i) == None : 
        iDict[str(i)]=1;
    else : 
        iDict[str(i)]+=1;
     
m = input();

lst = [ * input().rstrip().split(' ')];

for i in lst:
    if iDict.get(str(i)) == None : 
        print(0 , end= " " )
    else : 
        print( iDict.get(str(i)) , end= " ")
