---
title: Design HashSet
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 705> Design HashSet

```c++
class MyHashSet {
public:
    vector<bool> set;
    /** Initialize your data structure here. */
    MyHashSet() {
        set = vector<bool>(1000000,false);
    }
    
    void add(int key) {
        set[key] = true;
    }
    
    void remove(int key) {
        set[key] = false;
    }
    
    /** Returns true if this set contains the specified element */
    bool contains(int key) {
        return set[key] == true;
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet* obj = new MyHashSet();
 * obj->add(key);
 * obj->remove(key);
 * bool param_3 = obj->contains(key);
 */
```

