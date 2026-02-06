//Det finns objektorientering i JS men det är inte ett OO språk.


class Person{

    //Här sätts properties via konstruktorn
    constructor(name,email){
        this.Name = name;
        this.Email = email;
    }

    //Här skapas en metod i klassen
    sayHello()
    {
        console.log("Hello " + this.Name);
    }

}

const person = new Person("John", "john@gmail.com");


person.sayHello();