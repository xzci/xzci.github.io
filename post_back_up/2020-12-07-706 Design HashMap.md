---
title: Design HashMap
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 706> Design HashMap

```c++
class MyHashMap {
public:
    /** Initialize your data structure here. */
    
    int hash(int key){
        
        return (key%10000);
    }
    vector<vector<pair<int,int>>>map;
    MyHashMap() {
        
        map.resize(10000,{});
        
    }
    
    /** value will always be non-negative. */
    void put(int key, int value) {
        
        int hash_val = hash(key);
        for(int i = 0 ; i < map[hash_val].size() ; i++){
            if(map[hash_val][i].first == key){
                 map[hash_val][i].second = value;
                //cout<<"here";
                return;
            }
        }
        map[hash_val].push_back({key,value});
        
        return;
        
    }
    
    /** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
    int get(int key) {
       int hash_val = hash(key);
        for(auto a : map[hash_val]){
            if(a.first == key){
                return a.second;
            }
        }
        
        return -1;
    }
    
    /** Removes the mapping of the specified value key if this map contains a mapping for the key */
    void remove(int key) {
        
        int hash_val = hash(key);
        for(int i = 0 ; i < map[hash_val].size() ; i++){
            
            if(map[hash_val][i].first == key){
                map[hash_val].erase(map[hash_val].begin()+i);
                return;
            }
            
        }
        
        return;
        
    }
};
/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap* obj = new MyHashMap();
 * obj->put(key,value);
 * int param_2 = obj->get(key);
 * obj->remove(key);
 */
```

