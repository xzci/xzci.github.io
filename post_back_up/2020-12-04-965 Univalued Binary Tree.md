---
title: Univalued Binary Tree
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 965> Univalued Binary Tree

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
    bool isUnivalTree(TreeNode* root) {
        queue <TreeNode *> q ;
        q.push(root) ;
        
        while(!q.empty())
        {
            TreeNode *x = q.front() ;
            q.pop() ;
            
            if(x->left)
            {
                q.push(x->left) ;
                if(x->val != x->left->val)
                    return false ;
            }
            if(x->right)
            {
                q.push(x->right) ;
                if(x->val != x->right->val)
                    return false ;
            }
        }
        return true ;
    }
};

// Method 2
class Solution {
public:
    bool isUnivalTree(TreeNode* root) {
        if(!root) return true;
        int val = root->val;
        return dfs(root, val);
    }
private:
    bool dfs(TreeNode* root, int& val){
        if(!root) return true;
        if(root->val != val) return false;
        return dfs(root->left, val) && dfs(root->right, val);
    }
};
```

