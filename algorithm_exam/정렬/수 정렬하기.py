# 5  1
# 5  2
# 2  3
# 3  4
# 4  5
# 1

iter = int(input())


myList = []

for k in range(0, iter):
    data = int(input())
    myList.append(data)

for i in range(0, len(myList)):
    temp = 0
    for j in range(i+1, len(myList)):
        if myList[i] > myList[j]:
            temp = myList[i]
            myList[i] = myList[j]
            myList[j] = temp

for i in myList:
    print(i)
