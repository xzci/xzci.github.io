---
title: Kth Largest Element in a Stream
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 703> Kth Largest Element in a Stream

```c++
class KthLargest {
public:
    int k;
    priority_queue<int, vector<int>,greater<int>> minHeap;

    KthLargest(int k, vector<int>& nums) {
        this->k = k;  
        for(int i: nums)
        {
            minHeap.push(i);
            if(minHeap.size() > k)
                minHeap.pop();
        }
        
    }
    
    int add(int val) { 
      
        if(minHeap.size() < k || val > minHeap.top())
            minHeap.push(val);
        if(minHeap.size() > k)
            minHeap.pop();
        return minHeap.top();
    }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest* obj = new KthLargest(k, nums);
 * int param_1 = obj->add(val);
 */
```

