
arr = [];
sum = 0;
for _ in range(5) :
    x = int(input());
    arr.append(x)
    sum += x;

arr.sort();


print(int(sum / len(arr)))
print(int(arr[(len(arr)//2)]));
