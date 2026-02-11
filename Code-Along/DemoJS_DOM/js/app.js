
function sayHello()
{
    //här pekar vi på textboxen och tar ut texten
    const name = document.querySelector("#newText").value;
    alert("Hello " + name);
}

//Den lite mer moderna syntaxen för att skapa en funktion
const add = () => {

    //Tar fram texten från element med id newText
    const text = document.querySelector("#newText").value;

    let listRow = document.createElement('li');
    listRow.innerText = text;

    //Peka på parentelementet och lägg in det på webbsidan
    document.querySelector("#list").appendChild(listRow);
}

const remove = () => {
    const text = document.querySelector("#newText").value;

    //Detta blir en pekare till listan
    const list = document.querySelector("#list");

    //Eftersom listan är parentnode för alla rader, loopar
    // vi igenom childnodes
    list.childNodes.forEach( node => {
        
        //Om texten i listraden motsvarar text skall raden(node) 
        // tas bort
        if(node.innerText == text)
        {
            list.removeChild(node);
        }
    })
}
