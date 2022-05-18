---
title: Minimum Time to Type Word Using Special Typewriter
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1974> Minimum Time to Type Word Using Special Typewriter


```c++
//method 1
class Solution {
public:
    int minTimeToType(const string& s) {
        int steps = 0;
        
        char cur = 'a';
        for (const char& c : s) {
            int step = minStep(cur, c);
            cur = c;
            
            steps += (step + 1);
        }
        
        return steps;
    }
private:
    int minStep(char a, char b) {
        if (a > b)
            std::swap(a, b);
        
        return std::min(b - a, a - 'a' + 'z' - b + 1);
    }
};

// Method 2
class Solution {
public:
    int minTimeToType(string word) {
        int count = word.size();
        int point = 'a';
        for(char c: word)
        {
            count += min(abs(c - point), 26 - abs(c - point));
            point = c;
        }
        return count;
    }
};
```

