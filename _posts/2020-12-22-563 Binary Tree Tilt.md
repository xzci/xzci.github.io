---
title: Binary Tree Tilt
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 563> Binary Tree Tilt

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
    int helper(TreeNode* root, int &fsum){
		if(root == NULL) return 0;
		int a1 = root->val;
		int a2 = helper(root->left,fsum);
		int a3 = helper(root->right,fsum);
		fsum += abs(a2 - a3);
		return (a1 + a2 + a3);
    }
	int findTilt(TreeNode* root) {   
		int fsum = 0;
		helper(root, fsum);
		return fsum;
    }
};
```

