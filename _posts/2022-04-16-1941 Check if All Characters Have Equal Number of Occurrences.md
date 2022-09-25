---
title: Check if All Characters Have Equal Number of Occurrences
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 1941> Check if All Characters Have Equal Number of Occurrences

```c++
// Method 1
class Solution {
public:
    bool areOccurrencesEqual(string s) {
        int check[26] = {0};
        for(auto c : s) {
            check[c - 'a']++;
        }

        int temp = 0;
        for(auto i : check) {
            if(temp == 0 && i != 0)
                temp = i;
            if(i != 0){
                if(temp != 0 && temp != i)
                return false;
            }

        }
        return true;
    }
};

// Method 2
class Solution {
public:
    bool areOccurrencesEqual(string s) {
        int check[26] = {0};
        for(auto c : s) {
            check[c - 'a']++;
        }

        set<int> ans;
        for(auto i : check) {
            if(i != 0)
                ans.insert(i);
        }
        return ans.size() == 1;
    }
};
```
