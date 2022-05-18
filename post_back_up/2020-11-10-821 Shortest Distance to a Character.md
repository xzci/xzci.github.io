---
title: Shortest Distance to a Character
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 821> Shortest Distance to a Character

```c++
class Solution {
public:
    vector<int> shortestToChar(string S, char C) {
        vector<int> ans(S.size(), -1);
        vector<int> march;
        int index = 0;
        for(auto i : S) {
            if(i == C) {
                ans[index] = 0;
                march.push_back(index);
            }
            index++;
        }
        int add = 1;
        for(auto j : S) {
            for(auto i : march) {
                if(i+ add < S.size())
                    if(ans[i + add] == -1)
                    ans[i + add] = add;
                if(i - add >= 0)
                  if(ans[i - add] == -1)
                    ans[i - add] = add;
            }
            add++;
        }
        return ans;
    }
};
```

