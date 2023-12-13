import sys
input  = sys.stdin.readline


x , y , n , m  = map(int , input().rstrip().split(' '));


lst = [];

lst.append(x);
lst.append(y);
lst.append(n-x);
lst.append(m-y);

print(min(lst))
