
iter = int(input())

myList = []

for k in range(0, iter):
    w, h = map(int, input().split())
    myList.append((w, h))


print(myList)
