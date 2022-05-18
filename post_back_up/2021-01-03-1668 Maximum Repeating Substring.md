---
title: Maximum Repeating Substring
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1668> Maximum Repeating Substring

```c++
class Solution {
public:
    int maxRepeating(string sequence, string word) {
        string temp = word;
        int times = 0;
        while (sequence.find(temp) != string::npos) {
            temp += word;
            times++;
        }
        return times;
    }
};
```

