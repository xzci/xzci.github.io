---
title: Find Greatest Common Divisor of Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1979> Find Greatest Common Divisor of Array


```c++
//method 1
class Solution {
public:
    int findGCD(vector<int>& nums) {
        int max = *max_element(nums.begin(), nums.end());
        int min = *min_element(nums.begin(), nums.end());
        return gcd(max,min);
    }
};í

// Method 2
class Solution {
public:
    int gcd(int a, int b){
        if(b == 0){
            return a;
        }else{
            return gcd(b, a%b);
        }
    }
    int findGCD(vector<int>& nums) {
        int mn=INT_MAX, mx=INT_MIN;
        for(int i=0; i<nums.size(); i++){
            mn = mn < nums[i]? mn : nums[i];
            mx = mx > nums[i]? mx : nums[i];
        }
        return gcd(mx, mn);
    }
};
```

