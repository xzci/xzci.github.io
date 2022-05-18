---
title: Minimum Operations to Make the Array Increasing
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1827> Minimum Operations to Make the Array Increasing


```c++
//method 1
class Solution {
public:
    int minOperations(vector<int>& nums) {
        int step = 0;
        priority_queue<int>pq;
        for(int i = 0;i < nums.size(); i++)
        {
            if(!pq.empty() && pq.top() >= nums[i])
            {
                int oldvalue = nums[i];
                nums[i] = pq.top()+1;
                step += nums[i]-oldvalue;  
            }
            pq.push(nums[i]);
        }
     return step;
    }
};

// Method 2
class Solution {
public:
    int minOperations(vector<int>& n) {
        int sum = 0;
        for(int i = 0;i < n.size() - 1; i++) {
            if(n[i] >= n[i+1]) {
                sum += n[i] - n[i+1] + 1;
                n[i+1] += (n[i] - n[i+1] + 1);
            }
        }
        return sum;
    }
};
```

