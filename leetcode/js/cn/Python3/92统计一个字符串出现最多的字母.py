#  实现一个函数，输入一个字符串，返回该字符串出现最多的字母
def Solution():
    str= input("Please enter ：")
    map = {}
    for i in range(len(str)):
        if str[i] not in map:
            map[str[i]]=1
        else:
            map[str[i]]=map.get(str[i])+1

    maxVal = str[0]
    for i in map.keys():
        maxVal = maxVal if map[maxVal]>=map[i] else i
    return maxVal
print(Solution())