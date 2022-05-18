---
title: Implement Queue using Stacks
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 232> Implement Queue using Stacks

```c++
class MyQueue {

    void populate_s2(){
        while(!s1.empty()){
           s2.push(s1.top());
           s1.pop();
        }
    }
public:
    stack<int> s1;
    stack<int> s2;
   
    void push(int x) {
        s1.push(x);
    }
    
    int pop() {
        if(s2.empty())
           populate_s2();

        int x = s2.top();
        s2.pop();
        return x;
    }
    
    int peek() {
        if(s2.empty())
            populate_s2();
        return s2.top();
    }
    
    bool empty() {
        return s1.empty() && s2.empty();
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */
```

