n = int(input())

coin_2 = 0;
coin_5 = 0;

while True :
    if n % 5 == 0 :
        coin_5 = n // 5
        print(coin_2 + coin_5)
        break;

    n -= 2;
    coin_2 += 1
    
    if n < 0 :
        print(-1)
        break;