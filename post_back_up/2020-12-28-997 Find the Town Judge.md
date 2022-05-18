---
title: Find the Town Judge
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 997> Find the Town Judge

```c++
class Solution {
public:
    int findJudge(int N, vector<vector<int>>& trust) {
        if (N == 1) return 1;
	
        vector<int> visitCount(N + 1,0);
        for (int i = 0; i< trust.size(); i++){
            visitCount[trust[i][1]]++;
            visitCount[trust[i][0]]--;
        }

        for (int i = 0; i < visitCount.size(); i++){
            if ((N - 1) == visitCount[i]){
                return i;
            }
        }
        return -1;
    }
};
```

