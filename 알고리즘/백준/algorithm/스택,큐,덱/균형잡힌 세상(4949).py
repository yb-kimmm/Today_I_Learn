# 균형잡힌 세상
import sys;
input = sys.stdin.readline

while(True) : 
    str = input().rstrip()
    stack = list();

    if str == "." : 
        break;

    for j in str :
        if j == ")": 
            if len(stack) > 0 and stack[-1] == "(": 
                prev = stack.pop();
            else : 
                stack.append(j)
        elif j== "(" : 
            stack.append(j);
        
        if j == "]": 
            if len(stack) > 0 and stack[-1] == "[": 
                prev = stack.pop();
            else : 
                stack.append(j)
        elif j== "[" : 
            stack.append(j);

    if len(stack) == 0  :
        print("yes")
    else : 
        print("no")

    
