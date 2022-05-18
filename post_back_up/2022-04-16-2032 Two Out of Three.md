---
title: Two Out of Three
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 2032> Two Out of Three


```c++
// Method 1
class Solution {
public:
    vector<int> twoOutOfThree(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3) {
        int check[101] = {0};
        for(auto i : nums1) {
            if(check[i] == 0)
                check[i] = 1;
        }
        for(auto i : nums2) {
            if(check[i] == 1)
                check[i] = -1;
            if(check[i] == 0)
                check[i] = 2;
        }
        for(auto i : nums3) {
            if(check[i] == 2)
                check[i] = -1;
            if(check[i] == 1)
                check[i] = -1;
        }
        vector<int> ans;
        for(int i = 0;i != 101; i++) {
            if(check[i] == -1)
                ans.push_back(i);
        }
        return ans;
    }
};

// Method 2
class Solution {
public:
    vector<int> twoOutOfThree(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3) {
        vector<int> count1(101);
        vector<int> count2(101);
        vector<int> count3(101);        
        for (int x: nums1) count1[x] = 1;
        for (int x: nums2) count2[x] = 1;
        for (int x: nums3) count3[x] = 1;
        vector<int> ans;
        for (int i = 1; i <= 100; ++i) {
            if (count1[i] + count2[i] + count3[i] >= 2) {
                ans.push_back(i);
            }
        }
        return ans;
    }
};
```

