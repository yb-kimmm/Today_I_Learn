

A , B , C = map(int , input().split(' '));

if( B > C or B == C) : 
    print(-1);
else :
    temp = C - B;
    temp = (int)(A / temp);
    print(temp + 1);
    
