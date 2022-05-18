---
title:  Unique Number of Occurrences
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E>  Unique Number of Occurrences

```c++
class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
        int temp[2000] = {0};
        for(int i = 0; i < arr.size(); i++) {
            temp[arr[i] + 1000]++;
        }
        
        for(int i = 0; i < 2000; i++) {
            if(temp[i] != 0)
                for(int j = i + 1; j < 2000; j++) {
                    if(temp[j] != 0)
                        if(temp[i] == temp[j])
                            return false;
            }
        }
        return true;
    }
};
```

