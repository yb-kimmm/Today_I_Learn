
n = int(input())
distance = list(map(int,input().split()))
price = list(map(int,input().split()))


minNum = price[0];

answer = 0
for i in range(n-1):
    if minNum >= price[i]:
        minNum = price[i]

    answer += minNum * distance[i]

print(answer)

