---
title: Intersection of Two Linked Lists
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 160> Intersection of Two Linked Lists

```c++
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */

// Method 1
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        unordered_set<ListNode*> s;
        while (headA) {
            s.insert(headA);
            headA = headA->next;
        }
        while (headB) {
            if (s.find(headB) != s.end())
                return headB;
            headB = headB->next;
        }
        return nullptr;
    }
};

// Method 2
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode *a = headA;
        ListNode *b = headB;
        while(a != b){
            a = a == NULL ? 
                headB : a->next;
            b = b == NULL ? 
                headA : b->next;
        }        
    return a;
    }
};
```

