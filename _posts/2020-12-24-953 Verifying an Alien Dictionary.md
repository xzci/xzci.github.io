---
title: Verifying an Alien Dictionary
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 953> Verifying an Alien Dictionary

```c++
class Solution {
public:
    bool isAlienSorted(vector<string>& words, string order) {
        int ord[26];
        for (int i = 0; i < order.size(); ++i) {
            ord[order[i] - 'a'] = i;
        }
        for (int i = 0; i < words.size()-1; ++i) {
            if (!checkTwo(words[i], words[i+1], ord)) 
                return false;
        }
        return true;
    
    }
    
    bool checkTwo(string& s1, string& s2, int (&ord)[26]) {
        if (s1.find(s2) == 0 && s1.size() > s2.size()) 
            return false;
        int i = 0;
        while (i < s1.size() && i < s2.size()) {
            if (ord[s1[i] - 'a'] > ord[s2[i] - 'a'])
                return false;
            else if (ord[s1[i] - 'a'] < ord[s2[i] - 'a'])
                return true;
            ++i;
        }
        return true;
    }
    
};
```

