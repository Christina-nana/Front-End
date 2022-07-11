console.log('a');

Promise.resolve('aaaaaa').then(res => {
    console.log(res);
})

setTimeout(() => {
    console.log('a.js')
})