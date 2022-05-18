---
title: Find Lucky Integer in an Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1394> Find Lucky Integer in an Array

```c++
class Solution {
public:
    int findLucky(vector<int>& arr) {
        int temp[500] = {0};
        for(int i = 0; i!= arr.size(); i++) {
            temp[arr[i]]++;
        }
        for(int i = 499; i != 0; i--) {
            if(temp[i] == i) 
                return i;
        }
       
        return -1;
    }   
};
```

