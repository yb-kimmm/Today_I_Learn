arr = []

value = set()

for i in range(10):
    h = int(input())
    value.add(h % 42)

print(len(value))
