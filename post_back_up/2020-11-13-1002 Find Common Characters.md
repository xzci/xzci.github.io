---
title: Find Common Characters
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1002> Find Common Characters

```c++
class Solution {
public:
    vector<string> commonChars(vector<string>& A) {
        vector<char> v1(26, 0);
        
        for (auto c : A[0])
            v1[c - 'a']++;
        
        for (int id = 1; id < A.size(); id++) {
            vector<char> v2(26, 0);
            for (auto c : A[id])
                v2[c - 'a']++;
            
            for (int id = 0; id < 26; id++) {
                v1[id] = min(v1[id], v2[id]);
            }
        }
        vector<string> result;
        for (int id = 0; id < 26; id++) {
            if(v1[id] > 0) {
                string s(1, id + 'a');
                int cnt = v1[id];
                while(cnt-- > 0)
                    result.push_back(s);
            }
        }
        return result;
    }
};
```

