---
title: Average of Levels in Binary Tree
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 637> Average of Levels in Binary Tree

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
    vector<double> averageOfLevels(TreeNode* root) {
        
        vector<double> avg;
        
        queue<TreeNode*> q;
        
        long long sum(0);
        int n(1), n_bup(1);
        
        if(root != nullptr)
            q.push(root);
        while(!q.empty()) {
            while(n--) {
                sum += q.front()->val;
                
                if(q.front()->left != nullptr)
                    q.push(q.front()->left);
                
                if(q.front()->right != nullptr)
                    q.push(q.front()->right);
                
                q.pop();
            }
            avg.push_back((double)sum/n_bup);
            sum = 0;
            n = n_bup = q.size();
        }
        
        return avg;
        
    }
};
```

