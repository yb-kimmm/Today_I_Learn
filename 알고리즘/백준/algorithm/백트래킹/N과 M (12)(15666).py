import sys;

input = sys.stdin.readline;

n , m = map(int,input().split())


lst = list(set(map(int,input().split())))

lst.sort();

arr1 = [];

def dfs() : 
    if len(arr1) == m:
        print(" ".join(map(str , arr1)))
        return;      

    for v in lst:
        if arr1 and max(arr1) > v :
            continue;
        
        arr1.append(v);
        dfs();
        arr1.pop();

dfs();
