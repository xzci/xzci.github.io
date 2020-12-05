---
title: Can Make Arithmetic Progression From Sequence
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1502> Can Make Arithmetic Progression From Sequence

```c++
class Solution {
public:
    bool canMakeArithmeticProgression(vector<int>& arr) {
        sort(arr.begin(), arr.end());
        int differ = arr[1] - arr[0];
        for(int i = 2; i < arr.size(); i++) {
            if((arr[i] - arr[i - 1]) != differ)
                return false;
        }
        return true;
    }
};
```

