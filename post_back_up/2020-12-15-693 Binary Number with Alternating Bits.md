---
title: Binary Number with Alternating Bits
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 693> Binary Number with Alternating Bits

```c++
class Solution {
public:
    bool hasAlternatingBits(int n) {
        bitset<32> bit(n);
        string s = bit.to_string();
        
        int pos = 0;
        while(s[pos++] == '0');
        
        char check = s[pos - 1];
        
        for(int i = pos; i != s.size(); i++) {
            if(check == s[i]) {
                return false;
            } else {
                check = s[i];
            }
        }
        
        return true;
    }
};
```

