---
title: Add to Array-Form of Integer
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 989> Add to Array-Form of Integer

```c++
// Method 1
class Solution {
public:
    vector<int> addToArrayForm(vector<int>& A, int K) {
        int pos = A.size()-1;
        int carry = 0;
        std::vector<int> ret;
        while(K > 0 || pos >= 0 || carry > 0){
            int kdigit = K % 10;
            K = K / 10;
            int sum = kdigit + carry;
            if(pos >= 0) 
                sum += A[pos];
            
            if(sum > 9){
                carry = sum / 10;
                sum = sum%10;
            }else{
                carry = 0;
            }
            ret.push_back(sum);
            --pos;
        }
        reverse(ret.begin(),ret.end());
        return ret;
    }
};

// Method 2
class Solution {
public:
    vector<int> addToArrayForm(vector<int>& A, int K) {
        int len_K = 0;
        int len = A.size() - 1;
        int carry_on = 0;
        
        while(K || carry_on){
            int index = len - len_K; 
            
            if(index < 0){
                int tmp = K % 10 + carry_on;
                if(tmp >= 10){
                    carry_on = 1;
                    tmp = tmp % 10;
                }else{
                    carry_on = 0;
                }
                A.insert(A.begin(), tmp);
                K /= 10;
                continue;
            }
            
            int tmp = A[index] + (K % 10) + carry_on;
            if(tmp >= 10){
                A[index] = tmp%10;
                carry_on = 1;
                
            }else{
                A[index] = tmp;
                carry_on = 0;
            }
            
            K /= 10;
            len_K++;
        }
        
        return A;
    }
};
```

