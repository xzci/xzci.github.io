---
title: Merge Strings Alternately
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1768> Merge Strings Alternately


```c++
class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int n = max(word1.size(), word2.size());
        string ans = "";
        
        for(int i = 0; i < n; i++)
        {
            if(word1.size() > i)
                ans += word1[i];
            if(word2.size() > i)
                ans += word2[i];
        }
        
        return ans;
    }
};
```

