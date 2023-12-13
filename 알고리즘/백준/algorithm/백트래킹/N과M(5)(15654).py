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

    for i in lst:
        if i not in arr : 
            arr.append(i);
            dfs();
            arr.pop();


dfs();



    
