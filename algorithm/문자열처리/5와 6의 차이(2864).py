import sys

input = sys.stdin.readline;

n , m = input().split();

m1 = n.replace('5' , '6')
m2 = m.replace('5' , '6')

n1 = n.replace('6' , '5')
n2 = m.replace('6' , '5')

print(int(n1) + int(n2))
print(int(m1) + int(m2))





