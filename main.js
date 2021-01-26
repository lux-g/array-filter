const people = [
    {
        name: "Jim",
        age: 22
    },
    {
        name: "Mike",
        age: 15
    },
    {
        name: "Pam",
        age: 18
    }
];

const adults = people.filter(person => person.age >= 18);
console.log(adults)
