x = int(input())

n = 0
t = 665


while(1):

    t = str(t)

    if "666" in t:
        n += 1

        if(x == n):
            break

    t = int(t) + 1


print(t)
