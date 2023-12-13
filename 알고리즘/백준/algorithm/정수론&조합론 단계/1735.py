#  분수 합
n1 , m1 = map(int,input().split())
n2 , m2 = map(int,input().split())

m = m2 * m1 ;
n = n1 * m2  + n2 * m1;

def gcd(a, b):
    if a % b == 0:
        return b
    elif b == 0:
        return a
    else:
        return gcd(b, a % b)

print( n // gcd(n , m) , m // gcd(n , m) )
