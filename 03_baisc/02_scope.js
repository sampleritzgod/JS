var a = 400;
if(true){
    var a = 345;
}
console.log(a);
// node and windows code has differnet...

function callBy(){
    const username = 'abhay';
    function childFunction(){
        console.log(username);
    }
    childFunction();
}
callBy();
//
if(true){
    const userInput = 'abhay';
    if(userInput === 'abhay'){
        const website = 'youtube';
        console.log(`username is ${userInput} and platform is ${website}`);

    }
}
//
function addone(increce){
    return increce + 1 ;
}
addone(5);

const addtwo = function(increce){
    return increce + 2 ;
}