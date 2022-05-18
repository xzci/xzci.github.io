---
title: Count and Say
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 38> Count and Say

```c++
class Solution {
public:
    string countAndSay(int n) {
        if (n == 0)
            return "";
        else if(n == 1)
            return "1";
        else if (n == 2)
            return "11";
        string ans = "11";
        int counter = 0;
        
        while(n >= 3) {
            string temp;
            
            for(int i = 0; i != ans.size();) {
                char curr = ans[i];
				while (i < ans.size() && ans[i] == curr)
				{
					i++;
					counter++;
				}
				temp.append(to_string(counter) + curr);
				counter = 0;
			}
			ans = temp;
            
            n--;    
        }  
        return ans;   
    }
};
```

