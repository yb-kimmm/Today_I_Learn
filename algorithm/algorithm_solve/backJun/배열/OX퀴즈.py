cnt = int(input())


for i in range(cnt):
    tmpArr = input()
    listTmp = list(tmpArr)
    result = 0
    add = 0
    for j in range(len(listTmp)):

        if(listTmp[j] == "O"):
            add += 1
            result += add
        else:
            add = 0

    print(result)
