const modules = ["./func1.js","./func2.js", "./out.js"]
modules.forEach(name => {
    let obj = {...require(name)}
    for(let key in obj) global[key] = obj[key]
})


global.resolveGlobals = async ()=>{
    for(let attr in global){
        if (global[attr] instanceof Promise)
            global[attr] = await global[attr]
    }
}
global.resolveGlobals()
