---
title: Make Two Arrays Equal by Reversing Sub-arrays
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1460> Make Two Arrays Equal by Reversing Sub-arrays

```c++
// Method 1
class Solution {
public:
    bool canBeEqual(vector<int>& target, vector<int>& arr) {
        sort(target.begin(),target.end());
        sort(arr.begin(),arr.end());
        return arr==target;
    }
};
// Method 2
class Solution {
public:
    bool canBeEqual(vector<int>& target, vector<int>& arr) {
        vector<int> cnt(1001, 0);
        for (int i = 0; i < target.size(); ++i) {
            ++cnt[target[i]];
        }
        for (int i = 0; i < arr.size(); ++i) {
            if (--cnt[arr[i]] < 0) {
                return false;
            }
        }
        return true;
    }
};
```

