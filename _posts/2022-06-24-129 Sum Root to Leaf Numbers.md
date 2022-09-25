---
title: Sum Root to Leaf Numbers
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-M 129> Sum Root to Leaf Numbers

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
    int sumNumbers(TreeNode* root) {
        return dfs(root, 0);
    }
private:
    int dfs(TreeNode *root, int sum) {
        if(root == nullptr)
            return 0;
        if(root->left == nullptr && root->right == nullptr)
            return sum * 10 + root->val;

        return dfs(root->left, sum * 10 + root->val) +
            dfs(root->right, sum * 10 + root->val);
    }
};
```
