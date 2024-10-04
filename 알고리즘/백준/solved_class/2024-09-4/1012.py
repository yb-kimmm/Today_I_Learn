
import sys
input = sys.stdin.readline;



for i in range(int(input())):
    m , n , k = map(int , input().split());
    lst = [[0] * (m+1) for _ in range(n+1)];

    # for j in lst : 
    #     print(j)
        
    for _ in range(k):
        a , b  = map(int,input().split())
        lst[b][a] = 1;

    for j in lst : 
        for t in j : 
            print(j)

    print()     
    # m , n , k = map(int , input().split())
