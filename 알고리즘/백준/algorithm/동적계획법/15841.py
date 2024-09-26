import sys


lst = [];
n = 0;
while True : 
    n = int(input());
    
    if n == -1 : 
        break;
        
    lst.append(n)   

answer = []
answer.append(0)
answer.append(1)

for i in range(2 , (max(lst))+1):
    answer.append(answer[i-1] + answer[i-2])

for i in lst:
    print("Hour" , str(i)+":" , answer[i] , "cow(s) affected")
