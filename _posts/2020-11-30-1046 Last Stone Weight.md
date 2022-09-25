---
title: Last Stone Weight
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1046> Last Stone Weight

```c++
class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
       priority_queue<int> pq(stones.begin(),stones.end());
        while(pq.size() >= 2){
            int x = pq.top();
            pq.pop();
            int y = pq.top();
            pq.pop();
            if(x>y)
                pq.push(x - y);
        }
        return pq.empty() ? 0 : pq.top();
    }
};
```

