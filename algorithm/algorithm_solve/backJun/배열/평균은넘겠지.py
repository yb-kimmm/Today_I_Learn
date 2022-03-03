N = int(input())

for i in range(N):
    num = list(map(int, input().split(' ')))

    result = 0
    for j in range(num[0]+1):
        if(j != 0):
            result += num[j]

    div = result / num[0]
    cnt = 0
    for j in range(num[0] + 1):
        if(j != 0):
            if(div >= num[j]):
                cnt += 1
    print("{:.3f}%".format(round((num[0] - cnt) / num[0] * 100, 3)))
