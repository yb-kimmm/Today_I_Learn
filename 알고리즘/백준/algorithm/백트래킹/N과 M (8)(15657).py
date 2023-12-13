import sys;

input = sys.stdin.readline;

n , m = map(int,input().split())

lst = list(map(int,input().split()))

arr = [];


lst.sort();

def dfs() : 
    if len(arr) == m:
        print(" ".join(map(str , arr)))
        return;

    for v in lst:
        if len(arr) != 0 and  max(arr) > v :
            continue;
        
        arr.append(v);
        dfs();
        arr.pop();

dfs();
