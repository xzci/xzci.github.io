---
title: Minimum Subsequence in Non-Increasing Order
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1403> Minimum Subsequence in Non-Increasing Order

```c++
// Method 1
class Solution {
public:
    vector<int> minSubsequence(vector<int>& nums) {
        int sum = accumulate(nums.begin(), nums.end(), 0);
        sort(nums.rbegin(), nums.rend());
        vector<int> res;
        int sum_res = 0;
        int i = 0;
        while (sum_res <= sum - sum_res && i < nums.size()) {
            res.push_back(nums[i]);
            sum_res += nums[i];
            i ++;
        }
        return res;
    }
    
};

// Method 2
class Solution {
public:
    vector<int> minSubsequence(vector<int>& nums) {
        int buckets[101] = {};
        int sum = 0;
        vector<int> result;
        
        for(int num : nums) {
            buckets[num]++;
            sum += num;
        }
        
        int seq_sum = 0;
        for(int i = 100; i > 0; i--) {
            while(buckets[i] > 0) {
                result.push_back(i);
                seq_sum += i;
                buckets[i]--;
                if(seq_sum > sum - seq_sum) {
                    i = -1;
                    break;
                }
            }
        }
        return result;
    }
};
```

