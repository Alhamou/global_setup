
let obj = {}

addMudole = function(name){obj = {...obj, ...require(name)}}

const modules = ["./func1","./func2", "./out.js"]

modules.forEach(name => addMudole(name))

for(let attr in obj){
    global[attr] = obj[attr]
}


global.resolveGlobals = async function(){
    for(let attr in global){
        if (global[attr] instanceof Promise){
            global[attr] = await global[attr]
        }
    }
}
