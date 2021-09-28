# A	(55, 185)	2
# B	(58, 183)	2
# C	(88, 186)	1
# D	(60, 175)	2
# E	(46, 155)	5
length = input()
data = list()


for i in range(0, int(length)):
    data.append(list(map(int, input().split(' '))))

for i in range(0, len(data)):
    result = len(data)
    for j in range(0,   len(data)):
        if(data[i] > data[j]):
            result -= 1

    print(result)
