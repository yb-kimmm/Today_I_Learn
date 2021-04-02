def sum_all(n):
    total = 0
    i = 1

    while i <= n:
        total += i
        i += 1

    print("끝이요! %d" % total)


def sum_all_better(n):
    return int(n * (n+1)/2)


print(sum_all_better(100))
