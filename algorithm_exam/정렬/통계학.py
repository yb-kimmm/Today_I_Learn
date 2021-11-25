import sys


def getAvg(lst):
    result = 0
    for i in range(len(lst)):
        result += lst[i]

    return round(result / len(lst))


def getMedianValue(lst):
    return lst[int((len(lst) / 2))]


def getScope(lst):
    return max(lst) - min(lst)


def getMode(lst):
    return result


N = int(input())
l = list()


for i in range(N):
    l.append(int(sys.stdin.readline()))

l.sort()

print(getAvg(l))
print(getMedianValue(l))
print(getMode(l))
print(getScope(l))
