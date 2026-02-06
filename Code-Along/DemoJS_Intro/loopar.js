
let myArray = [1,2,4,6,7];

//Motsvarar en foreach loop i C#
for(let number of myArray)
{
    console.log(number);
}

//Precis samma sak fast med lite modern JS syntax
myArray.forEach(number => {
    console.log(number);
})


//Det funkar även med while loopen
let index=0;
while(index < myArray.length)
{
    console.log(myArray[index]);
    index++;
}