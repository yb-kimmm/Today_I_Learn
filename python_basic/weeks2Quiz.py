import csv
import pandas as pd
import datetime as date


# class Foo:
#     def __init__(self, name):
#         self.name = name

#     def speak(self):
#         print('I am ' + self.name)


# class Bar(Foo):
#     def __init__(self, name):
#         super().__init__(name)

#     def speak(self):
#         print('You are ' + self.name)


# bar = Bar('John')
# bar.speak()


# now = date.datetime.now()
# print(now)


# def int_sum(*args):
#     try:
#         for n in args:
#             sum += n
#     except:
#         print('error')
#     return sum


# int_sum(1, 2, 3, 4, 5)


# 과제1번 코드란

# with open('./a.csv', 'r') as f:
#     reader = csv.reader(f)
#     sum = 0
#     for c in reader:
#         for d in c:
#             d = int(d)
#             sum += d

#     print(sum)

# 과제2.

#  아래 기반 코드를 완성하여, 입력받은 값 중 중앙값을 출력하는 클래스를 완성하시오.
#  입력받은 값이 짝수개이면, 중앙값 2개의 평균을 출력하시오. (단, clear 메소드는 입력받은 내역을 모두 삭제)

# import numpy


# class Median:

#     def __init__(self):
#         self.a = list()

#     def get_item(self, item):
#         self.a.append(item)

#     def clear(self):
#         self.a = list()

#     def show_result(self):
#         print(numpy.median(self.a))


# median = Median()
# for x in range(10):
#     median.get_item(x)
# median.show_result()

# median.clear()
# for x in [0.5, 6.2, -0.4, 9.6, 0.4]:
#     median.get_item(x)
# median.show_result()


# 과제3.

# ----

# 아래 기반 코드를 완성하여, 주어진 출력을 하는 클래스를 구현하시오. 단, Animal 클래스는 수정하지 않고 구현하시오. 최소한의 메소드만을 추가하여 구현하시오. 하나의 메소드는 하나의 line만을 출력하시오.

# ```python


# class Animal:
#     def __init__(self, name):
#         self.name = name

#     def speak(self):
#         print(self.name + ' cannot speak.')

#     def move(self):
#         print(self.name + ' cannot move.')


# class Dog(Animal):

#     def move(self):
#         print(self.name + " moves like a jagger.")


# class Retriever(Dog):

#     def speak(self):
#         print(self.name + ' is smart enough to speak.')


# dog = Dog('Nancy')
# dog.speak()
# dog.move()

# super_dog = Retriever('Michael')
# super_dog.speak()
# super_dog.move()

# ```

# ```
# ---------- 출력 -----------------
# Nancy cannot speak.
# Nancy moves like a jagger.
# Michael is smart enough to speak.
# Michael moves like a jagger.
# ---------------------------------
# ```

# ----


# 과제4.

# ----

# 아래 기반 코드를 완성하여, 주어진 출력을 하는 클래스를 구현하시오. 단, 하나의 메소드에서는 단 하나의 line만을 출력하시오. PEP를 준수하여 코드를 작성하시오.

# ```python
class Foo:
    bar = 'A'

    def __init__(self):
        self.bar = 'B'

    class Bar:
        bar = 'C'

        def __init__(self):
            self.bar = 'D'


print(Foo.bar)       # A 출력
print(Foo().bar)     # B 출력
print(Foo.Bar.bar)   # C 출력
print(Foo.Bar().bar)  # D 출력
