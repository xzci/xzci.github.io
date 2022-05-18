---
title: Duplicate Zeros
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1089> Duplicate Zeros

```c++
// Method 1
class Solution {
public:
    void duplicateZeros(vector<int>& arr) {
         for(int i=0; i < arr.size(); i++)
            if(arr[i] == 0) {
                for(int j=arr.size()-1; j > i; j--)
                    arr[j] = arr[j-1];
                i++;
            }
    }
};
// Method 2
class Solution {
public:
    void duplicateZeros(vector<int>& arr) {
        const int SIZE = arr.size();
        for (int i = 0; i < SIZE; i++) {
            if (arr[i] == 0) { 
                arr.insert(arr.begin()+i,0);
                arr.pop_back();
                i++;
            }
        }
    }
};
```

