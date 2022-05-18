---
title: Thousand Separator
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1556> Thousand Separator

```c++
class Solution {
public:
    string thousandSeparator(int n) {
        string num = to_string(n);

        for (int i = num.length() - 1, j = 1; i > 0; --i, ++j) {

            if (j % 3 == 0) {
                num.insert(num.begin() + i, '.');
            }
        }
        return num;
    }
};
```

