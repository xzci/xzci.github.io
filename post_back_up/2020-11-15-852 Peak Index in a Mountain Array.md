---
title: Peak Index in a Mountain Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 852> Peak Index in a Mountain Array

```c++
// Method 1
class Solution {
public:
    int peakIndexInMountainArray(vector<int>& arr) {
        int ans = -1;
        int check = arr[0];
        for(auto i : arr)
            if(check > i)
                return ans;
            else {
                ans++;
                check = i;
            }
        return ans;
    }
};

// Method 2
class Solution {
public:
    int peakIndexInMountainArray(vector<int>& arr) {
        
        int l = 0, r = arr.size()-1, mid;
        while(l < r) {
            mid = (l+r)>>1;
            if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) return mid;
            if(arr[mid] < arr[mid+1]) {
                l = mid+1;
            }
            else {
                r = mid;
            }
        }
        return l;
    }
};
```

