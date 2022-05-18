---
title: Sum of Root To Leaf Binary Numbers
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1022> Sum of Root To Leaf Binary Numbers

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
    int ans;
    void sumRootToLeafUtils(TreeNode* root, int path) {
        if(root == NULL)
            return;
        
        path = path << 1 | root->val;
        
        if(root->left == NULL && root->right == NULL) {
            ans += path;
            return;
        }
        sumRootToLeafUtils(root->left,path);
        sumRootToLeafUtils(root->right, path);
        
    }
    int sumRootToLeaf(TreeNode* root) {
        ans = 0;
        sumRootToLeafUtils(root, 0);
        return ans;
    }
};
```

