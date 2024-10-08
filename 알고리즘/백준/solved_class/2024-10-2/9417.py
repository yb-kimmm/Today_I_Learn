import sys
input = sys.stdin.readline

num , n = map(int , input().split())

lst = [*map(int , input().split())]

lst.sort()
print(lst[n-1])



