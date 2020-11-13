---
title: Binary Tree Level Order Traversal II
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 107. Binary Tree Level Order Traversal II

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
    vector<vector<int>> levelOrderBottom(TreeNode* root) {
        
        if(root == NULL)
            return {};
        vector<vector<int>> res;
        queue<TreeNode*> q;
        q.push(root);
        while(!q.empty()) {
            int size = q.size();
            vector<int> current_res;
            for(int i = 0; i != size; i++) {
                TreeNode* currentNode = q.front();
                q.pop();
                current_res.push_back(currentNode->val);
                if(currentNode->left != NULL) {
                    q.push(currentNode->left);
                }
                if(currentNode->right != NULL) {
                     q.push(currentNode->right);
                }
            }
            res.push_back(current_res);
        }
        reverse(res.begin(), res.end());
        return res;
    }
};
```

