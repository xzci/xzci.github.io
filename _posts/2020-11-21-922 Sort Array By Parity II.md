---
title: Sort Array By Parity II
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 922> Sort Array By Parity II

```c++
class Solution {
public:
    vector<int> sortArrayByParityII(vector<int>& A) {
        
        vector<int> result(A.size(), 0);
        int even = 0;
        int odd = 1;
        
        for(auto c : A) {
            if(c % 2 == 0) {
                result[even] = c;
                even += 2;
            }
            else{
                result[odd] = c;
                odd += 2;
            }
        }      
        
        return result;
    }
};
```

