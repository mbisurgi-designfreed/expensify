// console.log('destructuring-objects');

// const person = {
//     name: 'Maximiliano',
//     age: 29,
//     location: {
//         city: 'Buenos Aires',
//         temp: 30
//     }
// };

// const { name, age, location: { city, temp } } = person;

// console.log(`${name} is ${age}`);

// console.log(`It's ${temp} in ${city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { publisher: { name: publisherName = 'Self-Published' } } = book;

// console.log(publisherName);

console.log('destructuring-arrays');

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state] = address;

console.log(`You are in ${city} ${state}`);
