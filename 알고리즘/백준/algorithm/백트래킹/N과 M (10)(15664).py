n = int(input())


tmp = [];

tmp.append(1);
tmp.append(1);
tmp.append(2);

for i in range(3 , n+1):
    tmp.append(tmp[i-1] + tmp[i-2]);

print(tmp[-1] *2  +  tmp[-2]* 2 )



