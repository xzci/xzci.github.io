---
title: Kth Missing Positive Number
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1539> Kth Missing Positive Number

```c++
class Solution {
public:
    int findKthPositive(vector<int>& arr, int k) {
        int index = 0;
        for(int i = 1; i != arr.back(); i++) {
            if(i == arr[index])
                index++;
            else
                k--;
            if(k == 0)
                return i;
        }
        return arr.back() + k;    
    }
};
```

