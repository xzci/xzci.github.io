---
title: Crawler Log Folder
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1598> Crawler Log Folder

```c++
class Solution {
public:
    int minOperations(vector<string>& logs) {
       stack<int> s;
        for(int i = 0; i < logs.size(); i++){
            if(logs[i] == "./") continue;
            else if(logs[i] == "../"){
                if(!s.empty()) 
                    s.pop();
            }
            else 
                s.push(1);
        }
        return s.size();
    }
};

class Solution {
public:
    int minOperations(vector<string>& logs) {
        
        int n = logs.size();
        
        if(n == 0) 
            return n;
        int count = 0；
        int ans = 0;
                
        for(int i = n - 1; i >= 0; i--){
            if(logs[i] == "../") 
                count++;
            if(logs[i] != "./" && logs[i] != "../"){
                if(count>0) 
                    count--;
                else 
                    ans++;
            }
        }
        return ans;
    }
};
```

