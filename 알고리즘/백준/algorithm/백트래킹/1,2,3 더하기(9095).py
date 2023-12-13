import sys

T = int(input())
def dfs(n):
    
    global answer
    if sum(arr) == n : 
        answer += 1;
        return answer;

    for i in lst : 
        if not sum(arr) > n : 
            arr.append(i);
            dfs(n);
            arr.pop();


lst = [1 , 2 , 3]
arr = [];
answer = 0;

for i in range(T):
    n = int(input());
    dfs(n);
    print(answer)
    answer = 0;
