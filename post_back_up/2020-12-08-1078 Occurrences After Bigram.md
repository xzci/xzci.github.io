---
title: Occurrences After Bigram
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1078> Occurrences After Bigram

```c++
class Solution {
public:
    vector<string> findOcurrences(string text, string first, string second) {
        vector<string> result;
        stringstream ss(text);
        string token1, token2, token3;
        
        while(!ss.eof()) {
            ss >> token3;
            if (token1 == first && token2 == second)
                result.push_back(token3);
            
            token1 = std::move(token2), token2 = std::move(token3);
        }
        
        return result;
    }
};
```

