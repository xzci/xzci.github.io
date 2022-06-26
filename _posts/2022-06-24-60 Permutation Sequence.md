---
title: Permutation Sequence
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 60> Permutation Sequence

```c++
// Method 1
class Solution {
public:
    string getPermutation(int n, int k) {
        string s(n, '0');
        string ans;
        for(int i = 0; i < n; i++) {
            s[i] += i + 1;
        }
        return kthPermutation(s, k);
    }

private:
    int factorial(int n) {
        int result = 1;
        for(int i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    string kthPermutation(string seq, int k) {
        const int n = seq.size();
        string ans;

        int base = factorial(n - 1);
        --k;

        for(int i = n - 1; i > 0; k %= base, base /= i, i--) {
            auto index = next(seq.begin(), k / base);
            ans.push_back(*index);
            seq.erase(index);
        }
        ans.push_back(seq[0]);
        return ans;
    }
};

// Method 2
class Solution {
public:
    string getPermutation(int n, int k) {

        int fact =  1;
        vector<int> nums;
        for(int i = 1; i < n; i++) {
            fact = fact * i;
            nums.push_back(i);
        }

        nums.push_back(n);
        string result = "";
        k = k - 1;
        while(true) {
            result.push_back(nums[k / fact] + '0');
            nums.erase(nums.begin() + k / fact);

            if(nums.size() == 0)
                break;
            k = k % fact;
            fact = fact / nums.size();
        }

        return result;
    }
};
```
