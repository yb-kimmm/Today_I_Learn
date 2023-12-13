import sys

t = int(input())

lst = [];
lst.append(0)
lst.append(1)
lst.append(1)

for i in range(3 , (t+1)):
    lst.append(lst[i-1] + lst[i-2])

print(lst[t])





