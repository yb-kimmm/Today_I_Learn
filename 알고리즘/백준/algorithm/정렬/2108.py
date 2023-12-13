import sys
input = sys.stdin.readline
from collections import Counter

arr = [];

N = int(input())

sum = 0;

for _ in range(N):
    temp = int(input());
    arr.append(temp);
    sum+=temp;
        

arr.sort();        
print(round(sum/len(arr)));
print(arr[N//2]);
cnt_li = Counter(arr).most_common()
if len(cnt_li) > 1 and cnt_li[0][1]==cnt_li[1][1]: #최빈값 2개 이상
    print(cnt_li[1][0])
else:
    print(cnt_li[0][0])
    
print(max(arr)-min(arr));


