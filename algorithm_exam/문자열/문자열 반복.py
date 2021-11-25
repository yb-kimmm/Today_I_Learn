N = int(input())

for i in range(N):
    w, h = input().split(" ")

    h = list(h)

    for l in range(len(h)):
        for j in range(int(w)):
            print(h[l], end="")

    print()
