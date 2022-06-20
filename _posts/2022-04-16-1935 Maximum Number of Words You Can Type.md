---
title: Maximum Number of Words You Can Type
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 1935> Maximum Number of Words You Can Type

```c++
// Method 1
class Solution {
public:
    int canBeTypedWords(string text, string brokenLetters) {
        int check[26] = {0};
        for(auto c : brokenLetters)
            check[c -'a'] = 1;

        bool cannot = false;
        int ans = 0;

        for(auto c : text) {
            if(c == ' ') {
                if (cannot != true)
                    ans++;
                cannot = false;
            }
            else if(check[c - 'a'] == 1)
               cannot = true;
        }

        if(cannot == false)
            ans++;
        return ans;
    }
};

// Method 2
class Solution {
public:
    int canBeTypedWords(string text, string brokenLetters) {
        unordered_set<char> lookup(cbegin(brokenLetters), cend(brokenLetters));
        int result = 0;
        bool broken = false;
        for (const auto& c : text) {
            if (c == ' ') {
              result += int(broken == false);
              broken = false;
            } else if (lookup.count(c)) {
                broken = true;
            }
        }
        return result + int(broken == false);
    }
};
```
