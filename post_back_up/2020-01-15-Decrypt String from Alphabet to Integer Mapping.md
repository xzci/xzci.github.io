---
title: Decrypt String from Alphabet to Integer Mapping
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Decrypt String from Alphabet to Integer Mapping


```c++
class Solution {
public:
    string freqAlphabets(string s) {
        string a = "";
        int b;
        for(int i = s.size() - 1; i >= 0; i--) {
            if(s[i] != '#')
                b = s[i] - '0' + 96;
            else {
                b =   (s[i - 2] - '0' )* 10 +  (s[i - 1] - '0' ) + 96;
                i -= 2;
            }
            a = (char)b + a;
        }
        return a;
    }
};
```

