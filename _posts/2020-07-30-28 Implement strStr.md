---
title: Implement strStr()
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 28> Implement strStr()

```c++
class Solution {
public:
    int strStr(string haystack, string needle) {
        if (needle.size() == 0)
            return 0;
        else if(needle.size() > haystack.size())
            return -1;
        else {
            for(int i = 0, j = 0; i!= haystack.size(); ) {
                if(haystack[i] != needle[j]) {
                    i = i - j + 1;
                    j = 0;
                }
                else {
                    i++;
                    j++;
                    if(j == needle.size())
                        return i - needle.size();
                }
        }
        return -1;   
        }
    }
};
```

