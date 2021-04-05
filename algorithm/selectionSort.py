# 최솟값을 찾아서 차례대로 정렬

import random


def selection_sort(data):
    for stand in range(len(data)-1):
        lowest = stand
        for index in range(stand+1, len(data)):
            if data[lowest] > data[index]:
                lowest = index
        data[lowest], data[stand] = data[stand], data[lowest]
    return data


data_list = random.sample(range(100), 10)

selection_sort(data_list)
print(data_list)
