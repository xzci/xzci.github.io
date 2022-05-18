---
title: License Key Formatting
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 482> License Key Formatting

```c++
class Solution {
public:
    string licenseKeyFormatting(string S, int K) {
        int len = S.length();
        string result = "";
        int counter = 0;
        for(int idx = len - 1; idx >= 0; idx--){
            char c = S[idx];
            if(c == '-') continue;
            if(counter == K){
                result += '-';
                counter = 0;
            }
            if(c >= 'a' && c <= 'z'){
                c = c + ('A' - 'a');
            }
            result += c;
            counter++;
        }
        
        reverse(result.begin(), result.end());
        return result;
    }
};
```

