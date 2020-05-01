//task1
console.log('----task1-----')

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices =  prices.map((p, index)  => ({
   index: index,
    price: p * (1 + tax)
}));
console.log(taxAdjustedPrices);

//task2
console.log('----task2-----')

const taxAdjustedPrices2 =  taxAdjustedPrices.filter(p => p.price > 6.0);
console.log(taxAdjustedPrices2);

//task3
console.log('----task3-----');
const sum = taxAdjustedPrices.reduce((sum, price) => sum + price.price, 0);
console.log(sum);

//task4
console.log('----task4-----');

const personnel1 =[
    {
        id: 5,
        name: "luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
];

const totalScore = personnel1.filter(p => p.isForceUser)
    .map(p => p.pilotingScore+p.shootingScore)
    .reduce((sum, p) => sum + p, 0);

console.log(totalScore);

//task5
console.log('----task5-----');

const newSubjects = ['APBD', 'TPO', 'SAD'];
const sNumber = 's11111';
const personPart = {
    name: "Anna",
    surname: "Doe",
    indexNumber: "sXXXX"
};
const personPart2 = {
    email: "xxxx@pjwstk.edu.pl",
    phone: "444-444-444",
    subjects: []
};

function merge(object1, object2, number, subjects ){
    object1.indexNumber = number;
    object2.subjects = subjects;
    return {...object1, ...object2}
}

var merged = merge(personPart, personPart2, sNumber, newSubjects)

console.log(merged);

//task6
console.log('----task6-----');


