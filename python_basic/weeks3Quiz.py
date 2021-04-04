# 과제1.


# ------------------------------------------------------------------------------------------------
# 아래 주어진 기반 코드를 완성하여 Linked Queue를 구현하시오. Linked Queue에 대한 설명을 참조하시오.

# - Linked Queue의 특징
#   - Linked Queue는 Doubly Linked List를 기반으로 만들어진 Queue이다.
#   - Linked Queue의 모든 동작은 O(1)의 시간복잡도로 동작한다.
#   - Linked Queue에 정의된 동작은 아래와 같다.
#     1. `is_empty()`: Queue가 비어있으면 True, 비어있지 않으면 False를 출력한다.
#     1. `put()`: Queue의 rear에 새로운 데이터를 입력한다.
#     1. `get()`: Queue의 front에서 데이터를 출력한다. 출력한 데이터는 Queue에서 삭제한다. 더이상 출력할 데이터가 없는 경우 None을 출력한다.
#     1. `peek()`: Queue의 front에서 데이터를 출력한다. 출력한 데이터는 Queue에 그대로 유지한다.  더이상 출력할 데이터가 없는 경우 None을 출력한다.


# # ```python
# class Node:
#     def __init__(self, data, prev=None, next=None):
#         self.data = data
#         self.prev = prev
#         self.next = next


# class LinkedQueue:
#     def __init__(self):
#         self.front = None
#         self.rear = None

#     def is_empty(self):
#         return self.front is None

#     def put(self, data):
#         rear = self.rear
#         self.rear = Node(data)
#         if self.is_empty():
#             self.front = self.rear
#         else:
#             rear.next = self.rear

#     def get(self):
#         if self.front == None:
#             return None
#         data = self.front.data
#         self.front = self.front.next
#         if self.is_empty():
#             self.rear = None
#         return data

#     def peek(self):

#         d = self.front
#         while d is not None:
#             print(d.data)
#             d = d.next


# queue = LinkedQueue()

# print(queue.is_empty())
# for i in range(10):
#     queue.put(i)
# print(queue.is_empty())

# for _ in range(11):
#     print(queue.get(), end=' ')
# print()

# for i in range(20):
#     queue.put(i)
# print(queue.is_empty())

# for _ in range(5):
#     print(queue.peek(), end=' ')
# print()

# for _ in range(21):
#     print(queue.get(), end=' ')
# print()
# print(queue.is_empty())


# ```

# ------------------------------------------------------------------------------------------------

# 과제2.

# ----
# 아래는 Python의 list를 이용하여 Stack을 구현한 것이다. Stack의 특성을 이용하면 후위 표기법으로 작성된 수식을 계산할 수 있다. 후위 표기법은 연산자를 나중에 표기하는 표기법으로, 아래와 같이 계산한다. 후위 표기법에서 사칙연산의 우선순위는 없다고 가정한다.

# ```
# 10 5 + 2 * 3 /
# = 15 2 * 3 /
# = 30 3 /
# = 10
# ```

# 연산자와 피연산자가 공백으로 구분된다고 할 때, 내부적으로 stack을 유일한 자료구조로 사용하여 후위 표기법으로 표기된 수식을 계산하는 메소드 `calculate()`을 완성하시오.

# ```python


# class Stack:
#     def __init__(self):
#         self.list = list()

#     def push(self, data):
#         self.list.append(data)

#     def pop(self):
#         return self.list.pop()


# class Calculator:
#     def __init__(self):
#         self.stack = Stack()

#     def calculate(self, string):
#         tList = string.split(' ')
#         for i in tList:
#             if i.isdigit():
#                 self.stack.push(i)
#             else:
#                 tmp1 = int(self.stack.pop())
#                 tmp2 = int(self.stack.pop())

#                 if i == '*':
#                     self.stack.push(tmp2 * tmp1)
#                 elif i == '/':
#                     self.stack.push(tmp2 / tmp1)
#                 elif i == '-':
#                     self.stack.push(tmp2 - tmp1)
#                 elif i == '+':
#                     self.stack.push(tmp2 + tmp1)

#                     # Test code

#         return self.stack.pop()


# calc = Calculator()
# print(calc.calculate('4 6 * 2 / 2 +'))
# print(calc.calculate('2 5 + 3 * 6 - 5 *'))

# ```
# ----

# ------------------------------------------------------------------------------------------------
# ## 과제3.

# ----
# 다음은 Tree 자료구조를 순회하는 방법 중, Pre-order 순회 방법을 설명한 것이다. 자료구조의 순회란, 자료구조에 속한 모든 data를 한 번씩 접근하는 것이다. Pre-order 순회를 하면서 순회한 순서대로 Node의 data를 출력하는 `preorder()` 메소드를 완성하시오.

# - Tree 자료구조를 순회할 때에는 반드시 root node부터 순회를 시작한다.
# - Pre-order 순회를 할 때에는 아래와 같은 방법을 재귀적으로 수행한다.
#   - 새로운 node에 접근할 경우, 아래 순서대로 동작한다.
#     1. Node에 있는 data를 출력한다.
#     1. Node에 left child가 있으면, left child node에 접근한다.
#     1. Node에 right child가 있으면, right child node에 접근한다.
#   - root node에서 순회를 시작할 경우, 재귀적 동작으로 인해 모든 node의 data를 출력할 수 있다.

# ```python
# class Node:
#     def __init__(self, data, left=None, right=None):
#         self.data = data
#         self.left = left
#         self.right = right


# class Tree:
#     def __init__(self, root):
#         self.root = root

#     def preorder(self):
#         def _preorder(root):
#             if root is None:
#                 pass
#             else:
#                 print(root.data)
#                 _preorder(root.left)
#                 _preorder(root.right)
#         _preorder(self.root)
#         #     break


# # Test code
# root = Node(5, Node(2, Node(7, Node(4), Node(1)),
#                     Node(3)), Node(9, Node(6), Node(10)))
# tree = Tree(root)
# tree.preorder()
# ```

# ----

# ------------------------------------------------------------------------------------------------
# ## 과제4.

# ----
# HashTable 클래스는 문자열을 key로 입력받는 해쉬 테이블 자료구조를 구현한 것이다. HashTable 클래스는 단순한 해쉬 함수로 인해, 해쉬 충돌이 빈번히 발생한다. 이 단점을 개선하기 위해,
# Chaining 기법으로 ChainedHashTable을 구현하고자 한다.

# HashTable을 상속하여 해쉬 충돌이 발생해도 정상적으로 동작하는 ChainedHashTable을 완성하시오.

# ```python
def hash_func(key):
    return ord(key[0]) % 10


class HashTable:
    def __init__(self):
        self.table = [None]*10

    def set(self, key, value):
        self.table[hash_func(key)] = value

    def get(self, key):
        return self.table[hash_func(key)]


class Node:
    def __init__(self, key, data):
        self.key = key
        self.data = data
        self.next = None


class ChainedHashTable(HashTable):
    pass
    # # Test code


ht = ChainedHashTable()
ht.set('hello', 1)
ht.set('hello2', 2)
ht.set('hello3', 3)
ht.set('hello4', 4)

print(ht.get('hello'), end=' ')
print(ht.get('hello2'), end=' ')
print(ht.get('hello3'), end=' ')
print(ht.get('hello4'), end=' ')
print()

ht.set('hello2', 5)

print(ht.get('hello'), end=' ')
print(ht.get('hello2'), end=' ')
print(ht.get('hello3'), end=' ')
print(ht.get('hello4'), end=' ')
# ```

# ----
