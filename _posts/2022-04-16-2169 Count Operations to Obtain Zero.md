---
title: Count Operations to Obtain Zero
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2169> Count Operations to Obtain Zero

```c++
class Solution {
public:
    int countOperations(int num1, int num2) {

        int ans = 0;
        while(true) {
            if(num1 == 0)
                break;
            if(num2 == 0)
                break;
            if(num2 > num1)
                swap(num2, num1);
            num1 = num1 - num2;
            ans++;
        }
        return ans;
    }
};
```
