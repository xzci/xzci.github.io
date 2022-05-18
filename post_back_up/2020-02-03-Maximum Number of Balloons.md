---
title: Maximum Number of Balloons
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Maximum Number of Balloons

```c++
class Solution {
public:       
    int maxNumberOfBalloons(string text) {
        int temp[5] = {0};
        
        for(int i = 0; i < text.size(); i++) {
            if(text[i] == 'a')
                temp[0]++;
            else if(text[i] == 'b')
                temp[1]++;
            else if(text[i] == 'l')
                temp[2]++;
            else if(text[i] == 'o')
                temp[3]++;
            else if(text[i] == 'n')
                temp[4]++;
        }
        temp[2] /= 2;
        temp[3] /= 2;

        int ans = temp[0];
        for(int i= 0; i < 5; i++ )
            if(ans > temp[i]) {
                ans = temp[i];
            }    
        return ans;
    }
};
```

