---
title: N-ary Tree Postorder Traversal
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 590> N-ary Tree Postorder Traversal

```c++
/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
public:
    vector<int> v;
    void get_order(Node* root)
    {
        for(int i=0;i<root->children.size();i++)
        {
            get_order(root->children[i]);
        }
        v.push_back(root->val);
    
    }
    vector<int> postorder(Node* root) {
        if(root == NULL)
        {
            return {};
        }
        get_order(root);
        return v;
    }
};
```

