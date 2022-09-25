---
title: Number of Recent Calls
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 933> Number of Recent Calls

```c++
class RecentCounter {
public:
    queue<int> q;
    RecentCounter() {
        while(!q.empty())
            q.pop();
    }
    
    int ping(int t) {
        while(!q.empty() && (t - q.front()) > 3000)
            q.pop();
        q.push(t);  
        return q.size();
    }
    
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter* obj = new RecentCounter();
 * int param_1 = obj->ping(t);
 */
```

