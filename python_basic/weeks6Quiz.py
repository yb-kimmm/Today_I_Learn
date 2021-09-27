# 과제1.

# 리스트 `[1,2,3,...,n]` 를 섞는 방법은 총 `n!` 가지이다. `n = 3`일 때 `3! = 6`개의 섞은 결과는 아래와 같은 순서를 가진다고 하자.

# [1, 2, 3]
# [1, 3, 2]
# [2, 1, 3]
# [2, 3, 1]
# [3, 1, 2]
# [3, 2, 1]

# n과 k가 주어졌을 때, k번째 섞은 결과를 반환하시오. (단, `1 <= n <= 9`, `1 <= k <= n!`)

# 예시입력

# |n|k|return|
# |-|-|--|
# |3|3|`[2, 1, 3]`|
# |4|9|`[2, 3, 1, 4]`|

# 과제1번 코드란

import itertools
from math import factorial


def solution(n, k):
    answer = []
    num_lst = list(range(1, n+1))
    while n != 0:
        fact = factorial(n-1)
        answer.append(num_lst.pop((k-1)//fact))
        n -= 1
        k %= fact
    return answer


print(solution(3, 3))

# 과제2.
# 아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.

# ```
# 12 = 5 + 5 + (5 / 5) + (5 / 5)
# 12 = 55 / 5 + 5 / 5
# 12 = (55 + 5) / 5
# ```

# 5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
# 이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.

# 제한사항

# - N은 1 이상 9 이하입니다.
# - number는 1 이상 32,000 이하입니다.
# - 수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
# - 최솟값이 8보다 크면 -1을 return 합니다.

# 입출력 예

# |N|number|return|
# |-|------|-----|
# |5|12|4|
# |2|11|3|

# 입출력 예 설명

# - 예제 #1: 문제에 나온 예와 같습니다.
# - 예제 #2: `11 = 22 / 2`와 같이 2를 3번만 사용하여 표현할 수 있습니다.


def solution(N, number):
    possible_set = [0, [N]]
    if N == number:
        return 1
    for i in range(2, 9):
        case_set = []
        basic_num = int(str(N)*i)
        case_set.append(basic_num)
        for i_half in range(1, i//2+1):
            for x in possible_set[i_half]:
                for y in possible_set[i-i_half]:
                    # print(possible_set)
                    case_set.append(x+y)
                    case_set.append(x-y)
                    case_set.append(y-x)
                    case_set.append(x*y)
                    if y != 0:
                        case_set.append(x/y)
                    if x != 0:
                        case_set.append(y/x)
            if number in case_set:
                return i
            possible_set.append(case_set)
    return -1


print(solution(5, 12))

# 과제3.
# n개의 정수로 이루어진 리스트 nums와 정수 target이 주어졌을 때, nums에 있는 정수 4개를 합하여 target을 만들 수 있는 모든 조합을 구하시오. 단, 정답에는 동일한 정수 조합이 여러개 포함되어서는 안된다.

# 예시 입력
# ```python
# nums = [1, 0, -1, 0, -2, 2]
# target = 0
# [
#   [-1,  0, 0, 1],
#   [-2, -1, 1, 2],
#   [-2,  0, 0, 2]
# ]

# 과제 3번 코드란


def solution(nums, target):
    data_iter = itertools.combinations(nums, 4)
    answer = [list(data) for data in data_iter if sum(data) == target]
    return answer


nums = [1, 0, -1, 0, -2, 2]
target = 0
print(solution(nums, target))

# 과제4.

# 정수로 이루어진 수열 x가 주어졌을 때, `x[i-1] < x[i], x[i+1] < x[i]`인 `x[i]`를 피크라고 부른다. a에 피크가 단 하나 반드시 존재할 때, 이 피크를 찾아 출력하는 `O(logN)` 알고리즘을 구현하시오.

# |x | return|
# |--|----|
# |`[-4, -4, -2, 0, 0, 2, 4, 5, 6, 3, 2, -4, -6]` | 6 |
# |`[-1, -1, -1, -1, 0, 1, 20, 19, 17]` | 20 |

answer = None
cnt = 0


def sol(lst, idx, s):
    global answer, cnt
    length = len(lst)

    if answer is not None:
        return

    if idx <= 1 or idx >= length-2:
        return

    if lst[idx-1] < lst[idx] and lst[idx+1] < lst[idx]:
        answer = lst[idx]
        return

    cnt += 1
    if s == 'l' or s == 's':
        sol(lst, idx - (idx//2), 'l')
        if answer is None:
            sol(lst, idx - (idx // 2 + 1), 'l')

    if s == 'r' or s == 's':
        sol(lst, idx + (idx//2), 'r')
        if answer is None:
            sol(lst, idx + (idx // 2 - 1), 'r')


def solution(x):
    if len(x) < 3:
        return None

    i = len(x) // 2
    sol(x, i, 's')
    return answer


# data = [-4, -4, -2, 0, 0, 2, 4, 5, 6, 3, 2, -4, -6]
data = [-1, -1, -1, -1, 0, 1, 20, 19, 17]
print(solution(data))


# 과제5.

# 그래프를 DFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.
# - 입력: 첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다. 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.
# - 출력: V부터 방문된 점을 순서대로 출력한다.
# - 예시 입출력
# |N| M| V| edges| 출력|
# |--|--|--|-----|-------|
# |4|5|1|[[1, 2], [1, 3], [1,4], [2, 3], [3, 4]]|1 2 3 4|

N, M, V = 4, 5, 1
edges = [[1, 2], [1, 3], [1, 4], [2, 3], [3, 4]]


def solution(N, M, V, edges):
    visited = []
    adj_lists = [[]]*(N+1)

    for i in range(1, N+1):
        adj_list = list(map(lambda x: x[1], filter(lambda x: x[0] == i, edges))) + list(
            map(lambda x: x[0], (filter(lambda x: x[1] == i, edges))))
        adj_list.sort()
        adj_lists[i] = adj_list

    def dfs(node):
        visited.append(node)
        print(node, end=' ')
        for n in adj_lists[node]:
            if n not in visited:
                dfs(n)
    dfs(V)


solution(N, M, V, edges)
