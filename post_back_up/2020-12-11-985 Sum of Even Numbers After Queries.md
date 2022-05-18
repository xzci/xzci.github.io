---
title: Sum of Even Numbers After Queries
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 985> Sum of Even Numbers After Queries

```c++
class Solution {
public:
    vector<int> sumEvenAfterQueries(vector<int>& A, vector<vector<int>>& queries) {
        vector<int> res(queries.size());
        int sum = accumulate(A.begin(), A.end(), 0, 
                             [](int sum, int n) {
                                 return n % 2 == 0 ? sum + n : sum;
                             });
        
        for (int i = 0; i < queries.size(); ++i) {
            int index = queries[i][1], val = queries[i][0];
            int cur = val + A[index];
            
            if (A[index] % 2 == 0 && cur % 2 == 0) {
                sum += val;
            }
            else if (A[index] % 2 == 0) {
                sum -= A[index];
            }
            else if (cur % 2 == 0){
                sum += cur;
            }
            
            res[i] = sum;
            A[index] = cur;
        }
        
        return res;
    }
};
```

