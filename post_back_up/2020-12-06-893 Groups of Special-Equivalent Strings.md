---
title: Groups of Special-Equivalent Strings
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 893> Groups of Special-Equivalent Strings

```c++
class Solution {
public:
    int numSpecialEquivGroups(vector<string>& A) {
        unordered_set<string> us;
        for(auto i : A) {
            string check(52,0);
            for(int j = 0; j != i.size(); j++) 
                check[i[j] - 'a' + 26 * (j%2)]++;           
            us.insert(check);
        }
        return us.size();
    }
};
```

