---
title: N-ary Tree Preorder Traversal
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 589> N-ary Tree Preorder Traversal

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
    vector<int> preorder(Node* root) {
        vector<int> result;
        if(root == NULL)
        {
            return result;
        }
        stack<Node*> nodeStack;
        nodeStack.push(root);
        while(!nodeStack.empty())
        {
            Node* next = nodeStack.top();
            nodeStack.pop();
            result.push_back(next->val);
            for(int i = next->children.size()-1;  i >= 0; --i)
            {
                if(next->children[i] != NULL)
                {
                    nodeStack.push(next->children[i]);
                }
            }            
        }
        return result;
    }
};
```

