class Dep{
    constructor(){
        this.subscribers = new Set()
    }

    depend(effect){
        this.subscribers.add(effect)
    }

    notify(){
        this.subscribers.forEach((effect)=>{
            effect()
        })
    }

}

const dep = new Dep()


const info = {counter: 100}

function powerCounter(){
    console.log(info.counter * info.counter);
}
function doubleCounter(){
    console.log(info.counter * 2)
}

dep.depend(powerCounter)
dep.depend(doubleCounter)

info.counter++

dep.notify()




