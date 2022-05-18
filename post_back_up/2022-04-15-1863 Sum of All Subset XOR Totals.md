---
title: Sum of All Subset XOR Totals
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1863> Sum of All Subset XOR Totals


```c++
// Method 1
class Solution {
public:
    int subsetXORSum(vector<int>& nums) {
        int sum = 0;
		int mx = (1 << nums.size());
		for(int i = 0; i < mx; i++){
			int numxor = 0;
			for(int j = 0; j < nums.size(); j++){
				if(i & (1 << j))
					numxor ^= nums[j];
			}
        sum += numxor;
		}
		return sum;
    }
};

// method 2
class Solution {
private:
    void bt(vector<int>& nums, int& ans, int cur, int sz, int i) {
        if (i == sz) {
            ans += cur;
        } else {
            bt(nums, ans, cur, sz, i+1);
            bt(nums, ans, cur ^ nums[i], sz, i+1);
        }
    }
public:
    int subsetXORSum(vector<int>& nums) {
        int ans = 0;
        bt(nums, ans, 0, nums.size(), 0);
        return ans;
    }
};
```

