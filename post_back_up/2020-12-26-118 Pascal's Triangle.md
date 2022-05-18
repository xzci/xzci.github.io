---
title: Pascal's Triangle
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 118> Pascal's Triangle

```c++
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> answer;
        for(int i = 1; i <= numRows; i++) {
            vector<int> sub(i,1);
            for(int j = 1; j < i - 1; j++) {
                sub[j] = answer[i-2][j] + answer[i-2][j-1];
            }
            answer.push_back(sub);
        }
        return answer;
    }
};
```

