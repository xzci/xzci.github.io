---
title: Find Mode in Binary Search Tree
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 501> Find Mode in Binary Search Tree

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
    unordered_map<int, int> mp;
    int max = -1;
public:
    void preorder(TreeNode *root){
        if(!root)
            return;
        int val = ++mp[root->val];
        if(val > max)
            max = val;
        preorder(root->left);
        preorder(root->right);
    }
    
    vector<int> findMode(TreeNode* root) {
        vector<int> ans;
        preorder(root);
        for(auto it : mp){
            if(it.second == max)
                ans.push_back(it.first);
        }
        return ans;
    }
};

// Method 2
class Solution {
public:
    int maxFreq = 0, currFreq = 0, precursor = INT_MIN;
    vector<int> res;

    vector<int> findMode(TreeNode *root) {
        inorderTraversal(root);
        return res;
    }

    void inorderTraversal(TreeNode *root) {
        if (root == NULL) return; 
        inorderTraversal(root->left); 
        if (precursor == root->val) currFreq++;
        else currFreq = 1;
        if (currFreq > maxFreq) {
            res.clear();
            maxFreq = currFreq;
            res.push_back(root->val);
        }
        else if (currFreq == maxFreq) {
            res.push_back(root->val);
        }
        precursor = root->val; 
        inorderTraversal(root->right); 
    }
};
```

