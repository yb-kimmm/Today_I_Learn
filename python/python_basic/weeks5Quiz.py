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
import heapq
from collections import defaultdict
matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
]
#


def searchMatrix(matrix, target):
    return False


print(searchMatrix(matrix, 13))


# 과제 2번 코드란
# 과제2.

# ----
# 두 문자열 A와 B가 있을 때, 두 문자열의 '최대공약문자열' C를 아래와 같이 정의하자.

# 1. 문자열 C를 반복하여 문자열 A와 B를 생성할 수 있다.
# 1. 가능한 C 중에 가장 긴 문자열을 C로 한다.
# 1. 위 조건을 만족하는 C가 없으면 빈 문자열을 C로 한다.

# 이 때, 문자열 A와 B를 입력받아 C를 출력하는 프로그램을 작성하시오.

def gcdString(A, B):
    standard = min(len(A), len(B))
    for i in range(standard, 0, -1):
        if standard == len(A):
            t = A[:i]
            q, r = divmod(len(B), len(t))
            if t*q == B and r == 0:
                return t
        else:
            t = B[:i]
            q, r = divmod(len(A), len(t))
            if t*q == A and r == 0:
                return t
    return ''


A = 'ababcde'
B = 'ababcde'
print(gcdString(A, B))

A = 'ababababab'
B = 'abab'
print(gcdString(A, B))

A = 'abababab'
B = 'abab'
print(gcdString(A, B))

A = 'fast'
B = 'campus'
print(gcdString(A, B))


# 과제3.

# ----
# n개의 노드가 있는 그래프가 있다. 각 노드는 1부터 n까지 번호가 적혀있다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 한다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미한다.

# 노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성하라.

# - 제한사항
#   - 노드의 개수 n은 2 이상 20,000 이하입니다.
#   - 간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
#   - vertex 배열 각 행 `[a, b]`는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.

# - 입출력 예

# |n|vertex|return|
# |--|-----|------|
# |6|`[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]`|3|

# 과제 3번 코드란


def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    queue = []
    heapq.heappush(queue, [distances[start], start])

    while queue:
        current_distance, current_node = heapq.heappop(queue)

        if distances[current_node] < current_distance:
            continue

        for adjacent in graph[current_node]:
            distance = current_distance + 1

            if distance < distances[adjacent]:
                distances[adjacent] = distance
                heapq.heappush(queue, [distance, adjacent])

    return distances


def solution(n, vertex):
    graph_dict = defaultdict(list)
    for i in vertex:
        graph_dict[i[0]].append(i[1])
        graph_dict[i[1]].append(i[0])

    # print(graph_dict)
    result_dict = dijkstra(graph_dict, 1)
    # print(result_dict)

    # t = heapq.heappush()
    # t = heapq.heapify(result_dict)
    # print(t)
    res = sorted(result_dict.items(), key=lambda x: x[1], reverse=True)
    # print(res)
    k, v = max(res, key=lambda x: x[1])
    answer = 0
    for item in res:
        if item[1] == v:
            answer += 1

    return answer


print(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]))


# ## 과제4.

# ----
# 마을에 1부터 N의 고유 번호를 가진 사람들이 있다. 소문으로는 마을 사람 중에 마을 판사가 있다고 한다. 마을 판사가 실제로 존재한다면,

# - 마을 판사는 아무도 믿지 않는다.
# - 다른 모든 사람들은 마을 판사를 믿는다.
# - 마을 판사가 있다면 오직 한명 뿐이다.

# 리스트 trust가 주어졌을 때, `trust[i] = [a, b]`는 고유 번호가 a인 사람이 고유 번호가 b인 사람을 믿는다는 것을 의미한다고 한다.

# 마을 판사가 존재한다면 마을 판사의 고유 번호를, 존재하지 않는다면 -1을 출력하는 프로그램을 작성하시오.

# (단, a가 b를 믿고 b가 c를 믿는다고 할 때, a가 c를 믿는다는 의미는 아니다.)

# 예시입력

# |N| trust| 출력|
# |-|------|----|
# |2| `[[1,2]]`| 2|
# |3| `[[1,3],[2,3]]` | 3 |
# |3| `[[1,3],[2,3],[3,1]]`| -1 |
# |3|`[[1,2],[2,3]]` | -1 |
# |4|`[[1,3],[1,4],[2,3],[2,4],[4,3]]`| 3 |

# 과제 4번 코드란


def ck(number, dic):
    return_dic = dict()
    for n in range(number):
        count = len(dic[n+1])
        return_dic[n+1] = count
    return return_dic


def solution(N, trust):
    to_trust = defaultdict(list)
    from_trust = defaultdict(list)

    for t in trust:
        if to_trust[t[0]]:
            to_trust[t[0]].append(t[1])
        else:
            to_trust[t[0]] = [t[1]]

        if from_trust[t[1]]:
            from_trust[t[1]].append(t[0])
        else:
            from_trust[t[1]] = [t[0]]

    to_trust = ck(N, to_trust)
    from_trust = ck(N, from_trust)
    for number in range(N):
        if to_trust[number+1] == 0 and from_trust[number+1] == N-1:
            return number+1
    return -1


print(solution(2, [[1, 2]]))
print(solution(3, [[1, 3], [2, 3]]))
print(solution(3, [[1, 3], [2, 3], [3, 1]]))
print(solution(3, [[1, 2], [2, 3]]))
print(solution(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]))
