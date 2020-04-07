---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Non-decreasing Array

```c++
class Solution {
public:
	bool checkPossibility(vector<int>& nums) {
		int cnt=0;
		for(int i=1;i<nums.size();i++){
			if(nums[i]<nums[i-1]){
				cnt++;
				if(i-2 >= 0 && nums[i-2]>nums[i]){
					nums[i]=nums[i-1];
				}
				if(cnt==2) break;
			}
		}
		return cnt<2;

	}
};
```

