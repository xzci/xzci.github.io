---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E>  Element Appearing More Than 25% In Sorted Array

```c++
class Solution {
public:
    
    int findSpecialInteger(vector<int>& arr) {
        int count = arr.size()  / 4;
        int temp = arr[0];
        int index = 0;
        for(int i = 1; i < arr.size(); i++) {
            index++;
            if(arr[i] != temp) {
                temp = arr[i];
                index = 0;
            }
            if(index >= count)
                return arr[i];
        }
        return arr[0];
    }
};
```

