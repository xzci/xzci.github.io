---
title: Palindrome Linked List
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 234> Palindrome Linked List

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
    bool isPalindrome(ListNode* head) {
        stack<int> st;
        ListNode *p = head;
        while(head){
            st.push(head->val);
            head = head->next;
        }
        while(p){
            if(st.top() != p->val) 
                return false;
            st.pop();
            p = p->next;
        }
        return true;
    }
};

```

