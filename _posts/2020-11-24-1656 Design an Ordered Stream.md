---
title: Design an Ordered Stream
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1656> Design an Ordered Stream

```c++
// Method 1
class OrderedStream {
public:
    vector<string> pos;
    int ptr;
    
    OrderedStream(int n) {
        pos.resize(n + 1, "");
        ptr = 1;
    }
    
    vector<string> insert(int id, string value) {
        //ptr+=1;
        pos[id] = value;
        vector<string> ans;
        int flag = 0;
        if(pos[ptr] != "") 
            flag = 1;
        if(flag == 1) {
            for(int i = ptr;i < pos.size();i++) {
                if(pos[i] != "") 
                    ans.push_back(pos[i]);
                else{
                    ptr = i;
                    break;
                }
            }
        }
        return ans;
    }
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * OrderedStream* obj = new OrderedStream(n);
 * vector<string> param_1 = obj->insert(id,value);
 */

 // Method 2
class OrderedStream {
public:
    vector<string> stream ; 
    int i = 0;
    OrderedStream(int n) {
        stream.resize(n); 
    }
    
    vector<string> insert(int id, string value) {
        vector<string> result;
        stream[id-1] = value; 
        while(i<stream.size() && stream[i]!="") 
        {
            result.push_back(stream[i]);
            i++;
        }
        return result;
    }
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * OrderedStream* obj = new OrderedStream(n);
 * vector<string> param_1 = obj->insert(id,value);
 */
```

