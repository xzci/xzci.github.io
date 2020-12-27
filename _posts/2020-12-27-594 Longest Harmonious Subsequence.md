---
title: Longest Harmonious Subsequence
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 594> Longest Harmonious Subsequence

```c++
// Method 1
class Solution {
public:
    int findLHS(vector<int>& nums) {
       unordered_map<int,int> m;
		int ans = 0;
		for(auto x : nums){
			m[x]++;
			if(m.count(x+1))
				ans = max(ans, m[x] + m[x+1]);
			if(m.count(x-1))
				ans = max(ans, m[x] + m[x-1]);
		}
		return ans; 
    }
};

// Method 2
class Solution {
public:
    int findLHS(vector<int>& nums) {
        int res = 0;
        sort(nums.begin(), nums.end());
        for(int i = 1, start = 0, newStart = 0; i < nums.size(); i++) {
            if(nums[i] - nums[start] > 1) {
                start = newStart;
            }
            if(nums[i] != nums[i - 1]) {
                newStart = i;
            }
            if(nums[i] - nums[start] == 1) {
                res = max(res, i - start + 1);
            }
        }
        return res;
    }
};
```

