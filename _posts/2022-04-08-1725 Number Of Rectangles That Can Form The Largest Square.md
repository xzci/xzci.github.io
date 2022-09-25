---
title: Number Of Rectangles That Can Form The Largest Square
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1725> Number Of Rectangles That Can Form The Largest Square


```c++
//method 1
class Solution {
public:
    int countGoodRectangles(vector<vector<int>>& rectangles) {
        vector <int> v;
        int s = rectangles.size();
        for (int i = 0; i<s; i++){
            int t = min(rectangles[i][0],rectangles[i][1]);
                v.push_back(t);
        }
        sort(v.begin(), v.end());
        int res = 0;
        for (int i = 0; i < v.size(); i++) {
            if (v[i] == v[v.size() - 1]) 
                res++;
        }
        return res;
    }
};

//method 2
class Solution {
public:
    int countGoodRectangles(vector<vector<int>>& rectangles) {
        int mx = 0;
        int c = 0;
        for(auto i : rectangles){
            int l = min(i[0], i[1]);
            if(l == mx)
                c++;
            else if(l > mx) {
                mx = l;
                c = 1;
            }
        }
        return c;
    }
};
```

