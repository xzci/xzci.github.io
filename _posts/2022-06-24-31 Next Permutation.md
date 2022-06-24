---
title: Next Permutation
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 31> Next Permutation

```c++
// Method 1
class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int n = nums.size(), k, l;
    	for (k = n - 2; k >= 0; k--) {
            if (nums[k] < nums[k + 1]) {
                break;
            }
        }
    	if (k < 0) {
    	    reverse(nums.begin(), nums.end());
    	} else {
    	    for (l = n - 1; l > k; l--) {
                if (nums[l] > nums[k]) {
                    break;
                }
            }
    	    swap(nums[k], nums[l]);
    	    reverse(nums.begin() + k + 1, nums.end());
        }
    }
};

// Method 2
class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int n = nums.size() - 1;
        int infpt = 0;
        for(int i = n; i > 0; i--) {
            if(nums[i] > nums[i - 1]) {
                infpt = i;
                break;
            }
        }
        if(infpt == 0) {
            sort(nums.begin(), nums.end());
        }
        else {
            int toswap = nums[infpt - 1];
            int min = INT_MAX;
            for(int j = infpt; j <= n; j++) {
                if(nums[j] - toswap > 0 and nums[j] - toswap < min) {
                    int temp = nums[j];
                    nums[j] =  nums[infpt - 1];
                    nums[infpt - 1] = temp;
                }
            }
            sort(nums.begin()+infpt,nums.end());
        }
    }
};
```
