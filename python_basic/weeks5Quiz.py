# 과제1.
# 이진 탐색법은 정렬된 자료를 탐색하는 데에 사용할 수 있다.
# 인덱스가 낮을 수록 더 작은 값으로 정렬된 2차원 리스트에서 `target`을 찾으면 True를 반환하고,
# `target`을 찾을 수 없으면 False를 반환하는 프로그램을 작성하시오.

# 예시 입력1
# ```python
# matrix = [
#   [1,   3,  5,  7],
#   [10, 11, 16, 20],
#   [23, 30, 34, 50]
# ]
# target = 3
# 출력: True
# ```

# 예시 입력2
# ```python
matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
]
#


def searchMatrix(matrix, target):
    return False


print(searchMatrix(matrix, 13))
