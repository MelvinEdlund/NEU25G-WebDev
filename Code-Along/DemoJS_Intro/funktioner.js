
//Detta är den klassiska syntaxen för att skapa en funktion
function myFunction1 (value1,value2){

    return value1+ value2;
}

function myFunction2 (value, value2){

    return value- value2;
}

console.log(myFunction1(myFunction2(10, 5),5));

//Detta är den moderna syntaxen som ni bör använda 
const myFunction3 = (val1,val2) =>{

    return val1*val2;
}

console.log(myFunction3(2,4));