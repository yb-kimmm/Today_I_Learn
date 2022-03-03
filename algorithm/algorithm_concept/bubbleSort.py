def bubbleSort(tList):

    for t in range(0, len(tList) - 1):
        swap = False
        for index in range(len(tList) - t - 1):
            if tList[index] >= tList[index+1]:
                tList[index], tList[index+1] = tList[index+1], tList[index]
                swap = True

        if swap == False:
            break


tList = [1, 5, 2, 4, 3, 13, 3, 54]

bubbleSort(tList)

print(tList)
