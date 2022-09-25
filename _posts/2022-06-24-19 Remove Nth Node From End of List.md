---
title: Remove Nth Node From End of List
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 19> Remove Nth Node From End of List

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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode temp{-1, head};
        ListNode *p = &temp;
        ListNode *q = &temp;

        for(int i = 0; i < n; i++)
            q = q->next;

        while(q->next) {
            p = p->next;
            q = q->next;
        }

        ListNode *check = p->next;
        p->next = p->next->next;
        delete check;

        return temp.next;
    }
};

```
