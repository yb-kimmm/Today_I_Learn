# scale = [1, 2, 3, 4, 5, 6, 7, 8]
scale = list(map(int, input().split(' ')))


def decodeScale(scale):

    rTm = "mixed"

    for i in range(0, len(scale) - 1):
        if (scale[i] + 1) == scale[i+1]:
            rTm = "ascending"
        elif (scale[i] - 1) == scale[i+1]:
            rTm = "descending"
        else:
            return "mixed"

    return rTm


print(decodeScale(scale))
