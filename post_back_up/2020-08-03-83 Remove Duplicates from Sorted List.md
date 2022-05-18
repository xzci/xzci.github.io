---
title: Remove Duplicates from Sorted List
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 83> Remove Duplicates from Sorted List

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
    ListNode* deleteDuplicates(ListNode* head) {
       if(head==NULL)
            return NULL;
        ListNode *first=head,*last=head->next;
        while(last!=NULL)
        {
            if(first->val==last->val)
            {
                ListNode *temp=last;
                last=last->next;
                first->next=last;
            }
            else
            {
                first=first->next;
                last=last->next;
            }
        }
        return head;
    }
};
```

