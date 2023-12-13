import sys
input = sys.stdin.readline;

n = int(input());

n_lst = [* input().rstrip().split(' ')];

m = int(input());

m_lst = [* input().rstrip().split(' ')];

iDict = {};

for i in range(0 , len(n_lst)):
    iDict[str(n_lst[i])] = 1;

for i in range(0 , len(m_lst) ):
    if iDict.get( str(m_lst[i]) ) == 1 :
        print(1 , end= ' ')
    else : 
        print(0 , end= ' ') ;
