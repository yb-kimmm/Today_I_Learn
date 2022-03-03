# Section04-2
# 문자열 , 문자열연산 , 슬라이싱

str1 = "I'am boy"
str2 = 'NiceMan'
str3 = ' '
str4 = str()

print(len(str1), len(str1), len(str3), len(str4))

escafe_str1 = "Do you have a \"big collection\""

print(escafe_str1)

escafe_str2 = "Do you know \t\t escafe"

print(escafe_str2)

# Raw string
raw_s1 = r"/Users/yb/dev/study"
print(raw_s1)

# 멀티라인
multi = \
    """ 
문자열 
멀티라인 
테스트 
"""

print(multi)

# 문자열 연산
str_o1 = '*'
str_o2 = 'abc'
str_o3 = 'def'
str_o4 = 'Niceman'

print(str_o1 * 100)
print(str_o2 + str_o3)
print(str_o1 * 3)

# print('a' in str_o4)

a = 'niceman'
b = 'orange'

# print(a.islower())
# print(b.endswith('e'))
# print(a.capitalize())
# print(a.replace('nice', 'good'))
# print(list(reversed(b)))

# slice
print(a[0:3])
print(a[0:4])

print(a[0:len(a)])

print(b[0:4:2])
print(b[1:-2])
