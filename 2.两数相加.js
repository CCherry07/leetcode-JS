/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  //l1 l2 是两个链表传入的第一个节点
    let dummy = new ListNode();
    let curr = dummy;
    let current = 0; //l1 l2 相加的值是否大于10
    //遍历l1的值
    while (l1 !== null || l2 !== null) {
      let sum = 0; // 拿到两条的链表对应的节点的值的和
      if (l1 !== null) {
        sum += l1.val;
        l1 = l1.next;
      }
      if (l2 !== null) {
        sum += l2.val;
        l2 = l2.next;
      }
      sum += current;
      curr.next = new ListNode(sum % 10); //大于10将取余
      current = Math.floor(sum / 10); // 0 or 1
      curr = curr.next; //将当前节点，向下挪一位
    }
    if (current > 0) {
      curr.next = new ListNode(current);
    }
    return dummy.next;
  };
