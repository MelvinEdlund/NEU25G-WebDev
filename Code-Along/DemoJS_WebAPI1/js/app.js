
//I denna funktion anropas ett web api. Det returnerer JSON data som 
//vi skall hantera och lägga ut på webbsidan
const getData = () =>{

    const url = "https://jsonplaceholder.typicode.com/posts";

    //Steg1 är att skapa anropet och skicka det
    fetch(url)
    //Steg2 är att ta ut json data från bodyn i response
    .then(response => response.json())
    //Steg3 är att göra någonting med datat som vi har fått
    .then( posts => {

        posts.forEach(post => {

            //Skapa upp en div som är som en behållare för allt som visas 
            //för en post
            let container = document.createElement("div");
            container.style.border="1px solid black";
            container.style.margin= "5px";
            container.style.padding = "10px";

            //Skapa en rubrik och sätt den till en h3 tagg. 
            //Vi tar titeln från JSON objektet och lägger in här
            let header = document.createElement("h3");
            header.innerText = post.title;

            //Skapa en body med hjälp av post.body
            let body = document.createElement("p")
            body.innerText = post.body;

            //Koppla dessa till containern
            container.appendChild(header);
            container.appendChild(body);

            //Koppla containern till webbsidan
            document.querySelector("#data").appendChild(container);
        });
    });
}

getData();