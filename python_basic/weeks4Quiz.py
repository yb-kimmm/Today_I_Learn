# 과제1.

# ----
# Min Heap 자료구조를 이용하면 최대값을 `O(logN)`의 시간복잡도로 찾을 수 있다. Min Heap을 이용하면 우선순위 값이 낮은 자료를 먼저 출력하는 Priority Queue를 구현할 수 있다. Min Heap을 이용한 Priority Queue는 아래와 같은 특징을 가진다.

# - Min Heap을 이용한 Priority Queue의 특징
#   - 자료를 입력하는 동작과 출력하는 동작 모두 `O(logN)`으로 이루어진다.
#   - 우선순위 값이 낮은 자료를 먼저 출력하되, 우선순위 값이 같은 자료끼리는 순서를 고려하지 않는다.
#   - 다음과 같은 Method들을 구현한다.
#     1. `is_empty()`: Queue가 비어있으면 True, 비어있지 않으면 False를 출력한다.
#     1. `put()`: Priority Queue에 자료를 입력한다. 자료는 길이가 2인 Tuple로, `(우선순위, 자료)` 형태로 입력받는다.
#     1. `get()`: Priority Queue에서 자료를 출력한다. 출력한 데이터는 Priority Queue에서 삭제한다. 더이상 출력할 데이터가 없는 경우 None을 출력한다.
#     1. `peek()`: Priority Queue에서 자료를 출력한다. 출력한 데이터는 Priority Queue에 그대로 유지한다. 더이상 출력할 데이터가 없는 경우 None을 출력한다.


class PriorityQueue:
    def __init__(self):

        pass

    def is_empty(self):
        pass

    def put(self, data):
        pass

    def get(self):
        pass

    def peek(self):
        pass


# ```


pq = PriorityQueue()
pq.put((0, 'a'))
pq.put((5, 'b'))
pq.put((2, 'c'))
pq.put((1, 'd'))
pq.put((3, 'e'))
pq.put((4, 'f'))

print(pq.get())
print(pq.get())
print(pq.get())
print(pq.get())
print(pq.get())
print(pq.get())
print(pq.get())

# ----

# 과제2.

# ----
# 오름차순으로 정렬된 N개의 정수를 가진 List가 주어져있을 때, 해당 List에 존재하는 서로 다른 값이 몇 가지인지 알아내는 알고리즘을 구현하라. 알고리즘의 제약사항은 아래와 같다.
# (알고리즘은 `1 <= N <= 10000`에서 테스트된다.)
# - 추가 메모리 사용은 `O(1)`으로 제한된다. 따라서 set()와 dict() 등의 자료구조를 사용할 수 없다.
# - 알고리즘의 시간복잡도는 `O(N)` 이하로 제한된다.


# def countUniques(a):
#     # print(len(a))
#     tem = a[0]
#     count = 1
#     for i in range(1, len(a)):
#         if tem != a[i]:
#             count += 1
#             tem = a[i]

#     return count


# print(countUniques([-1, 1, 1, 1, 1, 4, 4, 4, 4, 10, 14, 14]))  # 5
# print(countUniques([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]))  # 2

# ----


# 과제3.

# ----
# N개의 문자열로 이루어진 List에서 전체 문자열이 앞 n개 문자열이 같다고 할때, 가장 큰 n을 출력하는 알고리즘을 구현하라.
#  (즉, 주어진 모든 문자열의 앞의 몇개의 문자가 일치하는지 출력하라)

# # ```python
# def solution(a):
#     count = 0
#     l = 0

#     while l < len(a[0]):
#         temp = a[0][l]
#         for i in range(1, len(a)):
#             if temp != a[i][l]:
#                 return count

#         count += 1
#         l += 1

#     return count


# /print(solution(['abcd', 'abcd', 'abcd', 'abcd', 'abcd']))  # 3
# print(solution(['abcd', 'gbce', 'abchg', 'abcfwqw', 'abcdfg']))  # 0

# ----


# 과제4.

# ----
# 자연수 중, **각 자리수를 제곱한 것을 더하는 과정을 반복했을 때 1으로 끝나는 수**를 '
# 행복한 수'라고 한다. '행복한 수'가 아닌 경우 이 과정이 1에 도달하지 못하고 같은 **수열이 반복되는 무한 루프**에 빠지게 된다.
# 자연수를 입력받았을 때 '행복한 수'인지 판별하는 알고리즘을 작성하라.

# '행복한 수'를 찾는 과정의 예
#   ```
#   19이 행복한 수인지 확인하는 과정
#   1^2 + 9^2 = 82
#   8^2 + 2^2 = 68
#   6^2 + 8^2 = 100
#   1^2 + 0^2 + 0^2 = 1 --> True
#   ```
# ```python
# import random


# def solution(a):

#     i = (n % 10) ** 2
#     i += (n//10) ** 2

#     if i == 1:
#         return True
#     else:
#         return solution(i)


# data_list = random.sample(range(100), 10)

# for i in range(0, len(data_list)):
#     print(data_list[i])
# print(solution(data_list[i]))  # False
