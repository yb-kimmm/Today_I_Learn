

def fn_sum( i , j ) : 
    return int(i) + int(j)

def isBreakCheck(i , j) : 
    return int(i) == 0 & int(j) == 0

while(True): 
    i ,  j  = input().split();

    if isBreakCheck(i , j) == True:
        break;
    
    print(fn_sum(i , j))


        

