---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-H> Median of Two Sorted Arrays 62ms 

```c++
class Solution {
public:
    double findMedianSortedArrays(vector<-int>& nums1, vector<-int>& nums2) {
        vector<-int> Temp;
        for (int i = 0; i != nums1.size(); i++) {
            Temp.push_back(nums1[i]);
        }
        for (int i = 0; i != nums2.size(); i++) {
            Temp.push_back(nums2[i]);
        }
        sort(Temp.begin(), Temp.end());
        if (Temp.size() % 2 == 0)
            return (Temp[Temp.size() / 2 - 1] + Temp[Temp.size() / 2]) / 2.0;
        else
            return  Temp[Temp.size() / 2];
    }
};
```

