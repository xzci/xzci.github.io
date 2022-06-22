---
title: Sort Even and Odd Indices Independently
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2164> Sort Even and Odd Indices Independently

```c++
// Method 1
class Solution {
public:
    vector<int> sortEvenOdd(vector<int>& nums) {
        size_t size = nums.size();
        priority_queue<int, vector<int>,    less<int>> max_heap;
        priority_queue<int, vector<int>, greater<int>> min_heap;

        for (size_t s = 0; s < size; s++)
            s % 2 == 0 ? min_heap.push(nums[s]) : max_heap.push(nums[s]);

        for (size_t s = 0; s < size; s++)
            if (s % 2 == 0)
                nums[s] = min_heap.top(), min_heap.pop();
            else
                nums[s] = max_heap.top(), max_heap.pop();


        return nums;
    }
};

// Method 2
class Solution {
public:
    vector<int> sortEvenOdd(vector<int>& nums) {
        vector<int>e, o;
        for(int i=0;i<nums.size();i++) {
            if(i%2) o.push_back(nums[i]);
            else e.push_back(nums[i]);
        }
        sort(e.begin(), e.end());
        sort(o.begin(), o.end(), greater<int>());
        for(int i=0;i<e.size();i++) nums[2*i] = e[i];
        for(int i=0;i<o.size();i++) nums[2*i+1] = o[i];
        return nums;
    }
};
```
