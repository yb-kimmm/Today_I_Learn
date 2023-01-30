        
m , n = map(int, input().split())

n = n + 1;
arr = [True] * (n);
arr[0] = False;
arr[1] = False;


for i in range(2, int(n**0.5)+1 ):
    if arr[i]:
        for j in range(2*i, n, i):   
            arr[j] = False




for i in range(m, n):
    if i > 1 and arr[i] == True:
        print(i)
