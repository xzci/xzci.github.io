---
title: Number of Strings That Appear as Substrings in Word
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1967> Number of Strings That Appear as Substrings in Word


```c++
class Solution {
public:
    int numOfStrings(vector<string>& patterns, string word) {
        int count = 0;
        for(int i=0; i < patterns.size(); i++) {
            if(word.find(patterns[i]) != string::npos)
                count++;
        }
        return count;
    }
};
```

