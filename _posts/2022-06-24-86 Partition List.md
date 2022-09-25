---
title: Partition List
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-M 86> Partition List

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
    ListNode* partition(ListNode* head, int x) {
        ListNode left_temp(-1);
        ListNode right_temp(-1);

        ListNode* left_cur = &left_temp;
        ListNode* right_cur = &right_temp;

        for(ListNode *cur = head; cur; cur = cur->next) {
            if(cur->val < x) {
                left_cur->next = cur;
                left_cur = cur;
            } else {
                right_cur->next = cur;
                right_cur = cur;
            }
        }
        left_cur->next = right_temp.next;
        right_cur->next = nullptr;

        return left_temp.next;
    }
};

// Method 2
class Solution {
public:
    ListNode* partition(ListNode* head, int x) {
        queue<int> q1;
        queue<int> q2;
        ListNode* curr = head;
        int count = 0;

        while(curr != NULL) {
            if(curr->val < x)
                q1.push(curr->val);
            else
                q2.push(curr->val);
            curr = curr->next;
            count++;
        }
        curr=head;
        while(!q1.empty()) {
            curr->val = q1.front();
            q1.pop();
            curr = curr->next;
        }

        while(!q2.empty()) {
            curr->val = q2.front();
            q2.pop();
            curr = curr->next;
        }
        return head;
    }
};
```
