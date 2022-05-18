---
title: Average Salary Excluding the Minimum and Maximum Salary
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1491> Average Salary Excluding the Minimum and Maximum Salary

```c++
class Solution {
public:
    double average(vector<int>& salary) {
       int min = INT_MAX,  max = 0,  sum = 0;
        for(int i=0;i<salary.size();i++)
        {
           sum += salary[i];
           if(salary[i] > max)
               max = salary[i];
           if(salary[i] < min)
               min= salary[i];
        }
        sum -= min + max;      
        double avg = (double)sum/(salary.size()-2);
        return avg; 
    }
};
```

