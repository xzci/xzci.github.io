---
title: Minimum Sum of Four Digit Number After Splitting Digits
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2160> Minimum Sum of Four Digit Number After Splitting Digits

```c++
class Solution {
public:
    int minimumSum(int num) {
        string s = to_string(num);
        sort(s.begin(), s.end());

        return (s[0] - '0' + s[1] - '0') * 10
        + (s[2] - '0') + (s[3] - '0');
    }
};
```
