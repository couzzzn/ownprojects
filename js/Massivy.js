//let arr=[    //array - massiv
//'1st',
//'2nd',
//'3rd',    
//[1, 6, 9, 0],
//];


//console.log(arr[3][2]);
//arr.push('test');

//console.log(arr);

let person={
    name:'Vadik',
    age:18,
};

console.log(person);
console.log(person.name);
console.log(person ['name']);

console.log('name' in person)

person.demo=[1, 5];
console.log(person);
delete person.age;
console.log(person);

