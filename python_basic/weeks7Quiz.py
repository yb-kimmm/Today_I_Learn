# ## 과제1.

# 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

# 예를 들어, 주어진 정수가 `[6, 10, 2]`라면 `[6102, 6210, 1062, 1026, 2610, 2106]`를 만들 수 있고, 이중 가장 큰 수는 `6210`입니다.

# 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

# - 제한 사항
#   - numbers의 길이는 1 이상 100,000 이하입니다.
#   - numbers의 원소는 0 이상 1,000 이하입니다.
#   - 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

# - 입출력 예


#   | numbers | return |
#   |--------|--------|
#   |`[6, 10, 2]` | 6210 |
#   |`[3, 30, 34, 5, 9]` | 9534330 |

# 과제1번 코드란

from collections import deque
numbers = [6, 10, 2]


def solution(numbers):
    numbers = list(map(str, numbers))
    result = sorted(numbers, key=lambda x: (
        x[0], x[1 % len(x)], x[2 % len(x)], x[3 % len(x)]), reverse=True)

    answer = ''.join(result)
    if int(answer) == 0:
        return '0'
    else:
        return answer


print(solution(numbers))


# 과제2.

# ----
# 여러 개의 구간이 리스트 intervals로 주어졌을 때, 겹치는 구간을 모두 병합하여 출력하시오.

# 입력 예시1

# ```
# 입력: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
# 출력: [[1, 6], [8, 10], [15, 18]]
# 설명: 구간[1, 3]와[2, 6]이 겹치므로, [1, 6]으로 병합하였다.
# ```

# 입력 예시 2

# ```
# 입력: intervals = [[1, 4], [4, 5]]
# 출력: [[1, 5]]
# 설명: 구간[1, 4]와[4, 5]는 겹치는 것으로 간주한다.
# ```


# 과제 2번 코드란
def solution(intervals):
    merged = []
    for arr in sorted(intervals, key=lambda x: x[0]):

        if merged and arr[0] <= merged[-1][1]:

            merged[-1][1] = max(merged[-1][1], arr[1])
        else:
            merged += arr,

    return merged


solution([[1, 4], [4, 5]])


# # 과제3.

# ----
# 문자열 s1, s2, s3가 주어졌을 때, 문자열 s3가 문자열 s1과 s2를 교차로 배치하여 만들어질 수 있는지 여부를 출력하라.
# 예시 입력1

# ```
# 입력: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
# 출력: True
# ```
# 예시 입력2

# ```
# 입력: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
# 출력: False


# 과제 3번 코드란


def solution(s1, s2, s3):
    if len(s3) != (len(s1)+len(s2)):
        return False
    if len(s1) == 0:
        if s3 == s2:
            return True
        else:
            return False
    elif len(s2) == 0:
        if s3 == s1:
            return True
        else:
            return False
    str1 = s1[0]
    str2 = s2[0]
    str3 = s3[0]
    if str3 == str1 and str3 == str2:
        return solution(s1[1:], s2, s3[1:]) or solution(s1, s2[1:], s3[1:])
    elif str3 == str1:
        return solution(s1[1:], s2, s3[1:])
    elif str3 == str2:
        return solution(s1, s2[1:], s3[1:])
    else:
        return False


s1 = "aabcc"
s2 = "dbbca"
s3 = "aadbbbaccc"
solution(s1, s2, s3)


# 과제4.

# ----
# 2개의 단어 beginWord와 endWord, 그리고 여러개의 단어 wordList가 주어졌을 때, beginWord에서 endWord로 변환하기 위해 필요한 가장 적은 변환 횟수를 구하시오.

# - 변환 조건
# - 단어는 wordList에 있는 단어로만 변환할 수 있다.
# - 단어를 변환할 때에는 한번에 하나씩의 문자만 바꿀 수 있다.

# - 문제 조건
# - endWord로의 변환이 불가한 경우에는 0을 출력하시오.
# - 문제에 등장하는 모든 단어의 길이는 같으며, 알파벳 소문자로만 이루어져 있다.
# - wordList에는 겹치는 단어가 없다.
# - beginWord와 endWord는 같은 단어로 주어지지 않는다.

# 예시 입력1

# ```
# 입력:
# beginWord = "hit",
# endWord = "cog",
# wordList = ["hot", "dot", "dog", "lot", "log", "cog"]

# 출력: 5

# 설명: 가장 짧은 변환 방법은 "hit" -> "hot" -> "dot" -> "dog" -> "cog"이다.
# ```

# 예시 입력2

# ```
# 입력:
# beginWord = "hit"
# endWord = "cog"
# wordList = ["hot", "dot", "dog", "lot", "log"]

# 출력: 0

# 설명: endWord인 "cog"가 wordList에 없으므로, endWord로 변환할 수 있는 방법이 없다.
# ```

# ```python


# def solution(beginWord, endWord, wordList):
#     return 0


# ```

# ----

# 과제 4번 코드란


def check_words(str1, str2):
    cnt = len(str1)
    for i in range(len(str1)):
        if str1[i] != str2[i]:
            cnt -= 1
        if cnt < len(str1)-1 or str1 == str2:
            return False
    else:
        return True


def solution(begin, target, words):
    if target not in words:
        return 0
    queue = deque()
    queue.append((begin, 0))

    while queue:
        word, convert_cnt = queue.popleft()
        if word == target:
            return convert_cnt
        for c_word in words:
            if check_words(word, c_word):
                queue.append((c_word, convert_cnt+1))
    return 0


beginWord = "hit"
endWord = "cog"
wordList = ["hot", "dot", "dog", "lot", "log"]

solution(beginWord, endWord, wordList)
