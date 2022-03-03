# Collision

hash_table = list([0 for i in range(8)])


def get_key(data):
    return hash(data)


def hash_function(key):
    return key % 8


def save_data(data, value):
    index_key = get_key(data)
    hash_address = hash_function(index_key)
    if hash_table[hash_address] != 0:
        for index in range(len(hash_table[hash_address])):
            if hash_table[hash_address][index][0] == index_key:
                hash_table[hash_address][index][1] = value
                return
        hash_table[hash_address].append([index_key, value])
    else:
        hash_table[hash_address] = list([index_key, value])

    hash_table[hash_address] = value


def read_data(data):
    index_key = get_key(data)

    hash_address = hash_function(get_key(data))
    if hash_table[hash_address] != 0:
        for index in range(len(hash_table[hash_address])):
            if hash_table[hash_address][index][0] == index_key:
                return hash_table[hash_address][index][1]
        return None
    else:
        return None

    return hash_table[hash_address]


save_data('Dd', '123123123123123')
save_data('David', '123123123123123')

print(read_data('Dd'))

# ------------------------------------------------------------------------
# Linear Proving 기법

# hash_table = list([0 for i in range(8)])


# def get_key(data):
#     return hash(data)


# def hash_function(key):
#     return key % 8


# def save_data(data, value):
#     index_key = get_key(data)
#     hash_address = hash_function(index_key)
#     if hash_table[hash_address] != 0:

#         for index in range(hash_address, len(hash_table)):
#             if hash_table[index] == 0:
#                 hash_table[index] = [index_key, value]
#                 return
#             elif hash_table[index][0] == index_key:
#                 hash_table[index][1] == value
#                 return
#     else:
#         hash_table[hash_address] = [index_key, value]

#        for index in range(len(hash_table[hash_address])):
#             if hash_table[hash_address][index][0] == index_key:
#                 hash_table[hash_address][index][1] = value
#                 return
#         hash_table[hash_address].append([index_key, value])
#     else:
#         hash_table[hash_address] = [[index_key, value]]


# def read_data(data):
#     index_key = get_key(data)

#     hash_address = hash_function(get_key(data))
#     if hash_table[hash_address] != 0:
#         for index in range(hash_address , len(hash_table)):
#             if hash_table[index] == 0:
#                 return None
            
#             elif hash_table[index][0] == index_key:
#                 return hash_table[index][1]

#     else :
#         return None
#     return hash_table[hash_address]


# save_data('Dd', '123123123123123')
# save_data('David', '123123123123123')

# print(read_data('Dd'))
