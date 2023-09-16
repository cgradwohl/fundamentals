import { Queue } from './data-structures/queue';
// 1. FIFO
// const q = new Queue(true);
// q.push('a') // ['a']
// q.push('b') //['a', 'b']

// console.log(q.pop()) // a
// console.log(q.pop()) // b

// 2. LIFO
// const q2 = new Queue(false)
// q2.push('a')
// q2.push('b')

// console.log(q2.pop()) // a
// console.log(q2.pop()) // b

// 3. Priority Queue
// const q = new Queue(false)
// q.push('a', 1)
// q.push('b', 100)
// q.push('c', 10)
// q.push('d', 100)

// // b,d,c,a

// console.log(q.pop())
// console.log(q.pop())
// console.log(q.pop())
// console.log(q.pop())


// TODO: add delay ability like sqs
const q = new Queue(true)
q.push('a', delay = 10)
q.push('b', delay = 0)

q.pop() // b
// ...wait 10 seconds
q.pop() // a
