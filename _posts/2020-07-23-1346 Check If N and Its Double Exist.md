---
title: Maximum Number of Balloons
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1346> Check If N and Its Double Exist

```c++
class Solution {
public:
      bool checkIfExist(vector<int>& arr) {
        int positive[9999] = {0};
        int negative[9999] = {0};
        for(int i = 0; i != arr.size(); i++) {
            if(arr[i] > 0)
                positive[arr[i]]++;
            else
                negative[-arr[i]]++;
        }
        
        
        for(int i = 1; i != 9999; i++) {
            if(positive[i] != 0) {
                if(positive[i * 2] != 0)
                    return true;
            }
        }
        for(int i = 1; i != 9999; i++) {
            if(negative[i] != 0)
                if(negative[i * 2] != 0)
                    return true;
        }
        if(negative[0] == 2)
            return true;
        return false;
    }
};


class Solution {
public:
      bool checkIfExist(vector<int>& arr) {
        unordered_multiset<int>st(arr.begin(),arr.end());
        int n = arr.size();
        for(int i = 0 ; i < n ; i++)
            if(st.find(arr[i]*2) != st.end())
            {
                if(arr[i] == 0)
                    if(st.count(0) == 1)
                        continue;
                return true;
            }
        return false;
    
    }
};
```

