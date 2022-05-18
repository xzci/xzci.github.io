---
title: Build an Array With Stack Operations
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1441> Build an Array With Stack Operations

```c++
//method1
class Solution {
public:
    vector<string> buildArray(vector<int>& target, int n) {
        vector<string> ans;
        int begin = 1;
        for(auto i : target) {
            if(i == begin) {
                ans.push_back("Push");
                begin++;
            }
            else {
                while(++begin <= i) {
                    ans.push_back("Push");
                    ans.push_back("Pop");
                }
                ans.push_back("Push");
            }
            
        }
        return ans;
    }
};

// Method 2

class Solution {
public:
    vector<string> buildArray(vector<int>& target, int n) {
        vector<string> ans;
        
        int i = 0;
        
        for(int j = 0;j < target[target.size()-1]; j++){
            ans.push_back("Push");
            if(j + 1 == target[i]){
                i++;
            } else {
                ans.push_back("Pop");
            }
        }
        
        return ans;
    }
};
```

