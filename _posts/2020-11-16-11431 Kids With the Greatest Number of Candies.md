---
title: Kids With the Greatest Number of Candies
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1431> Kids With the Greatest Number of Candies

```c++
class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        vector<bool> ans;
        int max = *max_element(candies.begin(), candies.end());
        for(int i = 0; i != candies.size(); i++){
            if(candies[i] + extraCandies >= max){
                ans.push_back(true);
            }
            else{
                ans.push_back(false);
            }
        }
        return ans; 
    }
};
```

