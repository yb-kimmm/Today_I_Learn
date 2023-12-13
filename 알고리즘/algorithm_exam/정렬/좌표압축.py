import sys

N = int(input())
l = list(map(int, sys.stdin.readline().split()))
a = {}
b = {}

# for i in range(len(l)):
#     m = str(i)
#     a[m] = l[i]

m = min(l)

l2 = list(set(l))
l2.sort()

tmp = 0


for i in range(len(l2)):
    b[l2[i]] = i


for i in l:
    print(b[i], end=' ')
