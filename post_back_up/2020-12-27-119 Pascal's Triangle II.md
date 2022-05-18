---
title: Pascal's Triangle II
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 119> Pascal's Triangle II

```c++
class Solution {
public:
    vector <int> getRow(int rowIndex) {
        
        int rowNumber = rowIndex + 1;
        vector result(rowNumber, 1);
        for (int i = 2; i < rowNumber; i++) {
            int prev = 1;
            for (int j = 1; j < i; j++) {
                int temp = result[j];
                result[j] = temp + prev;
                prev = temp;
            }
        }
        return result;

    }
};
```

