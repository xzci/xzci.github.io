---
title: Remove Duplicates from Sorted List II
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-M 82> Remove Duplicates from Sorted List II

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
 // Method 1
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if(!head || !head->next)
            return head;
        ListNode *p = head->next;
        if(head->val == p->val) {
            while(p && head->val == p->val) {
                ListNode *temp = p;
                p = p->next;
                delete temp;
            }
            delete head;
            return deleteDuplicates(p);
        } else {
            head->next = deleteDuplicates(head->next);
            return head;
        }
    }
};

// Method 2
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode*prev = new ListNode(0);
        prev->next = head;
        ListNode*dummy = prev;
        ListNode*curr = head;
        while(curr != NULL) {
            if( curr->next != NULL &&curr->next->val == curr->val) {
                while( curr->next != NULL && curr->next->val == curr->val)
                    curr = curr->next;
                prev->next = curr->next;
            }
            else {
                prev = prev->next;
            }

            curr = curr->next;
        }
        return dummy->next;;
    }
};
```
