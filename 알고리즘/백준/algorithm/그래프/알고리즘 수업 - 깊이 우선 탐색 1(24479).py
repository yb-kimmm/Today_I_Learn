import sys
sys.setrecursionlimit(10**9)
input = sys.stdin.readline

N, M, R = map(int, input().split())
graph = [[] for _ in range(N+1)]
result = [0]*(N+1)
visited = [0]*(N+1)


for _ in range(M):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)


for i in range(1, len(graph)):
    graph[i].sort()

count = 1;
def dfs(start):
    global count;
    visited[start] = count;

    for i in graph[start]: 
        if visited[i] == 0:
            count += 1
            dfs(i)
    
    return

dfs(R)

for i in range(1 , N+1):
    print(visited[i])
