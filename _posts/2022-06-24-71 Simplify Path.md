---
title: Simplify Path
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 71> Simplify Path

```c++
// Method 1
class Solution {
public:
    string simplifyPath(string path) {
        vector<string> dirs;
        for(auto i = path.begin(); i != path.end();) {
            ++i;

            auto j = find(i, path.end(), '/');
            auto dir = string(i, j);

            if(!dir.empty() && dir != ".") {
                if(dir == "..") {
                    if(!dirs.empty())
                        dirs.pop_back();
                }
                else
                    dirs.push_back(dir);
            }
            i = j;
        }

        stringstream out;
        if(dirs.empty())
            out << "/";
        else
            for(auto dir : dirs)
                out << '/' << dir;

        return out.str();

    }
};

// Method 2
class Solution {
public:
    string simplifyPath(string path) {

        stack<string> st;
        string res;

        for(int i = 0;  i < path.size(); ++i) {
            if(path[i] == '/')
                continue;
            string temp;
            while(i < path.size() && path[i] != '/') {
                temp += path[i];
                ++i;
            }
            if(temp == ".")
                continue;
            else if(temp == "..") {
                if(!st.empty())
                    st.pop();
            }
            else
                st.push(temp);
        }

        while(!st.empty()) {
            res = "/" + st.top() + res;
            st.pop();
        }

        if(res.size() == 0)
            return "/";

        return res;
    }
};
```
