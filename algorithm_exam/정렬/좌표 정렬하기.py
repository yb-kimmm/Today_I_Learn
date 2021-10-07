
iter = w, h = map(int, input().split())

myList = []

for k in range(0, iter):

    myList.append((w, h))


myList = sorted(myList, key=lambda x: (x[0], x[1]))


for k in range(0,  len(myList)):
    print(myList[k][0], myList[k][1], sep=" ")
