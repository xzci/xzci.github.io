---
title: Baseball Game
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 682> Baseball Game

```c++
class Solution {
public:
    int calPoints(vector<string>& ops) {
       vector<int> s;
        for(auto i : ops){
            if(i == "+")
                s.push_back(s[s.size()-1]+s[s.size()-2]);
            else if(i == "D")
                s.push_back(s[s.size()-1]*2);
            else if(i == "C")
                s.pop_back();
            else s.push_back(stoi(i));
        }
        return accumulate(s.begin(),s.end(),0);
    }
};
```

