import sys

input = sys.stdin.readline().rstrip

n = input();

iDict = {}

for i in range(1 , len(n) + 1):
    for j in range( len(n) - i + 1  ):
        iDict[n[j : i+j]] = True;
    
    
print(len(iDict))
