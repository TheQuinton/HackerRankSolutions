if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))

arr.sort()
arr = list(filter(lambda x: x != arr[n-1],arr))
print (arr[-1])
