# @algorithm @lc id=113 lang=python3 
# @title path-sum-ii

# @author Merlynr
from cn.Python3.mod.preImport import *
# @test([5,4,8,11,null,13,4,7,2,null,null,5,1],22)=[[5,4,11,2],[5,8,4,5]]
# @test([1,2,3],5)=[]
# @test([1,2],0)=[]
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    res=[]
    def pathSum(self, root: TreeNode, targetSum: int) -> List[List[int]]:
        self.res=[]
        print("sdas")
        path=[]
        self.dfs(root,targetSum,path)
        return self.res
    def dfs(self, root: TreeNode, targetSum: int, path):
        if(not root):return
        targetSum-=root.val
        path.append(root.val)
        if((not root.left) and (not root.right) and (targetSum==0)):
            self.res.append(path)
            path=[]
            return
        self.dfs(root.left, targetSum,path)
        self.dfs(root.right, targetSum,path)
s= Solution()
s.pathSum( [5,4,8,11,null,13,4,7,2,null,null,5,1],22)
print("sdas")