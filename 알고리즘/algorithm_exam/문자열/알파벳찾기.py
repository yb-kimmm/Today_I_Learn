N = list(str(input()))

for j in range(97, 123):
    check = False

    for i in range(len(N)):
        if(j == ord(N[i])):
            print(i, end=' ')
            check = True
            break

    if(not check):
        print(-1, end=' ')
