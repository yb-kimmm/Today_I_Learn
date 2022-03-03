# 데이터 타입

import math
v_str1 = "Niceman"
v_bool = True
v_str2 = "GoodBoy"
v_float = 10.35
v_int = 7

v_dict = {
    "name": "Kim",
    "age": 25
}

v_list = [3, 5, 7]
v_tuple = 3, 5, 1, 2, 3
v_set = {1, 2, 3, 4, 6}

print(type(v_set))
print(type(v_float))
print(type(v_tuple))

i1 = 39
i2 = 939
big_int1 = 999999999999999999999999999999999999999999999999999
big_int2 = 111111111111111111111111111111111111111111111111111

f1 = 1.1234
f2 = 3.784
f3 = .5
f4 = 10.

print(i1 * i2)
print(big_int1 * big_int2)
print(f1 ** f2)

result = f3 + i2
print(result)


a = 5.
b = 4
c = 10

print(type(a), type(b))
result2 = a+b
print(result2)

# 형변환
# int  float , complex(복소수)

print(int(result2))
print(float(c))
print(complex(c))
print(int(True))
print(int(False))
print(int('3'))

print(abs(-7))
n, m = divmod(100, 8)
print(n, m)


print(math.ceil(5.1))  # 5.1 보다 가장 큰 정수를 반환
print(math.floor(3.784))  # 3.784보다 가장 작은 정수를 반환
