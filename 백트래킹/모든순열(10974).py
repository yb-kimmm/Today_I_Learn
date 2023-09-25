import sys
input = sys.stdin.readline

n = int(input())

visited = [False] * n

arr = [];

def solution():

    if len(arr) == n : 
        print(" ".join(map(str , arr)) )

    for i in range(n):
        if visited[i] == False:
            visited[i] = True;
            arr.append( i+1 );
            solution()
            visited[i] = False;
            arr.pop();


solution();
