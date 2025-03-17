let todayDate = new Date();
console.log(todayDate.toDateString());
console.log(todayDate.toJSON());
console.log(todayDate.toISOString());
console.log(todayDate.toLocaleDateString());
console.log(todayDate.toLocaleTimeString());
console.log(todayDate.toLocaleString());
//
console.log(typeof Date); // object 
const myCreatedDate = new Date(2005, 1, 13);
console.log(myCreatedDate.toString());
//
const  myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
if(myCreatedDate.getTime >= myTimeStamp|| myCreatedDate.getTime <= myTimeStamp){
    console.log(myTimeStamp.toLocaleString);
    console.log(myCreatedDate);
}
//
const campareSecond =  Math.floor(Date.now()/1000);// don't use new keyword 
console.log(campareSecond);
//
myCreatedDate.toLocaleString('fault', {
    weekday: "narrow",
    dateStyle: "long",
    dayPeriod: "narrow"
})
//
