---
title: Minimum Number of Moves to Seat Everyone
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2037> Minimum Number of Moves to Seat Everyone

```c++
class Solution {
public:
    int minMovesToSeat(vector<int>& seats, vector<int>& students) {
        sort(seats.begin(),seats.end());
        sort(students.begin(),students.end());
        int ans = 0;
        for(int i = 0; i < seats.size(); i++) {
            ans = ans + abs(seats[i] - students[i]);
        }
        return ans;
    }
};
```
