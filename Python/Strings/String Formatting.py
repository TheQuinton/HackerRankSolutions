def print_formatted(number):
    # More concern over spacing than getting the proper values...
    for i in range(1,n+1):
        # Decimal = i
        # Octal = oct(i)
        # Hexadecimal = hex(i).upper()
        # Binary = bin(i)
        
        # print(Decimal, Octal[2:], Hexadecimal[2:], Binary[2:])

        pad = n.bit_length()
        print(f'{i:{pad}d} {i:{pad}o} {i:{pad}X} {i:{pad}b}')

