---
title: Leaf-Similar Trees
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 872> Leaf-Similar Trees

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
    void traverseTree(TreeNode* &root, vector<int> &vals){
        
        if (!root->left && !root->right){
            vals.push_back(root->val);
        }
        if (root->left) {traverseTree(root->left,vals);}
        if (root->right) {traverseTree(root->right,vals);}
    }
    
    bool leafSimilar(TreeNode* root1, TreeNode* root2) {
        vector<int> val1;
        vector<int> val2;
        traverseTree(root1,val1);
        traverseTree(root2,val2);
        if (val1.size() != val2.size()){
            return false;
        }
        for(int i = 0;i < val1.size(); ++i){
            if (val1[i] != val2[i]){
                return false;
            }
        }
        return true;
    }
};
```

