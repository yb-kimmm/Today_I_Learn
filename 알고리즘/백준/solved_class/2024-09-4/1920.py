import sys
# input = sys.stdin.readline;

n = int(input())
nLst = [* map(int , input().split())];


m = int(input())
mLst = [* map(int , input().split())];

# nLst.sort();
# mLst.sort();

# print(nLst , mLst)
mMap = {}
for i in nLst :
    mMap[i] = True;


for i in mLst :
    if i in mMap.keys() :
        print(1)
    else : 
        print(0)
