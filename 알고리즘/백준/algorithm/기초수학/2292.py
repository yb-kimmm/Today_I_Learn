N = int(input());

room = 1;
count = 6;
i = 1;

if N == 1 : 
    print(1);
else : 
    while(True) :
        room += count * i;
        i+=1;
        
        if room >= N :
            print(i);
            break;
    
