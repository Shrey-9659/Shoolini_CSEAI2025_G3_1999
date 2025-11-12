// console.log("Hello World!")
// let/var/const

// keyword variableName = value
// let name = 5;
// console.log(name)

// VAR -->
// console.log(name) -- hoisting is possible
// var name = "Shrey";
// var name = "Rohit"; -- redeclaration is possible
// name = "Rohit" -- reinitialization is possible

// LET -->
// console.log(name)
// Cannot access 'name' before initialization
// console.log(first)
// first is not defined
// let name = "Shrey"
// let name = "Rohit" -- redeclaration is not possible
// name = "Rohit" -- reinitialization is possible

// CONST --> 
// console.log(name)
// const name = "Shrey"
// const name = "Rohit" -- redeclaration is not possible
// name = "Rohit" -- reinitialization is not possible


// Strictness 
// const << let << var


// DataTypes : 
// Primitive -->
// Number(number) -- 1, -1, 1.234
// String(string) -- 'char', "char", `char`
// BigInt(bigInt) -- 1234567876543234567654323456n
// Boolean(boolean) -- true, false
// Null(object) -- void space
// undefined(undefined) -- not defined
// symbol

// Non - Primitive -->
// Object {}
// Array [1,2,3,4,5], [1,"Shrey", undefined, null, true]

// console.log(null == 0) -- false
// console.log(null > 0)
// console.log(null < 0)
// console.log(null >= 0) -- true
// console.log(null <= 0)


let sample = "1234"
console.log(typeof(sample))