xLst = []
yLst = []

for _ in range(3):
    x, y = map(int, input().split(' '))
    xLst.append(x)
    yLst.append(y)

x4 = 0;
y4 = 0;

for i in range(3):
    if xLst.count(xLst[i]) == 1:
        x4 = xLst[i]
    if yLst.count(yLst[i]) == 1:
        y4 = yLst[i]
        
print(x4, y4)
