N = int(input())
cache = [0, 1, 2]
for _ in range(3, N+1):
    cache.append((cache[-1]+cache[-2]) % 15746)
print(cache[N])
