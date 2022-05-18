---
title: Backspace String Compare
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 844> Backspace String Compare

```c++
class Solution {
public:
    bool backspaceCompare(string S, string T) {
        stack<char> A, B;
        for (auto &p: S) {
            if (p=='#') {
                if (!A.empty()) {A.pop();}
                continue;
            }
            A.push(p);
        }
        for (auto &p: T) {
            if (p=='#') {
                if (!B.empty()) {B.pop();}
                continue;
            }
            B.push(p);
        }
        
        if (A.size() != B.size()) {return false;}
        while (!A.empty()) {
            if (A.top() != B.top()) {return false;}
            A.pop(); B.pop();
        }
        return true;
    }
};
```

