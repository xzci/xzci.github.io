---
title: Minimum Absolute Difference in BST
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 530> Minimum Absolute Difference in BST

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
    void find(TreeNode* root, int &mini, int &prev){
        if(!root)   return;
        find(root->left, mini, prev);
        if(prev != -1)  mini = min(abs(root->val - prev), mini);
        prev = root->val;
        find(root->right, mini, prev);
    }

    int getMinimumDifference(TreeNode* root){
        int mini = INT_MAX, prev = -1;
        find(root, mini, prev);
        return mini;
    }
};
```

