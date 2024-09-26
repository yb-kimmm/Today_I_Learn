import sys

n = int(input())

answer = []
answer.append(0)
answer.append(1)

for i in range(2 , n+1):
    answer.append(answer[i-1] + answer[i-2])

print(answer[-1])