while True:
    try:
        n, k = map(int, input().split())
        result = n;
        while n >= k :
            i = int(n / k);
            # while i >= k :
            #     print()
            result += i;
            n = i

        print(result)
    except EOFError:
        break