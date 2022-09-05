# 查找字符串中的最长公共前缀

def Solution(arr):
    inArr= arr
    for i in range(len(inArr[0])):
        for j in range(len(inArr)):
            if(inArr[j][i]!=inArr[0][i]):
                break
        else:
            # return inArr[0][:j]
            print(inArr[0][:j])
            return
    # return ''
    print('')
    return

str = input()
arr = str.split(',')
Solution(arr)