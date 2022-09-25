---
title: Largest Rectangle in Histogram
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-H 84> Largest Rectangle in Histogram

```c++
class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> s;
        heights.push_back(0);
        int result = 0;
        for(int i = 0; i != heights.size(); ) {
            if(s.empty() || heights[i] > heights[s.top()])
                s.push(i++);
            else {
                int temp = s.top();
                s.pop();
                result = max(result, heights[temp] * (s.empty() ? i : i - s.top() - 1));
            }
        }
        return result;
    }
};
```
