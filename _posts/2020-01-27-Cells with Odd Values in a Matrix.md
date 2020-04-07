---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Cells with Odd Values in a Matrix

```c++
class Solution {
public:
    int oddCells(int n, int m, vector<vector<int>>& indices) {
        int rowValue, colValue;
        int a = 1;
        int b = 1;
        for(int i = 1; i != indices.size(); i++) {
            rowValue = colValue = 0;
            for(int j = i ; j >= 0; j--) {
                if(indices[i][0] == indices[j][0])
                    rowValue++;
                if(indices[i][1] == indices[j][1])
                    colValue++;
            }
            if(rowValue % 2)
                a++;
            else
                a--;
            if(colValue % 2)
                b++;
            else
                b--;
        }
        return a * m + b * n - 2 * a * b;
    }
};
```

