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

# ----

# 아래 기반 코드를 완성하여, 입력받은 값 중 중앙값을 출력하는 클래스를 완성하시오. 입력받은 값이 짝수개이면, 중앙값 2개의 평균을 출력하시오. (단, clear 메소드는 입력받은 내역을 모두 삭제)

# ```python


class Median:
    def __init__(self):
        pass

    def get_item(self, item):
        pass

    def clear(self):
        pass

    def show_result(self):
        pass


median = Median()
for x in range(10):
    median.get_item(x)
median.show_result()

median.clear()
for x in [0.5, 6.2, -0.4, 9.6, 0.4]:
    median.get_item(x)
median.show_result()
```

```
--------- 출력 - ------------------
4.5
0.5
------------------------------------

```

----
