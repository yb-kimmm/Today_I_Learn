
inputN= list(map(int, input().split(' ')))

data = 154;
result = 0; 
cal  = 10 ;

remain = 0;
remain = int(data / 100);
print(remain)
remain = int(data / 10);
print(remain)
remain = int(data % 10);
print(remain)
# remain += data / 100;

# while(inputN[0] != result):
#   remain = 0;
#   data += 1;  
  
#   remain += data % 10;
#   remain += data % 100;

#   result = data + remain;
  
#   print(result, data , sep='_')








