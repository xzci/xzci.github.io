---
title: Count Prefixes of a Given String
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2255> Count Prefixes of a Given String

```c++
// Method 1
class Solution {
public:
    int countPrefixes(vector<string>& words, string s) {
        int ans = 0;
        for(auto word : words) {
            int i = 0;
            bool check = true;
            for(auto c : word) {
                if(check == true) {
                    if(s[i++] != c)
                        check = false;
                }
            }
            if(check == true) {
                ans++;
            }
        }
        return ans;
    }
};


// Method 2
class Solution {
public:
    int countPrefixes(vector<string>& words, string s)
    {
        int count=0;
        for(int i=0;i<words.size();i++)
        {
            size_t found=s.find(words[i]);
            if(found==0)
                count++;
        }
        return count;
    }
};
```
