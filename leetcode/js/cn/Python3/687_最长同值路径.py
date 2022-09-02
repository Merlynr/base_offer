# @algorithm @lc id=687 lang=python3 
# @title longest-univalue-path

# @author Merlynr
from cn.Python3.mod.preImport import *
# @test([5,4,5,1,1,null,5])=2
# @test([1,4,5,4,4,null,5])=2
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestUnivaluePath(self, root: Optional[TreeNode]) -> int:
        if not root: return 0   
        def dfs(node):
            nonlocal res
            # 接收左边节点返回的以左边节点为端点的最长路径，
            # 并且只有当存在左节点且左节点和当前节点值一样时才有效 否则为0
            left = (node.val ==node.left.val)*dfs(node.left) if node.left else 0
            # 接收右边节点返回的以右边节点为端点的最长路径，与左节点同理
            right = (node.val ==node.right.val)*dfs(node.right) if node.right else 0
            # 讨论子-父-子结构的路径长度
            res = max(res,left+right+1)
            # 向父节点返回以当前节点为端点的路径长度
            return max(left,right)+1
        res = 0
        dfs(root)
        return res-1