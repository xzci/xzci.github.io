---
title: Count and Say
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 38> Count and Say

```c++
// Method 1
class Solution {
public:

    string countans(string curr, int on, int n) {
        if (on == n)
            return curr;
        int l = curr.length();
        int count = 1;
        string retstr = "";
        for (int i = 1; i <= l; i++) {
            while (i < l && curr[i] == curr[i - 1]) {
                count++;
                i++;
            }
            retstr += 48 + count;
            retstr += curr[i - 1];
            count = 1;
        }
        return countans(retstr, on + 1, n);
    }

    string countAndSay(int n) {
        return countans ("1", 1, n);
    }
};

// Method 2
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
				while (i < ans.size() && ans[i] == curr) {
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
