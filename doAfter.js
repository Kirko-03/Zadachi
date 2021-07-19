//промисификация
let doAfter = (millisecond) => new Promise((res)=>{
    setTimeout(()=>{
        res(millisecond)
    },millisecond*1000)
})

let prom3 = doAfter(3)
prom3.then(()=>console.log('я зарезолвился ') )
prom3.then(()=>console.log('я тоже ') )
prom3.then(()=>console.log('и я ') )
