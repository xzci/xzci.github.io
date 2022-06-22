---
title: Counting Words With a Given Prefix
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2185> Counting Words With a Given Prefix

```c++
class Solution {
public:
    int prefixCount(vector<string>& words, string pref) {
        int ans = 0;
        for(auto word : words) {
            bool check = true;
            for(int i = 0; i != pref.size(); i++) {
                if(word[i] !=  pref[i]) {
                    check = false;
                    break;
                }
                if(i == word.size()) {
                    check = false;
                    break;
                }
            }
            if(check == true)
                ans++;
        }
        return ans;
    }
};
```
