while True:
    try:
        n, k = map(int, input().split())
        result = n;

        while True:
            if (result // k) == 0:
                break;
            
            n += result // k;
            result = result // k + result%k

        print(n)
    except EOFError:
        break