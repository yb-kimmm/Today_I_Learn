N = list(str(input()).lower())

d = {}


for i in range(len(N)):
    if(N[i] in list(d.keys())):
        d[N[i]] = int(d.get(N[i])) + 1
    else:
        d[N[i]] = 1

m = max(list(d.values()))

cnt = 0
result = ""

for i in d:
    if(d[i] == m):
        cnt += 1
        result = str(i).upper()

if(cnt > 1):
    print("?")
else:
    print(result)
