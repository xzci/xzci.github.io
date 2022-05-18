---
title: Largest Substring Between Two Equal Characters
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1624> Largest Substring Between Two Equal Characters

```c++
class Solution {
public:
    int maxLengthBetweenEqualCharacters(string s) {
        int len = -1;
        unordered_map<char,int> umap;
        for(int i = 0;i < s.size(); i++){
            
            
            if(umap.find(s[i]) != umap.end()){
                len = max(len, i - umap[s[i]] -1);
            }
            else{
                umap[s[i]] = i;
            }
            
            
        }
         return len;
    }
};
```

