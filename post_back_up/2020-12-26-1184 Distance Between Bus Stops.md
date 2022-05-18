---
title: Distance Between Bus Stops
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1184> Distance Between Bus Stops

```c++
class Solution {
public:
    int distanceBetweenBusStops(vector<int>& distance, int start, int destination) {
        int sum = accumulate(distance.begin(), distance.end(), 0);
        int sum1 = 0;
        int check = max(start, destination);
        for(int i = min(start, destination);i < check; i++)
            sum1 += distance[i];
        return min(sum - sum1, sum1);
    }
};

class Solution {
public:
    int distanceBetweenBusStops(vector<int>& distance, int start, int destination) {
        int sum0 = 0;
        for (int i = start; i != destination; i = (i+1) % distance.size()) {
            sum0 += distance[i];
        }
        
        int sum1 = 0;
        for (int i = start; i != destination; i = (i-1+distance.size()) % distance.size()) {
            sum1 += distance[(i-1+distance.size()) % distance.size()];
        }
        
        return min(sum0, sum1);
    }
};
```

