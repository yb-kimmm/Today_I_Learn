T = int(input());

arr = [0 for _ in range(T)]

def recursion(s, l, r , i):
    arr[i] += 1;
    if l >= r: return 1
    elif s[l] != s[r]: return 0
    else: return recursion(s, l+1, r-1 , i )

def isPalindrome(s , i):
    c = 0;
    return recursion(s, 0, len(s)-1 , i)


for i in range(T):
    s = str(input());
    print( isPalindrome( s , i) , arr[i]);

