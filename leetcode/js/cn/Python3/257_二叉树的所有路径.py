# @algorithm @lc id=257 lang=python3 
# @title binary-tree-paths

# @author Merlynr
from cn.Python3.mod.preImport import *
# @test([1,2,3,null,5])=["1->2->5","1->3"]
# @test([1])=["1"]
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    res = []
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:    
        self.res = []
        self.dfs(root,"")
        return self.res
    
    def dfs(self,root:TreeNode,path):
        if(not root): return
        path+=str(root.val)
        if(not root.left and not root.right):
            self.res.append(path)
            return
        self.dfs(root.left, path+'->')
        self.dfs(root.right, path+'->')