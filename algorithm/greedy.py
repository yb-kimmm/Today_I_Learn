# 탐욕 알고리즘


# 문제 1 동전 문제
# 지불해야하는 값이 4720원일 떄 1원 50원 100원 500원으로 동전의 수가 가장 적게만들어라

# coin_list = [500, 100, 50, 1]


# def min_coin_count(value, coin_list):
#     total_coin_count = 0
#     details = list()
#     coin_list.sort(reverse=True)

#     for coin in coin_list:
#         coin_num = value // coin  # 몫
#         total_coin_count += coin_num
#         value -= coin_num * coin
#         details.append([coin, coin_num])
#     return details


# print(min_coin_count(4720, coin_list))

# 문제 2 부분 배낭 문제
# 무게 제한이 k인 배낭에 최대 가치를 가지도록 물건을 넣는 문제
# 각 물건은 무게 (w) 가치 (k) 로 표현
# 물건은 쪼갤 수 있으므로 물건의 일부분이 배낭에 넣어질 수 있음 , 그래서 Fractional Knapsack Problem 으로 불린다.

# 물건(i) 1   2  3  4  5
# 무게(w) 10 15 20 25 25
# 가치(w) 10 12 10 8   5

def get_max_value(data_list, capacity):
    data_list = sorted(data_list, key=lambda x: x[1]/x[0], reverse=True)
    total_value = 0
    details = list()

    for data in data_list:
        if capacity - data[0] >= 0:
            capacity -= data[0]
            total_value += data[1]
            details.append([data[0], data[1], 1])
        else:
            fraction = capacity / data[0]
            total_value += data[1] * fraction
            details.append([data[0], data[1], fraction])
            break
    return total_value, details


data_list = [(10, 10), (15, 12), (20, 10), (25, 8), (30, 5)]

print(get_max_value(data_list, 30))
