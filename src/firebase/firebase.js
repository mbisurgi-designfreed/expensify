import * as firebase from 'firebase';
import _ from 'lodash';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const res = _.map(snapshot.val(), (value, id) => {
//             return { id, ...value };
//         });

//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// database.ref('expenses').push({
//     description: 'Gas bill',
//     note: '',
//     amount: 78.55,
//     createdAt: 1000
// });

// database.ref('expenses').push({
//     description: 'Water bill',
//     note: '',
//     amount: 150.00,
//     createdAt: 1000
// });

// database.ref('expenses').push({
//     description: 'Light bill',
//     note: '',
//     amount: 230.65,
//     createdAt: 1000
// });

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref().set({
//     name: 'Maximiliano',
//     age: 29,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Buenos Aires',
//         country: 'Argentina'
//     }
// });

// database.ref()
//     .update({
//         stressLevel: 9,
//         'job/company': 'Amazon',
//         'location/city': 'Monte Grande'
//     })
//     .then(() => {

//     })
//     .catch((err) => {
//         console.log(err);
//     });

