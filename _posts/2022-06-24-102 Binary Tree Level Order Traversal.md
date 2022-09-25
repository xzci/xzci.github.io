---
title: Binary Tree Level Order Traversal
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-M 102> Binary Tree Level Order Traversal

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

private:
    void traverse(TreeNode *root, int level, vector<vector<int>> &result) {
        if(!root)
            return;
        if(level > result.size())
            result.push_back(vector<int>());

        result[level - 1].push_back(root->val);
        traverse(root->left, level + 1, result);
        traverse(root->right, level + 1, result);
    }
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> result;
        traverse(root, 1, result);
        return result;
    }
};

// Method 2
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> ans;
        if(root == NULL)
            return ans;
        queue<TreeNode*> q;
        q.push(root);
        vector<int>level;
        while(!q.empty()) {
            int s = q.size();
            while(s--) {
                TreeNode* node = q.front();
                q.pop();
                level.push_back(node->val);
                if(node->left)
                    q.push(node->left);
                if(node->right)
                    q.push(node->right);
            }
            ans.push_back(level);
            level.clear();
        }
        return ans;
    }
};
```
