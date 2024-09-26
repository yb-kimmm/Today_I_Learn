# add x: S에 x를 추가한다. (1 ≤ x ≤ 20) S에 x가 이미 있는 경우에는 연산을 무시한다.
# remove x: S에서 x를 제거한다. (1 ≤ x ≤ 20) S에 x가 없는 경우에는 연산을 무시한다.
# check x: S에 x가 있으면 1을, 없으면 0을 출력한다. (1 ≤ x ≤ 20)
# toggle x: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다. (1 ≤ x ≤ 20)
# all: S를 {1, 2, ..., 20} 으로 바꾼다.
# empty: S를 공집합으로 바꾼다.

import sys
input = sys.stdin.readline;

n  = int(input())

resultMap = {};

allMap = {}
for j in range(1,21):
    allMap[str(j)] = True;

for i in range(n):
    j = input().split()

    a , b = "" , 0

    if len(j) == 2 : 
        a = j[0]
        b = j[1]
    else : 
        a = j[0]

    if a == "add":
        resultMap[b] = True;
    elif a == "remove":
        if b in resultMap.keys() : 
            resultMap.pop(b)
    elif a == "check":
        if b in resultMap.keys() : 
            print(1);
        else : 
            print(0);
    elif a == "toggle":
        if b in resultMap.keys(): 
            resultMap.pop(b)
        else : 
            resultMap[b] = True;
    elif a == "all":
        resultMap.clear();
        resultMap = allMap.copy()
    elif a == "empty":
        resultMap.clear();
        # print("empty" , resultMap.keys()  )

