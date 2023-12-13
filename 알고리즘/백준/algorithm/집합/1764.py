import sys


n , m = map(int , input().split(' '));

iDict = {};

lst = [];

for i in range(n):
    tmp = input();
    iDict[tmp]=True;
    
for i in range(m):
    tmp = input();
    if iDict.get(tmp) != None :
        lst.append(tmp);

lst.sort()

print(len(lst))
for i in lst : 
    print(i)
