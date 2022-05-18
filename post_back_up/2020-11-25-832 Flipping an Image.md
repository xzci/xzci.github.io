---
title: Flipping an Image
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 832> Flipping an Image

```c++
// Method 1
class Solution {
public:
    vector<vector<int>> flipAndInvertImage(vector<vector<int>>& A) {
        if(A.empty()){
            return A;
        }
        for (auto& row : A) 
            reverse(row.begin(), row.end());
        for (auto& row : A) 
            for (int& i: row) i ^= 1;
        return A;
    }
};

// Method 2
class Solution {
public:
    vector<vector<int>> flipAndInvertImage(vector<vector<int>>& A) {
        if(A.empty()){
            return A;
        }
        for(auto& row : A){
            reverse(begin(row), end(row));
        for_each(row.begin(), row.end(), [](int& item){ item ^= 1; });
        }
        return A;
    }
};
```

