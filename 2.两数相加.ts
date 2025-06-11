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
    const top: ListNode = {
        val: l1.val + l2.val,
        next: null,
    }
    let current = top;
    let carry = top.val > 9;
    let left = l1.next;
    let right = l2.next;
    while (left || right) {
        current.next = {
            val: (left?.val || 0) + (right?.val || 0),
            next: null,
        }
        if (carry) {
            current.val %= 10;
            current.next.val += 1;
        }
        left = left?.next || null;
        right = right?.next || null;
        current = current.next;
        carry = current.val > 9;
        if ((left === null || right === null) && left !== right) {
            current.next = left === null ? right : left;
            while (carry) {
                current.val %= 10;
                if (current.next !== null) {
                    current.next.val += 1;
                } else {
                    current.next = {
                        val: 1,
                        next: null,
                    }
                }
                current = current.next;
                carry = current.val > 9;
            }
            return top;
        }
    }
    if (carry) {
        current.val %= 10;
        current.next = {
            val: 1,
            next: null,
        }
    }
    return top;
}
// @lc code=end
