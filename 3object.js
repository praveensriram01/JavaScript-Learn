// Example of an Object
var person = { 
    name: "Praveen Sriram", 
    age: 22, 
    Designation: "Software Developer"
};
//console.log(person)


var person1 = { 
    name: "Praveen Sriram", 
    age: 22, 
    Designation: "Software Developer",
    friends: ['Celestine','Dazio','Nannick'],
    address: {
        nationality: 'India',
        state: 'Tamil Nadu',
        home: {
            city: 'Trichy',
            area: 'Palakkarai',
            pincode: 620001
        }
    }
};

//console.log(person1)
// dot notation
console.log(person1.friends)
// bracket notation
console.log(person1['address'])
// adding a new property
person1.techstack = ['ReactJs','Python or NodeJS','MySQL']
//console.log(person1)

delete person1.address.home.area
console.log(person1)
