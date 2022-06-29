---
title: Populating Next Right Pointers in Each Node II
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 117> Populating Next Right Pointers in Each Node II

```c++
/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;

    Node() : val(0), left(NULL), right(NULL), next(NULL) {}

    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/

class Solution {
public:
    Node* connect(Node* root) {
        if(root == NULL)
            return root;
        queue<Node*> q;
        q.push(root);
        while(q.empty() == false) {
            int cnt = q.size();
            for(int i = 0; i < cnt; i++) {
                Node* curr = q.front();
                q.pop();
                if(cnt - 1 == i)
                    curr->next = NULL;
                else if(cnt - 1 != i)
                    curr->next = q.front();
                if(curr->left)
                    q.push(curr->left);
                if(curr->right)
                    q.push(curr->right);
            }
        }
        return root;
    }
};
```
