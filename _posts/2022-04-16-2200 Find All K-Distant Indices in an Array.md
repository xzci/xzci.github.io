---
title: Find All K-Distant Indices in an Array
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2200> Find All K-Distant Indices in an Array

```c++
// Method 1
class Solution {
public:
    vector<int> findKDistantIndices(vector<int>& nums, int key, int k) {
        int n=nums.size();
        vector<int> v;

        for(int i = 0; i < n; i++) {
            if(nums[i] == key) {
                int start = max(0, i - k);
                int end = min(n - 1, i + k);

                if(v.size() != 0)
                    start = max(v[v.size() - 1] + 1, start);

                for(int j = start; j <= end; j++) {
                    v.push_back(j);
                }
            }
        }
        return v;
    }
};

// Method 2
class Solution {
public:
    vector<int> findKDistantIndices(vector<int>& nums, int key, int k) {
        set<int> st;

        for(int i = 0; i < nums.size(); i++){
            if(nums[i] == key){
                for(int j = i - k; j <= i + k; j++){
                    if(j >=0 && j < nums.size())
                        st.insert(j);
                }
            }
        }

        return vector<int>(st.begin(), st.end());
    }
};
```
