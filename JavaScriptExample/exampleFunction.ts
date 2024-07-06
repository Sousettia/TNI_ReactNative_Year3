interface Person {
  name: String;
  age: number;
}

//Create Array of Person Object
const people : Person[] = [ //let or const is the same but in react we use const
    {name:"John Lee",age : 30},
    {name:"Marry Burner",age : 25},
    {name:"Harry Kill",age : 35}
]
//Function to filter people who are in at least 30 years old
function filterAdults(persons:Person[]):Person[]{   // :Person คือการให้แสดงผลออกเป็น object Person[]
    return persons.filter(person => {return person.age >= 30});
}
//Using the function and logging the result
const adults = filterAdults(people);
console.log(adults);
