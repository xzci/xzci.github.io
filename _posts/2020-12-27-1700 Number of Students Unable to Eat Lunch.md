---
title: Number of Students Unable to Eat Lunch
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1700> Number of Students Unable to Eat Lunch

```c++
// Method 1
class Solution {
public:
    int countStudents(vector<int>& A, vector<int>& B) {
        int count[] = {0, 0}, n = A.size(), k;
        for (int a : A)
            count[a]++;
        for (k = 0; k < n && count[B[k]] > 0; ++k)
            count[B[k]]--;
        return n - k;
    }
};

// Method 2
class Solution {
public:
    int countStudents(vector<int>& students, vector<int>& sandwiches) {
        queue<int> Q;
        int c[2] = {0, 0};
        for (int s : students) {
            Q.push(s);
            c[s] += 1;
        }
        
        for (int s : sandwiches) {
            if (c[s] == 0) break;
            while (Q.front() != s) {
                Q.pop();
                Q.push(1 - s);
            }
            c[s]-- ;
        }
        return c[0] + c[1];
    }
};
```

