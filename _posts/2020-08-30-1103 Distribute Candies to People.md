---
title: Distribute Candies to People
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1103> Distribute Candies to People

```c++
class Solution {
public:
    vector<int> distributeCandies(int candies, int num_people) {
        if (num_people == 1) return vector{candies};
        vector<int> ans(num_people, 0);
        int k = 0;
        while (num_people * (k * num_people + num_people + 1) * (k + 1) / 2 <= candies) k++;
        k--;
        candies -= (num_people * (k * num_people + num_people + 1) * (k + 1) / 2);
        for (int i = 1; i <= num_people; ++i) {
            int p = i + (k + 1) * num_people;
            if (candies >= p) {
                ans[i - 1] = p + (k + 1) * i + k * (k + 1) / 2 * num_people;
                candies = candies - p;
            } else {
                ans[i - 1] = candies + (k + 1) * i + k * (k + 1) / 2 * num_people;
                candies = 0;
            }
        }
        return ans;
    }
};
```

