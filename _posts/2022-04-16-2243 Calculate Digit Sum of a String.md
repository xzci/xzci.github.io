---
title: Calculate Digit Sum of a String
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2243> Calculate Digit Sum of a String

```c++
class Solution {
public:
    string digitSum(string s, int k) {
        while(s.length() > k) {
            int i = 0 ;
            string tmp = "";
            while (i < s.length()) {
                int sum = 0;
                int cnt = 0;
                while (i < s.length() && cnt < k) {
                    sum += s[i] - '0';
                    i++;
                    cnt++;
                }
                tmp += to_string(sum);
            }
            s = tmp;
        }
        return s;
    }
};
```
