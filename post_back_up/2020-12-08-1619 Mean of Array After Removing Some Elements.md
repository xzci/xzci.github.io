---
title: Mean of Array After Removing Some Elements
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1619> Mean of Array After Removing Some Elements

```c++
class Solution {
public:
    double trimMean(vector<int>& arr) {
        sort(arr.begin(), arr.end());
        
        int num = arr.size() *.05;
        double sum = 0;
        double count = 0;
        for(int i = num; i < arr.size() - num; i++){
            sum += arr[i];
            count++;
        }

        return sum / count;
    }
};
```

