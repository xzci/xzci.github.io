---
title: Trapping Rain Water
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-H 42> Trapping Rain Water

```c++
// Method 1
class Solution {
public:
    int trap(vector<int>& height) {
        int max = 0;
        for(int i = 0; i != height.size(); i++) {
            if(height[i] > height[max])
                max = i;
        }

        int water = 0;
        int diff = 0;
        for(int i = 0; i < max; i++) {
            if(height[i] > diff)
                diff = height[i];
            else
                water += diff - height[i];
        }
        diff = 0;
        for(int i = height.size() - 1; i > max; i--) {
            if(height[i] > diff)
                diff = height[i];
            else
                water += diff - height[i];
        }
        return water;
    }
};

// Method 2
class Solution {
public:
    int trap(vector<int>& height) {
        stack<pair<int, int>> s;
        int water = 0;

        for(int i = 0; i != height.size(); i++) {
            int h = 0;
            while(!s.empty()) {
                int bar = s.top().first;
                int pos = s.top().second;

                water += (min(bar, height[i]) - h) * (i - pos - 1);
                h = bar;
                if(height[i] < bar)
                    break;
                else
                    s.pop();
            }
            s.push(make_pair(height[i], i));
        }
        return water;
    }
};

```
