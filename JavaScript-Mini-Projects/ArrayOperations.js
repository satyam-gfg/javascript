// 1. Create User Objects
const users = [
    { name: 'Alice', age: 30, hobbies: ['reading', 'biking'] },
    { name: 'Bob', age: 25, hobbies: ['gaming', 'hiking'] },
    { name: 'Charlie', age: 35, hobbies: ['cooking', 'swimming'] }
];

// 2. Destructure Properties
for (const user of users) {
    const { name, age } = user;
    console.log(`Name: ${name}, Age: ${age}`);
}

// 3. Use Spread Operator
const allHobbies = [
    ...users[0].hobbies,
    ...users[1].hobbies,
    ...users[2].hobbies
];

console.log('All Hobbies:', allHobbies);
