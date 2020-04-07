---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Valid Parentheses

```c++
class Solution {
public:
    bool isValid(string s) {
        if (s.size() % 2)
            return false;
    
        stack<char> st;
        for (auto i = s.begin(); i != s.end(); i++) {
            if (s.empty() && (*i == ')' || *i == ']' || *i == '}')) {
                return false;
            }
            if (!st.empty() && (st.top() == '(' && (*i == ']' || *i == '}'))) {
                return false;
            }
            if (!st.empty() && (st.top() == '[' && (*i == ')' || *i == '}'))) {
                return false;
            }

            if (!st.empty() && (st.top() == '{' && (*i == ')' || *i == ']'))) {
                return false;
            }

            if (st.empty()) {
                st.push(*i);
                continue;
            }
            if ((st.top() == '(' && *i == ')') || (st.top() == '[' && *i == ']') || (st.top() == '{' && *i == '}')) {
                st.pop();
                continue;
            }
            st.push(*i);
        }

        return st.empty();
    }
};
```

