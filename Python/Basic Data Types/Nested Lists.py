# students = [['Harry', 37.21], ['Berry', 37.21], ['Tina', 37.2], ['Akriti', 41], ['Harsh', 39]]
students = [[input(), float(input())] for _ in range(int(input()))]
# Sort the list by second index or grade (numerically)
students.sort(key=lambda x: x[1])
# Take the lowest grade of the first element in the sorted list
lowest = students[0][1]
# Loop through nested list and breaks at the first non-lowest grade
for name, grade in students:
   if grade != lowest:
       second_lowest = grade
       break

# Sort the list by first index or name (Alphabetically)
students.sort(key=lambda x: x[0])
# Loop through nested list and print those with the second_lowest grade
for name, grade in students:
    if grade == second_lowest:
        print(name)
