arr = ['c=','c-','dz=','d-','lj','nj','s=','z='];

str = input();

for i in range(0 , len(arr)):
    str = str.replace(arr[i] , '*');

print(len(str))
