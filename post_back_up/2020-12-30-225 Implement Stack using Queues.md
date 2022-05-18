---
title: Implement Stack using Queues
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 225> Implement Stack using Queues

```c++
class MyStack {
public:
    queue<int> q1;
    /** Initialize your data structure here. */
    MyStack() {
        
    }
    
    /** Push element x onto stack. */
    void push(int x) {
        queue<int> q2;
        int n = q1.size();
        for (int i=0; i<n; ++i) {
            q2.push(q1.front());
            q1.pop();
        }
        q1.push(x);
        for (int i=0; i<n; ++i) {
            q1.push(q2.front());
            q2.pop();
        }
    }
    
    /** Removes the element on top of the stack and returns that element. */
    int pop() {
        auto temp = q1.front();
        q1.pop();
        return temp;
    }
    
    /** Get the top element. */
    int top() {
        return q1.front();
    }
    
    /** Returns whether the stack is empty. */
    bool empty() {
        return q1.size()==0;
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */
```

