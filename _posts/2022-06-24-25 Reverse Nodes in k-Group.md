---
title: Reverse Nodes in k-Group
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-H 25> Reverse Nodes in k-Group

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
    ListNode* reverseKGroup(ListNode* head, int k) {
        if(head == nullptr || head->next == nullptr || k < 2)
            return head;
        ListNode temp(-1);
        temp.next = head;
        for(ListNode *prev = &temp, *end = head;
           end;
           end = prev->next) {
            for(int i = 1; i < k && end; i++)
                end = end->next;
            if(end == nullptr)
                break;

            prev = reverse(prev, prev->next, end);
        }
        return temp.next;
    }
private:
    ListNode *reverse(ListNode *prev, ListNode *begin, ListNode *end) {
        ListNode *end_next = end->next;
        for(ListNode *p = begin, *cur = p->next, *next = cur->next;
           cur != end_next;
           p = cur, cur = next, next = next ? next->next : nullptr) {
            cur->next = p;
        }
        begin->next = end_next;
        prev->next = end;
        return begin;
    }
};

// Method 2
class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {

       if(head == NULL)
           return head;

        ListNode* temp = head;
        for(int i = 0; i < k; i++) {
            if(temp == NULL)
                return head;
            temp = temp->next;
        }

       ListNode *prev = NULL;
       ListNode *curr = head;
       ListNode *next;
       int count = 0;

       while(curr != NULL && count < k) {
           next = curr->next;
           curr->next = prev;
           prev = curr;
           curr = next;
           count++;
       }
       if(next != NULL) {
           head->next = reverseKGroup(next,k);
       }
       return prev;
    }
};
```
