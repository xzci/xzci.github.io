---
title: Detect Pattern of Length M Repeated K or More Times
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1566> Detect Pattern of Length M Repeated K or More Times

```c++
class Solution {
public:
    bool containsPattern(vector<int>& arr, int m, int k) {
        int n = arr.size();
        int counter = 0;

        for (int i = 0; i + m < n; i++) {
            if (arr[i] == arr[i+m]) 
                counter++;
            else 
                counter = 0;

            if (counter == m * (k - 1)) 
                return true;
        }
        return false;
    }
};
```

