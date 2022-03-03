# 재귀용법 연습

# 1. 팩토리얼
def fectorial(num):
    if num > 1:
        return num * fectorial(num-1)
    else:
        return num


for num in range(10):
    print(fectorial(num))


# 2. 1부터 data 까지의 곱을 구하세요,
def multiple(data):
    if data <= 1:
        return data
    return data * multiple(data-1)


print(multiple(10))


# 3. 숫자가 들어있는 리스트가 주어졌을 때 , 리스트의 합을 리턴하는 함수를 구하세요

def sum_list(data):
    if len(data) <= 1:
        return data[0]

    # list slicing 기능을 이용하여 리스트[0]을 뺀 리스트[1]~[len] 만큼 계속 넘김
    return data[0] + sum_list(data[1:])


data = random.sample(range(100), 10)

print(sum_list(data))


# 4. 회문은 순서를 거꾸로 읽어도 제대로 읽은 것과 같은 단어와 문장을 의미한다.
#    회문을 판별할 수 있는 함수를 리스트 슬라이싱을 활용해서 만드세요.

def palindrome(string):
    if len(string) <= 1:
        return True

    if string[0] == string[-1]:
        return palindrome(string[1:-1])
    else:
        return False


print(palindrome('string'))


# 5. 1)정수 n 에 대해
#    n이 짝수이면 3 X n+1 을 하고 , n이짝수이면 n을 2로 나눕니다.
#    이렇게 계속 진행해서 n이 1이 될때까지 반복

def func(n):
    print(n)
    if n == 1:
        return

    if n % 2 == 1:
        return func(3 * n + 1)
    else:
        return func(int(n / 2))


# func(10)

# 6. 문제 : 정수 4를 1 , 2 , 3 의조합으로 나타내는 방법은 다음과 같이 총 7가지가 있다.
# 1 + 1 + 1 + 1
# 1 + 1 + 2
# 1 + 2 + 1
# 2 + 1 + 1
# 2 + 2
# 1 + 3
# 3 + 1
# 정수 n이 입력으로 주어졌을 떄 , n을 1 ,2 3 의 합으로 나타낼수 있는 방법

def func(data):
    if data == 1:
        return 1

    elif data == 2:
        return 2

    elif data == 3:
        return 4

    else:
        return func(data - 1) + func(data - 2) + func(data-3)
