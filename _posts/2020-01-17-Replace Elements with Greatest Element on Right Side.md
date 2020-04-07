---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E>  Replace Elements with Greatest Element on Right Side

```c++
class Solution {
public:
    vector<int> replaceElements(vector<int>& arr) {
        int temp = -1;
        arr.push_back(-1);
        for(int i = arr.size() - 2; i >= 0; i--) {
            if(arr[i] > temp)
                temp = arr[i];
            else
                arr[i] = temp;
        }
        arr.erase(arr.begin());
        return arr;
    }
};
```

