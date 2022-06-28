---
title: Longest Valid Parentheses
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-H 32> Longest Valid Parentheses

```c++
class Solution {
public:
    int longestValidParentheses(string s) {
        int n = s.length();
        stack<int> st;
        st.push(-1);
        int maxans = 0;
        for(int i = 0; i < n; i++) {
            if(s[i] == '(')
                st.push(i);
            else {
                st.pop();
                if(st.empty())
                    st.push(i);
                else
                    maxans = max(maxans, i - st.top());
            }
        }
        return maxans;

    }
};
```
