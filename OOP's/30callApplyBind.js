let person1 = {
    Name: "Praveen",
    Age: 23
}

let person2 = {
    Name: "Nannick",
    Age: 23
}

let Person = function(City, State) {
    console.log(`Name: ${this.Name}, Age: ${this.Age}, City: ${City}, State: ${State}.`)
}

// Call method
Person.call(person1, "Trichy", "TN")

// Apply method = by storing in an array
Person.apply(person1, ["Trichy", "TN"])

// Bind method = by making it as a function
let itFun = Person.bind(person1, "Trichy", "TN")

itFun()