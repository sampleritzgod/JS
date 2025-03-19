const course = {
    username : 'abhay',
    price : 700,
    welcomeMessage :function callcurrent(){
        console.log(`you ${this.username} You're loggedIn successfully`); // current context print
    }
}
course.welcomeMessage();
course.username = 'shrushti'; // change currnet context using this keyword 
course.welcomeMessage();
// in node this is empty object in node environment but in browser this is window object. 
const addTwo = (num1, num2) => num1 + num2 ; // implect  .. explecit
console.log(addTwo(55,55));
const addNum = (num1, num2) => ({username: 'abhay'}) // use squarebracket and curly 
console.log(addNum(6,7));