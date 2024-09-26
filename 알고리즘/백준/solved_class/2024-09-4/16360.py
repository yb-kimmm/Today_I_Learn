import sys
# input = sys.stdin.readline;


convert = {}
convert['a'] = 'as';
convert['i'] = 'ios'
convert['y'] = 'ios'
convert['l'] = 'les'
convert['n'] = 'anes'
convert['ne'] = 'anes'
convert['o'] = 'os'
convert['r'] = 'res'
convert['t'] = 'tas'
convert['u'] = 'us'
convert['v'] = 'ves'
convert['w'] = 'was'

n = int(input());

for i in range(n):
    words = str(input());

    if words[-2] + words[-1] in convert :
        print(words[0:-2] + convert[words[-2] + words[-1]])
    elif words[-1] in convert :
        print(words[0:-1] + convert[words[-1]])
    else : 
        print(words + 'us')