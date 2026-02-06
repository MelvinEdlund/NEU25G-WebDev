//Denna variabel lever i ett globalt scope. Åtkomlig överallt i koden
var globalValue = 1;

if(globalValue==1) 
{
    globalValue++;
    console.log(globalValue);

    //Denna variabel lever bara inne i ifsatsen. annat scope än var
    let internalValue=2;
}
else if (globalValue==2)
    console.log(globalValue);

//Detta funkar inte eftersom denna variabel bara är åtkomlig i ifsatsen
console.log(internalValue);

//Här
const konstantValue = 4;