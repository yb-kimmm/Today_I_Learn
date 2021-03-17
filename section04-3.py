# Section 04-3
# 파이썬 데이터 타입 (자료형)
# 리스트 , 튜플

# 리스트 ( 순서 O  , 중복 O ,수정 O , 삭제 O)
# 선언

a = []
b = list()
c = [1, 2, 3, 4, 5, 6]
d = [10, 100, 'Pen', 'Banana', 'Orange']
e = [10, 100, ['Pen', 'Banana', 'Orange']]

b.append(1)
print(d)
print(e)

# 인덱싱
print(d[3])
print(d[-2])
print(d[0] + d[1])
print(e[0], e[2][1])

# 슬라이싱
print(d[0:3])
print(e[2][1:3])

# 연산
print(c + d)
print(c * 3)
print(str(c[0])+'hi')

# 리스트 수정, 삭제
c[0] = 77
print(c)

c[1:2] = [100, 1000, 1000]
print(c)

c[1] = ['a', 'b', 'c']
print(c)

del c[1]
print(c)

del c[-1]
print(c)


print()
print()
print()

y = [5, 2, 3, 4, 5]
print(y)
y.append(6)
print(6)
y.sort()
print(y)
y.reverse()
print(y)

y.insert(2, 7)
print(y)

y.remove(2)
print(y)

y.pop()
print(y)

ex = [88, 77]
y.extend(ex)
print(y)


# 삭제 : del , remove , pop

