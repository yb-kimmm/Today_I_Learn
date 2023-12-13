
while True :
    x , y = map(int,(input().split(' ')))

    if x == 0 and y ==0 :
        break;

    if x < y :
        if y % x == 0 :
            print('factor')     
            continue;
    else : 
        if x % y == 0 :
            print('multiple')
            continue;
        
    print('neither')



