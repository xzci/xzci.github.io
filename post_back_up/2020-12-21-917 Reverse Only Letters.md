---
title: Reverse Only Letters
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 917> Reverse Only Letters

```c++
class Solution {
public:
    string reverseOnlyLetters(string S) {
        int len = S.length();
        string ans = "";
        int j = len - 1;
        for(int i = 0; i < len; i++) {
            if(isalpha(S[i])) {
                while(j >= 0 && !isalpha(S[j]))
                    j -= 1;
                ans += S[j];
                j -= 1;
            }
            else
                ans += S[i];
        }
        return ans;
    }
};
```

