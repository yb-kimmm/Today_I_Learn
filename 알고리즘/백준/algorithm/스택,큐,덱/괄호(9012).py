# 괄호 9012
import sys;
input = sys.stdin.readline

T = int(input())


for i in range(T) : 
    
    str = input().rstrip()
    stack = list();

    for j in str :
        if j == ")" : 
            if len(stack) > 0 and stack[-1] == "(": 
                prev = stack.pop();
            else : 
                stack.append(j)
        else : 
            stack.append(j);

    if len(stack) == 0  :
        print("YES")
    else : 
        print("NO")
    


