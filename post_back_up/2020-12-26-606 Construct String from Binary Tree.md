---
title: Construct String from Binary Tree
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 606> Construct String from Binary Tree

```c++
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    string tree2str(TreeNode* t) {
        if (!t) return "";
        if (!t->left and !t->right) return to_string(t->val);
        string s = to_string(t->val) + '(' + tree2str(t->left) + ')';
        if (t->right)
            s = s + '(' + tree2str(t->right) + ')';
        return s;
    }
};
```

