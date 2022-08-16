
let obj = {}

addMudole = name => obj = {...obj, ...require(name)}

const modules = ["./func1","./func2", "./out.js"]

modules.forEach(addMudole)

for(let attr in obj)
    global[attr] = obj[attr]


global.resolveGlobals = async ()=>{
    for(let attr in global){
        if (global[attr] instanceof Promise)
            global[attr] = await global[attr]
    }
}
