---
title: Squares of a Sorted Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 977> Squares of a Sorted Array

```c++
// Method 1
class Solution {
public:
    vector<int> sortedSquares(vector<int>& A) {
        for(int i = 0; i != A.size(); i++) {
            A[i] = A[i] * A[i]; 
        }
        sort(A.begin(), A.end());
        return A;
    }
};
// Method 2
class Solution {
public:
    vector<int> sortedSquares(vector<int>& A) {
        vector<int> ans = A;
        int i = 0;
        int j = A.size()-1;
        int n = j;
        while(i <= j){
            ans[n] = abs(A[i]) > abs(A[j]) ? A[i] * A[i++] : A[j] * A[j--];
            n--;
        }
        return ans;
    
    }
};
```

