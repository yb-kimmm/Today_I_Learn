import sys;

# input = sys.stdin.readline;

n = int(input())
l = int(input())


numbers =[];
for i in range(n):
  numbers.append(input())

arr = [];
visited = [False] * n
answer = [];

def dfs() : 
  if len(arr) == l:
    tmp = ''.join(arr)
    if tmp not in answer: 
      answer.append(tmp)

  for k , v in enumerate(numbers):
    if visited[k] == False:
      visited[k] = True
      arr.append(str(v))
      dfs()
      arr.pop()
      visited[k] = False

dfs();

print(len(answer));
