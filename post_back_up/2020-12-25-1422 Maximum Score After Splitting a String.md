---
title: Maximum Score After Splitting a String
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1422> Maximum Score After Splitting a String

```c++
class Solution {
public:
    int maxScore(const string& s) {
        int one = count(s.begin(), s.end(), '1');
        int zero = 0;
        int score = 0;
        for(int i = 0; i<s.size() - 1; ++i)
            score = (s[i] =='0') ? max(score, ++zero + one) :
                                    max(score, --one + zero);
        return score;
    }
};
```

