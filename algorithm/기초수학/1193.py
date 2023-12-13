
num = 1;
result = num;
N = int(input());

while result < N :
    num += 1;
    result += num;
  

gap = result - N 
if num % 2 == 0:  # 사선 라인이 짝수번째 일 때
    top = num - gap  #분자
    under = gap + 1  #분모
else :  # 사선 라인이 홀수번째 일 때
    top = gap + 1  #분자
    under = num - gap  #분모 
    
print(f'{top}/{under}')
