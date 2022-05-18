---
title: Two Sum IV - Input is a BST
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 653> Two Sum IV - Input is a BST

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
 // Method 1.1
class Solution {  
public:
    vector<int> v;
     bool findNums(TreeNode* node, int k) {
            if(!node) 
                return false;
            if(findNums(node->left, k)) 
                return true;
            if(binary_search(v.begin(),v.end(),k-node->val)) 
                return true;
            v.push_back(node->val);
            return findNums(node->right, k);
    };
    bool findTarget(TreeNode* root, int k) {
        return findNums(root, k);
    }
};

// Method 1.2
class Solution {
public:
    bool findTarget(TreeNode* root, int k) {
        vector<int> v;
        function<bool(TreeNode*)> findNums = [&](TreeNode* node){
            if(!node) return false;
            if(findNums(node->left)) return true;
            if(binary_search(v.begin(),v.end(),k-node->val)) return true;
            v.push_back(node->val);
            return findNums(node->right);
        };
        return findNums(root);
    }
};

// Method 2
class Solution {
public:
    void inorder(TreeNode *root,vector<int> &arr) {
        if(root == NULL)
            return ;
        inorder(root->left, arr);
        arr.push_back(root->val);
        inorder(root->right, arr);
    }
    bool findTarget(TreeNode* root, int k) {
        vector<int> arr;
        inorder(root,arr);
        int i = 0,j = arr.size() - 1;
        while(i < j) {
            if(arr[i] + arr[j] == k)
                return true;
            if(arr[i] + arr[j] < k)
                i++;
            else
                j--;
        }
        return false;
    }
};
```

