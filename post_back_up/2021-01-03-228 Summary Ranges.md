---
title: Summary Ranges
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 228> Summary Ranges

```c++
class Solution {
public:
    vector<string> summaryRanges(vector<int>& nums) {
        vector<string> ranges;
        int n = nums.size();
        if(n == 0)
            return ranges;
        int l = nums[0];
        for(int i = 1; i <= n; ++i) {
            if(i == n || nums[i] > nums[i-1] + 1) {
                if(nums[i-1] == l)
                    ranges.push_back(to_string(l));
                else
                    ranges.push_back(to_string(l) + "->" + to_string(nums[i-1]));
                if(i < n)
                    l = nums[i];
            }
        }
        return ranges;
    }
};
```

