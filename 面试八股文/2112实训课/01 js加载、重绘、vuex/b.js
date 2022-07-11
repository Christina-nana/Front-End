console.log('b');

Promise.resolve('bbbbb').then(res=>{
	console.log( res );
})

setTimeout(()=>{
	console.log('b.js')
})