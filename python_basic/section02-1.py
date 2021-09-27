# Section02-1
# 파이썬 기초 코딩
# Pring 구문의 이해

# 기본 출략
print('Hello Python!')
print("Hello Python!")
print("""Hello Python!""")
print('''Hello Python!''')

print()


# Separator 옵션 사용

print('T', 'E', 'S', 'T', sep='')
print('2019', '02', '19', sep='-')
print('abso8787', 'naver.com', sep='@')

# end 옵션 사용
print('Welcome To', end='')
print('the black paradise', end='')

print()

# format 옵션 사용
print('{} and {}'.format(1, 2))
print("{0} and {1} and {0}".format(1, 2))
print("{a} and {b} ".format(a=1, b=2))

print("%s 's favorite number is %d" % ('1', 3))  # %s 문자 %d 정수 %f 실수

print("Test1 : %5d , Price : %4.2f" % (123123, 5.55123123))

print('\'you\'')
print('\"you\"')
print('you \nyou \nyou')
print('you \t you \t you')
