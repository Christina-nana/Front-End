// function excute() {
//   return new Promise(async (resolve, reject) => {
//     console.log('1');
//     const result = await Promise.resolve('3')
//     console.log(result)
//   })
// }
// const promise = excute()
// console.log('2');

Promise.resolve().then(() => { // 微任务
  console.log('Promise1'); // 同步
  setTimeout(() => { // 宏任务
    console.log('setTimeout2');
  }, 0)
})

setTimeout(() => { // 宏任务
  console.log('setTimeout1');// 同步
  Promise.resolve().then(() => { // 微任务
    console.log('Promise2');
  })
}, 0)