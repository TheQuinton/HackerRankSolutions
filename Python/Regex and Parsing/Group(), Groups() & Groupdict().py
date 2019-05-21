import re

s = input()
# Scan through string looking for match of pattern
# pattern is alphanumeric repeating characters 
# (\w) is alphanumeric characters and underscore (we don't want underscore...)
m = re.search(r"([a-zA-Z0-9])\1+", s)
# group(1) returns the first parenthesized subgroup
print(m.group(1) if m else -1)
