---
title: Teemo Attacking
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 495> Teemo Attacking


```c++
class Solution {
public:
    int findPoisonedDuration(vector<int>& timeSeries, int duration) {
        int cnt = 0;
        int n = timeSeries.size();
        for(int i = 0; i < n-1;++i){
             if(timeSeries[i] + duration <= timeSeries[i+1]){
                cnt += duration;
            }
            else{
                cnt+= (timeSeries[i+1] - timeSeries[i]);
            }
        }
        cnt += duration;
        return cnt;
    }
};
```

