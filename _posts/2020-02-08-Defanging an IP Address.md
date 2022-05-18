---
title: Defanging an IP Address
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Defanging an IP Address

```c++
class Solution {
public:
    string defangIPaddr(string address) {
        string ans = "";
        
        for(auto i : address) 
            ans = ((i == '.') ? ans + "[.]": ans + i);
        return ans;
    }
    
};
```

