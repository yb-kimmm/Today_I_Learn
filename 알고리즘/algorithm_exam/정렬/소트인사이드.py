n = int(input())

li = []
for i in str(n):
    li.append(int(i))


# print(len(li))

for i in range(0, len(li)):
    for j in range(i, len(li)):
        temp = 0
        if(li[i] < li[j]):
            temp = li[i]
            li[i] = li[j]
            li[j] = temp


for i in li:
    print(i, end='')
