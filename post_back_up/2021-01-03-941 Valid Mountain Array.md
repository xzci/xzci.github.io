---
title: Valid Mountain Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 941> Valid Mountain Array

```c++
class Solution {
public:
    bool validMountainArray(vector<int>& arr) {
        if (arr.size() <= 1)
            return false;
        int i = 0;
        while (i < arr.size() - 1 && arr[i] < arr[i + 1])
            i++;   
        if (i == 0 || i == arr.size()-1)
            return false;
        while (i < arr.size() - 1 && arr[i] > arr[i + 1])
            i++;
        return i == arr.size()-1;
    }
};
```

