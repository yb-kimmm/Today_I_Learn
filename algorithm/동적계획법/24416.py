


n = int(input())
arr  = [ 0 for _ in range(n+1)];

count = 0;

def fibonacci(n): 
    
    global count;
    arr[1] = 1;
    arr[2] = 1;
    
    for i in range(3 , n+1) :
        count += 1;
        arr[i] = arr[i-1] + arr[i-2];
    
    return arr[n]

print(fibonacci(n) , count)
