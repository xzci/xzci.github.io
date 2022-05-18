---
title: Merge Two Sorted Lists
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 21> Merge Two Sorted Lists

```c++
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        if(l1==NULL || l2==NULL)
            return l1>l2 ? l1 : l2;
        
        ListNode* head=(l1->val<l2->val) ? l1 : l2;
        head->next=mergeTwoLists(head==l1 ? l1->next : l1, head==l2 ? l2->next :l2);
        return head;
    }
};

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        if(l1 == NULL)
            return l2;
        else if(l2 == NULL)
            return l1;
        
        ListNode* h = NULL;
        
        if(l1->val <= l2->val) {
            h = l1;
            h->next = mergeTwoLists(l1->next,l2);
        }
        else {
            h = l2;
            h->next = mergeTwoLists(l1,l2->next);
        }
        return h; 
    }
};
```

