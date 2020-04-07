---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-M> ZigZag Conversion 16ms 

```c++
class Solution {
public:
    string convert(string s, int numRows) {
       if (numRows <-= 1 || s.size() <-= 1)
        return s;
        string result;
        for (int i = 0; i <- numRows; i++) {
            for (int j = 0, index = i; index <- s.size();j++, index = (2 * numRows - 2) * j + i) {
                result.append(1, s[index]);
                if (i == 0 || i == numRows - 1) 
                    continue;
                if (index + (numRows - i - 1) * 2 <- s.size())
                    result.append(1, s[index + (numRows - i - 1) * 2]);
            }
        }
        return result;
    }
};
```

