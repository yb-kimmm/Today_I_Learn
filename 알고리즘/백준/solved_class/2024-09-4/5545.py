import sys
input = sys.stdin.readline;

n = int(input())    # 토핑의 종류의 수
a , b = map(int,input().split()) # 도우의 가격 , 토핑의 가격
c = int(input()) # 도우의 열량

lst = []

for i in range(n) :
    lst.append(int(input()));

lst.sort();
lst.reverse();

cal = 0
count = 0

bestPrice = c // a;

totalCal = 0;
# while True :
price = 0;
answer = [];
for k , v in enumerate(lst) : 
    cal += v ;
    price = a + ((k+1) * b)
    
    totalCal = cal + c;

    if bestPrice < totalCal // price:
        bestPrice = totalCal // price;

print(int(bestPrice))


