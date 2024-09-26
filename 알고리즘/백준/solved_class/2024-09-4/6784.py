import sys
# input = sys.stdin.readline;

n = int(input())


teacher = []
student = []

for i in range(n):
    teacher.append(input());

for i in range(n):
    student.append(input());

answer = 0;

for i in range(n):
    if str(teacher[i]) == str(student[i]) :
        answer += 1;

print(answer);