def fibonacci(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)


print(fibonacci(int(input())))


# n = int(input())

# a, b = 0, 1
# while(n):
#     a, b = b, a + b
#     n -= 1
# print(a)
