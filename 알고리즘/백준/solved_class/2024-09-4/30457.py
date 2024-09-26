import sys
# input = sys.stdin.readline;

n = int(input())


lst = [*map(int ,input().split())];
setL = set(lst);

lst.sort();

result = 0;
for i in setL :  
    if lst.count(i) == 1 :
        result += 1;
    elif lst.count(i) >= 2 :
        result += 2;

print(result);


