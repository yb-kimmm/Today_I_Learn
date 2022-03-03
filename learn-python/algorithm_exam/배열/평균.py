cnt = int(input())
tmpArr = list(map(int, input().split(' ')))


maxValue = 0
for i in range(len(tmpArr)):
    if (tmpArr[i] > maxValue):
        maxValue = tmpArr[i]


value = 0

for i in range(len(tmpArr)):
    value += tmpArr[i] / maxValue * 100

print(value / len(tmpArr))
