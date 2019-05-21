# You are given a string 's'.
# It consists of alphanumeric characters, spaces and symbols(+,-).
# Your task is to find all the substrings of 's' that contains 2 or more vowels.
# Also, these substrings must lie in between 2 consonants and should contain vowels only.

import re
s = input()

# set variables for vowels and consonants
vowels = 'aeiou'
consonants = 'qwrtypsdfghjklzxcvbnm'

# Regex -> positive look behind (?<=[]) checks previous text not in set
# positive look ahead (?=[]) checks next text not in set
# ([]{2,}) gets 2 or more matches
# (?<=[consonant])([2 or more vowels])(?=[consonant])
regex = '(?<=['+consonants+'])(['+vowels+']{2,})(?=['+consonants+'])'

# re.findall() returns all non-overlapping matches in a string as a list of strings
# re.IGNORECASE is a flag for findall that ignores case
match = re.findall(regex, s, re.IGNORECASE)

# if match is successful, print all the matches on their own lines
# otherwise print -1
if match:
    print(*match, sep='\n')
else:
    print('-1')
