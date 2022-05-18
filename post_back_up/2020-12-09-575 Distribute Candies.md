---
title: Goal Parser Interpretation
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1678> Goal Parser Interpretation

```c++
// Method 1
class Solution {
public:
    int distributeCandies(vector<int>& candyType) {
        set<int> check;
        int max = candyType.size() / 2;
        for(auto i : candyType) {
            check.insert(i);
            if(check.size() > max)
                return max;
        }
        return check.size();
    }
};

// Method 2
class Solution {
public:
    int distributeCandies(vector<int>& candies) {
         bitset<200001> hash;
        for (int i: candies)
           hash.set(i + 100000);
        return min(hash.count(), candies.size() / 2); 
    }
};
```

