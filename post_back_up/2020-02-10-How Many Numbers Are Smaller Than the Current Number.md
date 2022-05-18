---
title: How Many Numbers Are Smaller Than the Current Number
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> How Many Numbers Are Smaller Than the Current Number

```c++
class Solution {
public:
    vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
        int bucket[101] = {0};
        for(auto i : nums)
            bucket[i]++;
        int index = 0;
        for(int i = 0; i != 101; i++) {
            if(bucket[i] != 0) {
                if(bucket[i] == 1) {
                    bucket[i] = index;
                    index++;
                }
                else {
                    int temp = bucket[i];
                    bucket[i] = index;
                    index += temp;
                }
            }
        }
        vector<int> ans(0, nums.size());
        for(auto i : nums) {
            ans.push_back(bucket[i]);
        }
        return ans;
    }
};
```

