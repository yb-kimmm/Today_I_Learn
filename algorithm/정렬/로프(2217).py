import sys

n = int(input())

lst = [];

for i in range(n):
    lst.append( int(input()) );

lst.sort(reverse = True)
result = [];

for j in range(n):
    result.append(lst[j] * (j+1))

print(max(result))

