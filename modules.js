//Modules - encapsulated code (only share minimum),every file in node is a module

const sayHi=(name)=>{
    console.log(`Hello ${name}`) 
}

module.exports=sayHi