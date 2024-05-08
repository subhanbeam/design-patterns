// We declare our prototype object with two methods
const enemy = {
    attack: () => console.log("Pim Pam Pum!"),
    flyAway: () => console.log("Flyyyy like an eagle!")
}

// We declare another object that will inherit from our prototype
const bug1 = {
    name: "Noname",
    phrase: "Your debugger doesn't work with me!"
}

Object.setPrototypeOf(bug1, enemy)

console.log(Object.getPrototypeOf(bug1))

console.log(bug1.phrase) // Your debugger doesn't work with me!
bug1.attack()
bug1.flyAway()
