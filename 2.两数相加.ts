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
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    if (l1 === null || l2 === null) return null;
    const top = new ListNode(0);
    let current: ListNode | null = top, carry = 0;
    while (current !== null) {
        const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        current.val = sum % 10;
        carry = Math.floor(sum / 10);
        l1 = l1?.next || null;
        l2 = l2?.next || null;
        if (carry === 0) {
            if (l1 === null) {
                current.next = l2;
                return top;
            }
            if (l2 === null) {
                current.next = l1;
                return top;
            }
        }
        if (l1 || l2 || carry) {
            current.next = new ListNode(0);
        }
        current = current.next;
    }
    return top;
}
// @lc code=end
