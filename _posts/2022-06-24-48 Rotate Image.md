---
title: Rotate Image
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 48> Rotate Image

```c++
class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        for(int i = 0; i != matrix.size(); i++)
            for(int j = 0; j < matrix.size() - i; j++)
                swap(matrix[i][j], matrix[matrix.size() - 1 - j][matrix.size() - 1 - i]);
        for(int i = 0; i != matrix.size() / 2; i++)
            for(int j = 0; j < matrix.size(); j++)
                swap(matrix[i][j], matrix[matrix.size() - 1 - i][j]);
    }
};
```
