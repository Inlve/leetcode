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
  let left: ListNode | null | undefined = l1;
  let right: ListNode | null | undefined = l2;
  let top: ListNode | null = null;
  let carry = 0;
  let tail: ListNode | null = null;
  while (left || right) {
    const sum = (left?.val || 0) + (right?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    const node = {
      val: sum % 10,
      next: null,
    };
    if (tail) tail.next = node;
    else top = node;
    tail = node;
    left = left?.next;
    right = right?.next;
  }
  if (carry) {
    tail!.next = {
      val: carry,
      next: null,
    };
  }
  return top;
}
