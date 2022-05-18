---
title: Sum of Unique Elements
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1748> Sum of Unique Elements


```c++
//method 1
class Solution {
public:
    int sumOfUnique(vector<int>& nums) {
        int sum = 0;
        for(auto i : nums){
            if(count(nums.begin(),nums.end(),i)==1) {
                sum += i;
            }
        }
    return sum;
    }
};

//method 2
class Solution {
public:
    int sumOfUnique(vector<int>& nums) {
        unordered_map<int,int> mp;
        for(auto i : nums){
            mp[i]++;
        }
        int count = 0;
        for(auto i : mp){
            if(i.second < 2)
                count += i.first;
        }
        return count;
    }
};
```

