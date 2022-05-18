---
title: Maximize Sum Of Array After K Negations
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1005> Maximize Sum Of Array After K Negations

```c++
class Solution {
public:
    int largestSumAfterKNegations(vector<int>& A, int K) {
        sort(A.begin(), A.end());
        int i;
        for(i=0;i<A.size() && K;i++) {
            if(A[i]<0) {
                A[i] = abs(A[i]);
                K--;
            } else {
                break;
            }
        }
        K = K%2;
        if(K) {
            int m = min_element(A.begin(), A.end()) - A.begin();
            A[m] *= -1;
        }        
        int ans = accumulate(A.begin(), A.end(), 0);
        return ans;
    }
};
```

