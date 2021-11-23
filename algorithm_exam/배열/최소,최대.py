cnt = int(input())
tmpArr = list(map(int, input().split(' ')))


def arrMaxMin(arr):
    tmp1 = arr[0]
    tmp2 = arr[0]
    for i in range(len(arr)):
        if(arr[i] > tmp1):
            tmp1 = arr[i]

        if(arr[i] < tmp2):
            tmp2 = arr[i]

    lst = list()
    lst.append(tmp2)
    lst.append(tmp1)

    return lst


sortList = arrMaxMin(tmpArr)


print(sortList[0], sortList[1])
