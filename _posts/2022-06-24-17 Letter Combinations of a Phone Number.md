---
title: Letter Combinations of a Phone Number
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 17> Letter Combinations of a Phone Number

```c++
class Solution {
public:
    void getLetterCombinations(string digits, string c, vector<string>& pad, vector<string>& res) {
        for(auto i : pad[digits[0] - '0']) {
            string c2 = c + i;
            string digits2 = digits;
            digits2.erase(0, 1);
            if(!digits2.size())
                res.push_back(c2);
            else
                getLetterCombinations(digits2, c2, pad, res);
        }
    }

    vector<string> letterCombinations(string digits) {
        if(!digits.size()) return {};
        vector<string> res;
        vector<string> pad = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        string c = "";
        getLetterCombinations(digits, c, pad, res);
        return res;
    }
};
```
