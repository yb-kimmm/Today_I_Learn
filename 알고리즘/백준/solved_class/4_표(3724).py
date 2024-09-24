
for i in range(int(input())):
    x , y  = map(int , input().split());
    lst = [];

    for j in range(y):
        lst.append([*map(int, input().split())])

    result = {}
    for offsetX in range(x):
        sumValue = 1;
        for offsetY in range(y) :
            sumValue *= lst[offsetY][offsetX]
    
        result[sumValue] = offsetX + 1;
    
    print(result[max(result)])        