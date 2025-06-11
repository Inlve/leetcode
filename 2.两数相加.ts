/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
interface ListNode {
    val: number;
    next: null | ListNode;
}

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    if (l1 === null || l2 === null) return null;
    if (l1.val === 0) return l2;
    if (l2.val === 0) return l1;
    let top: ListNode | null = null;
    let curry = false;
    let current: ListNode | null = null;
    let left: ListNode | null = l1;
    let right:ListNode | null = l2;
    while (left || right) {
        const sum = (left?.val || 0) + (right?.val || 0);
        if (current) {
            current.next = {
                val: sum,
                next: null,
            };
            current = current.next;
        } else {
            current = {
                val: sum,
                next: null,
            };
            top = current;
        }
        if (curry) {
            current.val += 1;
        }
        curry = current.val > 9;
        current.val %= 10;
        if (left) {
            left = left.next;
        }
        if (right) {
            right = right.next;
        }
        if (left === null && right === null) {
            if (curry) {
                current.next = {
                    val: 1,
                    next: null
                }
            }
            break;
        }
    }
    return top;
}
// @lc code=end

