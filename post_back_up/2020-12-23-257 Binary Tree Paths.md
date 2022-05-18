---
title: Binary Tree Paths
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 257> Binary Tree Paths

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
    vector<string>v;
    void dfs(TreeNode* root,string s) {
        if(root!=NULL) {
            if(s == "")
                s += to_string(root->val);
            else
                s += "->" + to_string(root->val);
            if(root->left == NULL && root->right == NULL) {
                v.push_back(s);
                return;
            }
            dfs(root->left,s);
            dfs(root->right,s);
        }
    }
    vector<string> binaryTreePaths(TreeNode* root) {
        dfs(root,"");
        return v;
    }
};
```

