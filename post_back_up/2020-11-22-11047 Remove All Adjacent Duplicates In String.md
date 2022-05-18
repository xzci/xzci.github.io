---
title: Remove All Adjacent Duplicates In String
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1047> Remove All Adjacent Duplicates In String

```c++
// Method 1
class Solution {
public:
    string removeDuplicates(string S) {
        int n = S.size();
        for(int i = 0;i < n; i++){
            if(S[i] == S[i+1]) {
                S = S.erase(i,2);
                n = S.size();
                i = -1;
            }
        }
        return S;
    }
};

// Method 2
class Solution {
public:
    string removeDuplicates(string S) {
        int end = 0;
        for(int i= 0, n = S.size(); i < n; i++, end++) {
            S[end] = S[i];
            if( end > 0 && S[end] == S[end-1])
                end -= 2;
        }
        
        return S.substr(0, end);        
    }
};
```

