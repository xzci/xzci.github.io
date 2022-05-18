---
title: Second Minimum Node In a Binary Tree
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 671> Second Minimum Node In a Binary Tree

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
    int findSecondMinimumValue(TreeNode* root) {
        if(!root) return -1;
        
        unsigned a = UINT_MAX, b = UINT_MAX;
        queue<TreeNode*> q;
        q.push(root);
        
        while(!q.empty()) {
            if(q.front()->left)  q.push(q.front()->left);
            if(q.front()->right) q.push(q.front()->right);
            
            if(q.front()->val < a) {
                if(a < b) 
                    b = a;
                a = q.front()->val;
            }
            else if(q.front()->val != a and q.front()->val < b)
                b = q.front()->val;
            
            q.pop();
        }
        
        return b!=UINT_MAX?b:-1;
    }
};
```

