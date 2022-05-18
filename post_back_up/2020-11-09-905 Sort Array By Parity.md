---
title: Sort Array By Parity
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 905> Sort Array By Parity

```c++
// Method 1
class Solution {
public:
    vector<int> sortArrayByParity(vector<int>& A) {
        vector<int> ans(A.size(), 0);
        int index_front = 0;
        int index_pre = A.size() - 1;
        for(auto i : A) {
            if(!(i % 2)) {
                ans[index_front++] = i;
            } else
                ans[index_pre--] = i;   
        }
        return ans;
    }
};
// Method 2
class Solution {
public:
    vector<int> sortArrayByParity(vector<int>& A) {
        int buff = 0;
        for(int i = 0; i < A.size(); i++) {
            if(A[i] % 2 == 0){
                swap(A[buff], A[i]);
                buff++;
            }
        }
        return A;
    }
};
// Method 3
class Solution {
public:
    vector<int> sortArrayByParity(vector<int>& A) {
        vector<int> odd, even;
        for(int i=0; i<A.size(); i++){
            if(A[i] % 2 == 0)
                even.push_back(A[i]);
            else    
                odd.push_back(A[i]);
        }
        int n = even.size();
        for(int i = 0; i < A.size(); i++){
            if(i < n)   
                A[i] = even[i];
            else    
                A[i] = odd[i - n];
        }
        return A;
    }
};
```

