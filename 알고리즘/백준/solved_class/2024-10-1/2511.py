import sys
input = sys.stdin.readline

lst1 = [* map(int , input().split())];
lst2 = [* map(int , input().split())]


A = 0
B = 0
draw = True ;
lastWinner = '';

for i in range(len(lst1)): 
    if lst1[i] > lst2[i] : 
        draw = False
        lastWinner = 'A'
        A+=3
    elif lst1[i] < lst2[i] :
        draw = False
        lastWinner = 'B'
        B+=3
    else :
        A+=1
        B+=1

print(A , B)

if A == B and not draw : 
    print(lastWinner)
elif A == B and draw : 
    print("D")
elif A > B:
    print("A")
else:
    print("B")