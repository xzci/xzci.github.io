---
title: Generate Parentheses
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 22> Generate Parentheses

```c++
// Method 1
class Solution {
public:
    vector<string> generateParenthesis(int n) {
        if(n == 0)
            return vector<string>(1, "");
        if(n == 1)
            return vector<string>(1, "()");
        vector<string> result;

        for(int i = 0; i < n; i++)
            for(auto inner : generateParenthesis(i))
                for(auto outer : generateParenthesis(n - 1 - i))
                    result.push_back("(" + inner + ")" + outer);

        return result;
    }
};

// Method 2
class Solution {
public:
    void bt(int n, int open, int close, string& comb, vector<string>& ans) {
        if (comb.size() == 2 * n ) {
            ans.push_back(comb);
            return;
        }

        if (open < n) {
            comb.push_back('(');
            bt(n, open + 1, close, comb, ans);
            comb.pop_back();
        }

        if (close < open) {
            comb.push_back(')');
            bt(n, open, close+1, comb, ans);
            comb.pop_back();
        }
    }

    vector<string> generateParenthesis(int n) {
        string comb;
        vector<string> ans;
        bt(n, 0, 0, comb, ans);
        return ans;
    }
};
```
