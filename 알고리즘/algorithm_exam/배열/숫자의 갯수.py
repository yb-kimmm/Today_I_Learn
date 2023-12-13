arr = []

for i in range(3):
    h = int(input())
    arr.append(h)

value = arr[0] * arr[1] * arr[2]

lst = list(str(value))


for i in range(10):
    cnt = 0
    for j in range(len(lst)):
        if(int(lst[j]) == int(i)):
            cnt += 1

    print(cnt)
