t  = int(input())

zero = [1 , 0 , 1 ];
one = [0 , 1 , 1 ];

def fibonacci(n):
    global zero;
    global one;
    if n >= 3 :
        for i in range(3 , n+1):
            zero.append(zero[i-1] + zero[i-2])
            one.append(one[i-1] + one[i-2])


inputArr =[];
for i in range(t):
    n = int(input())
    inputArr.append(n);


fibonacci(max(inputArr))

for i in inputArr:
    print(zero[i] , one[i])



