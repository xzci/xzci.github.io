---
title: Check if Number Has Equal Digit Count and Digit Value
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2283> Check if Number Has Equal Digit Count and Digit Value

```c++
class Solution {
public:
    bool digitCount(string num) {
        int check[10] = {0};
        for(auto i : num) {
            check[i - '0']++;
        }

        for(int i = 0; i != num.size(); i++) {
            if(check[i] != (num[i] - '0'))
                return false;
        }
        return true;
    }
};
```
