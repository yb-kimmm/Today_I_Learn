import sys;

input = sys.stdin.readline;

n = int(input())

lst = list(map(int,input().split()))

arr = [];

visited = [False] * n

answer = 0;
def dfs() : 
    global answer;
    if len(arr) == n:
        sumArr = 0;
        for i in range(1 , n) : 
            sumArr += abs(arr[i-1] - arr[i]) 
        answer = max(answer  , sumArr)
        return;

    for k , v in enumerate(lst):
        if visited[k] == False : 
            visited[k] = True;
            arr.append(v);
            dfs();
            visited[k] = False;
            arr.pop();

dfs();

print(answer);
