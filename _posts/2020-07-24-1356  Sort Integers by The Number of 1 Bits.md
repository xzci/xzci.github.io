---
title: Maximum Number of Balloons
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1356> Sort Integers by The Number of 1 Bits

```c++
class Solution {
public:
  static bool cmp(int a,int b)
    {
        bitset<32> c1(a);
        bitset<32> c2(b);
        int p,q;
        p=c1.count();
        q=c2.count();
        if(p==q)
            return a<b;
        else return p<q;
    }
    vector<int> sortByBits(vector<int>& v) {
        sort(v.begin(),v.end(),cmp);
        return v;
        
    }
};
```

