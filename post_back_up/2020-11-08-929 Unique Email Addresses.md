---
title: Unique Email Addresses
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 929> Unique Email Addresses

```c++
class Solution {
public:
    int numUniqueEmails(const vector<string>& emails) {
        unordered_set<string> mail;
        for(const auto& m:emails) {
            string s;
            int pos = 0;
            for(int i = 0; i < m.size(); ++i) {
                if(m[i] == '+') 
                    while(m[++i] != '@');
                if(m[i] == '@') {
                    pos=i; 
                    break;
                }
                if(m[i] != '.')
                    s+=m[i];
            }
            mail.insert(s+m.substr(pos));
        }
        return mail.size();
    }
};
```

