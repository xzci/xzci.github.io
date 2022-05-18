---
title: Redistribute Characters to Make All Strings Equal
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1897> Redistribute Characters to Make All Strings Equal


```c++
//method 1
class Solution {
public:
    bool makeEqual(vector<string>& words) {
        int freq[26] = {0};
        
        for (auto word : words)
            for (auto c : word)
                freq[c - 'a']++;
        
        for (int i = 0; i < 26; i++)
            if (freq[i] && freq[i] % words.size() != 0)
                return false;
        
        return true;
    }
};
```

