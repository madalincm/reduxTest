//-------------------
//Object Destructuring

// const person = {

//     age: 27,
//     location: {
//         city: 'Baia Mare',
//         temp: 12
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`)

// const {city, temp: temperature} = person.location

// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//     title: 'Ego is the enamy',
//     author: "Mihai EMinescu",
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Anonymous'} = book.publisher;

// console.log(publisherName);


//-------------------
//Array Destructuring

// const address = ['1299 S Juniper', 'Philadelphia', 'Pensilvania', '441233'];

// const [,city , state = 'New York'] = address;

// console.log(`You are in ${city} ${state}`);