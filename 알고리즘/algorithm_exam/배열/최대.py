arr = []
maxCnt = 0

for i in range(9):
    h = int(input())
    arr.append((h, i))


maxValue = arr[0][0]

for i in range(len(arr)):

    if(arr[i][0] > maxValue):
        maxValue = arr[i][0]
        maxCnt = arr[i][1]


print(maxValue, maxCnt + 1)
