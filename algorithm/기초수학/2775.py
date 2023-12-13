import sys;
input = sys.stdin.readline;


T = int(input())


for _ in range(T):
    k = int(input())
    n = int(input())
    
    
    lst = [x for x in range(1, n+1)]  # 0층 리스트
    
    for i in range(k) :
        for j in range(n) :
            if j == 0 :
                lst[j] = j+1;
            else : 
                lst[j] = lst[j-1] + lst[j];

    print(lst[n-1])                 
        
