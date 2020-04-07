---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# < -E> Palindrome Number   

```c++
bool isPalindrome(int x) {
        if(x<0|| (x!=0 &&x%10==0)) return false;
        int sum=0;
        while(x>sum) {
            sum = sum*10+x%10;
            x = x/10;
        }
        return (x==sum)||(x==sum/10);
}

bool isPalindrome(int x){
    if(x < 0)
        return false;
    else {
        long int m = 0;
        int n = x;
        while(n != 0) {
            m = m * 10 + n % 10;
            n /= 10;
        }
        if(x == m)
            return true;
    }
    return false;
}

```

