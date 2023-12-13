

while True :
    x, y , z = map(int, input().split(' '))
    
    if x == 0 and y ==0 and z == 0 :
        break;
    
    n = min(x , y , z)
    m = max(x , y , z)
    
    second = 0;
    
    if n < x  < m : 
        second = x;
    elif n < y  < m : 
        second = y;
    elif n < z  < m : 
        second = z
    else : 
        second = x;

    if n**2 + second ** 2 == m ** 2 :
        print("right")
    else :
        print("wrong")
