import sys
input = sys.stdin.readline;

n , m  = map(int,input().split())

passwordMap = {}
for i in range( n + m ):
    if i < n :
        site , password = input().split()
        passwordMap[site] = password;
    else : 
        site = input().rstrip()
        print(passwordMap[site]);
        