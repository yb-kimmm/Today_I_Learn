class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


class LinkedList:
    def __init__(self, data):
        self.head = Node(data)

    def add(self, data):
        node = self.head

        while node.next:
            node = node.next
        node.next = Node(data)

    def desc(self):
        node = self.head
        while node:
            print(node.data)
            node = node.next

    def delete(self, data):
        node = self.head
        while node.next:
            if node.next.data == data:
                temp = node.next
                node.next = node.next.next
                del(temp)
                return
            else:
                node = node.next


linkedList = LinkedList(3)
linkedList.add(4)

linkedList.desc()

linkedList.delete(4)
