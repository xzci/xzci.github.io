---
title: Maximum Product of Two Elements in an Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1464> Maximum Product of Two Elements in an Array

```c++
// Method 1
class Solution {
public:
    int maxProduct(vector<int>& nums) {
         if(nums.size() ==2){
            return (nums[0] - 1) * (nums[1] - 1);
        }
        int firstMax ;
        int secondMax ;
        if( nums[0] > nums[1]){
            secondMax = nums[0];
            firstMax = nums[1];
        }else{
            secondMax = nums[1];
            firstMax = nums[0];
        }
        
        int j =2;
        for( j; j< nums.size(); j++){
            if( nums[j] >= secondMax){
                firstMax = secondMax;
                secondMax = nums[j];
            }else if( nums[j] > firstMax){
                firstMax = nums[j];
            }
        }
        
        return (firstMax-1) * (secondMax-1);
    }
};
// Method 2
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        return (nums[nums.size()-1]-1)*(nums[nums.size()-2]-1);
    }
};
```

