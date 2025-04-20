const person = {
    name: 'Hung',
    Lastname: 'haha',
    age: '22',
    education: 'true',
    married: 'false',
    sibling: ['Ha', 'Hai', 'Huyen'],
    greeting() {
        console.log('Hello my name is HUNG');
    },
};

const age = person.age;
console.log(age);
person.name = 'Hien';
console.log(person.name);
console.log(person.sibling[2]);
person.greeting();

function hello() {
    //logic
    console.log('Hello Hai');
    console.log('Hello Ha');
    console.log('Hello Huyen');
}

hello();