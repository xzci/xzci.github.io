---
title: Largest Perimeter Triangle
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 976> Largest Perimeter Triangle

```c++
// Method 1
class Solution {
public:
    int largestPerimeter(vector<int>& A) {
        sort(A.begin(), A.end());
    
        for(int i = A.size() - 1; i >= 2; i--) {
            if(A[i] < A[i-1] + A[i-2])
                return A[i] + A[i-1] + A[i-2];
        }

        return 0;
    }
};

// Method 2
class Solution {
public:
    int largestPerimeter(vector<int>& A) {
        priority_queue<int> pq(less<int>(), A);
        int a;
        int b = pq.top();
        pq.pop();
        int c = pq.top();
        pq.pop();
        do {
            a = b;
            b = c;
            
            c = pq.top();
            pq.pop();
        } while (!pq.empty() && a >= b + c);
        if (a >= b + c)
            return 0;
        return a + b + c;
    }
};
```

