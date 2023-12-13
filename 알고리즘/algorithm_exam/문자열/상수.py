w, h = input().split(" ")
w = w[::-1]
h = h[::-1]

if(w > h):
    print(w)
else:
    print(h)
