---
title: Find the Highest Altitude
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1732> Find the Highest Altitude


```c++
//method 1
class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int result = 0;        
        int sum = 0;
        for(int i = 0; i < gain.size(); ++i) {
            sum += gain[i];
            result = max(result, sum);
        }
        
        return result;
    }
};

//method 2
class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int sum  = 0;
        int maxi = 0; 
        for(auto g : gain) {
            sum += g;
            if(sum > maxi) {
                maxi = sum;
            }
        }
        
        return maxi;
    }
};
```

