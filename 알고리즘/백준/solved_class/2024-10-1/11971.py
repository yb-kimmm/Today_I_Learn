n , m  = map(int,input().split());

nLst = []
mLst = []

for i in range(n):
    nLst.append([*map(int,input().split())])

for i in range(n):
    mLst.append([*map(int,input().split())])


for i in range(n):
    print(mLst[i][1] - nLst[i][1])
    
    print(100 / nLst[i][0] )

    mLst[i][0]
    