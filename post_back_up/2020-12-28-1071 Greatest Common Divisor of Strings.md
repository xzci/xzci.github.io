---
title: Greatest Common Divisor of Strings
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1071> Greatest Common Divisor of Strings

```c++
// Method 1
class Solution {
public:
   string gcdOfStrings(string s1, string s2) 
    {
	    return s1+s2==s2+s1 ? s1.substr(0, gcd(size(s1), size(s2))) : "";
    }
};

// Method 2
class Solution {
public:
string gcdOfStrings(string s1, string s2)  {
    if(size(s1)<size(s2)) swap(s1, s2);    
    return s1==s2 ? s1 : 
                        s1.substr(0, size(s2)) != s2 ? "" :
                        gcdOfStrings(s1.substr(size(s2)), s2);
    }
};
```

