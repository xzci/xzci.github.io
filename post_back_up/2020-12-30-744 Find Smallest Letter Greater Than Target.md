---
title: Find Smallest Letter Greater Than Target
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 744> Find Smallest Letter Greater Than Target

```c++
class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        char ans = 'z' + 1;
        
        for(auto i : letters) {
            if(i > target) {
                if(ans > i) {
                    ans = i;
                }
            }
        }
        
        return (ans == 'z' + 1) ? letters[0] : ans;
    }
};
```

