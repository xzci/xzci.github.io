---
title: Binary Tree Maximum Path Sum
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-H 124> Binary Tree Maximum Path Sum

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
// Method 1
class Solution {
public:
    int maxPathSum(TreeNode* root) {
        dfs(root);
        return max_sum;
    }
private:
    int max_sum = INT_MIN;
    int dfs(const TreeNode *root) {
        if(root == nullptr)
            return 0;
        int left = dfs(root->left);
        int right = dfs(root->right);

        int sum = root->val;
        if(left > 0)
            sum += left;
        if(right > 0)
            sum += right;
        max_sum = max(max_sum, sum);
        return max(right, left) > 0 ? max(right, left) + root->val : root->val;
    }
};

// Method 2
class Solution {
private:
    int max_sum = INT_MIN;
    int dfs(TreeNode* root) {
        if(!root)
            return 0;
        int l = max(dfs(root->left), 0);
        int r = max(dfs(root->right), 0);
        max_sum = max(max_sum, root->val + l + r);
        return root->val+max(l,r);
    }
public:
    int maxPathSum(TreeNode* root) {
        dfs(root);
        return max_sum;
    }
};
```
