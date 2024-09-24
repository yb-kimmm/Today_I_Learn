n = int(input())
k = str(input())

offset = 0;
result = 0;
error = True
# while offset <= n : 
# 48 - 57

lst = [];

while offset < n :
    nOrd = ord( k[offset] )
    if 48 <= nOrd and nOrd <= 57 :
        tmp = 0;
        if error == False :
            tmp = (lst.pop() * 10) + int(k[offset]);
        else : 
            tmp = int(k[offset]);
        lst.append(tmp)
        error = False;
    else : 
        error = True;        
    offset += 1

print(sum(lst))