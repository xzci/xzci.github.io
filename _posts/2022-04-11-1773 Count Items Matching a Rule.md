---
title: Count Items Matching a Rule
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1773> Count Items Matching a Rule


```c++
//method 1
class Solution {
public:
    int countMatches(vector<vector<string>>& items, string ruleKey, string ruleValue) {
        map<string, int> ruleKeys{{"type", 0}, {"color", 1}, {"name", 2}};
        int count{0};
        
        for(vector<string> &item : items)
            if(item[ruleKeys[ruleKey]] == ruleValue)
                count++;
        
        return count;
    }
};

//method 2
class Solution {
public:
    int countMatches(vector<vector<string>>& items, string ruleKey, string ruleValue) {
        int ct = 0;
        int j;
        if(ruleKey == "type") 
                j = 0;
        else if(ruleKey == "color") 
            j = 1;
        else j = 2;

        for(int i = 0;i < items.size(); i++){
            if(items[i][j] == ruleValue)
                    ct++;
		}
        return ct;
    }
};
```

