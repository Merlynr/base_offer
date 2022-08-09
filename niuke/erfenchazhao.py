# -*- coding:utf-8 -*-

class BinarySearch:
    def getPos(self, A, n, val):
        # write code here
        if n == 0 or len(A) == 0:
            return -1
        l=0
        r=n-1
        while l<=r:
            m= l+int((r-l)>>1)
            if m==0 and A[m]==val:
                return m
            if A[m]==val and A[m-1]<A[m]:
                return m
            if A[m]==val and A[m-1]==A[m]:
                r=m-1
            if A[m]<val:
                l = m+1
            if A[m]>val:
                r = m-1
            
m =  BinarySearch()
        
print(m.getPos([4,4,10,21],4,4))         