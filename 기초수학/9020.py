
    
def fn_sumCheck ( arr ,  a , b , N) :
    if arr[a] == True and arr[b] == True : 
        if a + b == N : 
            print(a , b);
    else : 
        fn_sumCheck(arr , a-1 , b+1 , N );
        
        
            
N = int(input())
lst = [int(input()) for x in range(N)];

maxValue = max(lst);
n = maxValue + 1;
arr = [False , False] + [True] * (n);


for i in range(2, int(n**0.5)+1 ):
    if arr[i]:
        for j in range(2*i, n, i):   
            arr[j] = False

for i in lst:
    fn_sumCheck(arr , int(i // 2) , int(i // 2) , i);
