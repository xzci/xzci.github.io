---
title: Populating Next Right Pointers in Each Node
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 116> Populating Next Right Pointers in Each Node

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
        connect(root, nullptr);
        return root;
    }
private:
    void connect(Node *root, Node *sibling) {
        if(root == nullptr)
            return;
        else
            root->next = sibling;
        connect(root->left, root->right);
        if(sibling)
            connect(root->right, sibling->left);
        else
            connect(root->right, nullptr);

    }
};
```
