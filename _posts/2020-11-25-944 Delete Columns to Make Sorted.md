---
title: Delete Columns to Make Sorted
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 944> Delete Columns to Make Sorted

```c++
class Solution {
public:
    int minDeletionSize(vector<string>& A) {
        int n = A.size(), len = A[0].size(), res = 0;
        for (int j = 0; j < len; ++j) {
            for (int i = 0; i < n - 1; ++i) {
                if (A[i][j] <= A[i + 1][j]) continue;
                ++res;
                break;
            }
        }
        return res;
    }
};
```

