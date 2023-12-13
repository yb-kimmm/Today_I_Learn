import sys;

input = sys.stdin.readline

T = input().rstrip()


lst = T.split('-') 

sumNum = 0;

for i in lst[0].split('+') : 
    sumNum += int(i)

for i in lst[1:] : 
    for j in i.split('+') :
        sumNum -= int(j)

print(sumNum)
