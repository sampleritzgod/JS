// singleton 
// literial 
let userkey = Symbol('IsNotLoggedIn');
let UserJs = {
    name: 'abhay',
    age: 20,
    state: 'Gujarat',
    school: undefined,
    [userkey]: 'UserLoggedIn'
}
console.log(UserJs);
console.log(UserJs[userkey]);
console.log(typeof [userkey]);
// Object.freeze(UserJs);   // freeze object - no changes...
//
UserJs.greeting = function(){
    console.log(`Hello JS`);
}
console.log(UserJs.greeting());

UserJs.GreetingTwo = function(){
    console.log(`Hello JS ${this.name}`);
}
console.log(UserJs.GreetingTwo());
// they work because we comment object.freeze method so read your code perfect.
//------------
const obj1 =  {1: 'a', 2: 'b', 3: 'h'};
const obj2 = {4: 'a', 5:'Y'};

const allObj = Object.assign({}, obj1, obj2);
console.log(allObj);
//
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
console.log(obj1.hasOwnProperty('abhay')); // -if property in object or not ?
//
const course = {
    coruseName: 'Javascript',
    courseInstructure: 'ChaiWithCode',
    coursePrice: '999'
}
const {courseInstructure : teacher} = course ; // D-structure
console.log(teacher);
