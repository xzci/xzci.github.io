---
title: Search a 2D Matrix
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 74> Search a 2D Matrix

```c++
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        if(matrix.size() == 0)
            return false;

        const int m = matrix.size();
        const int n = matrix[0].size();


        int first = 0;
        int last = m * n;

        while(first < last) {
            int mid = first + (last - first) / 2;
            int value = matrix[mid / n][mid % n];

            if(value == target)
                return true;
            else if(value < target)
                first = mid + 1;
            else
                last = mid;
        }
        return false;
    }
};
```
