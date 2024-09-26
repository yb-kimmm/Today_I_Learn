import sys
# input = sys.stdin.readline;

n = int(input())


r = 0;

t = 1;
for i in range(n):
    a , b , c = map(int,input().split())
    t =  t / a * b;

    if c == 1 : r = 1 - r;

print(r  , int(t))


