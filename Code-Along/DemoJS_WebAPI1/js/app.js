
// I denna funktion anropas ett web api. Det returnerar JSON data som
// Vi skall hantera och lägga ut på webbsidan
const getData = () => {

    const url = "https://jsonplaceholder.typicode.com/posts/";

    // Steg1 är att skapa anropet och skicka det
    fetch(url)
    // Steg2 är att ta ut json data från bodyn i response
    .then(response => response.json())
    // Steg3 är att göra någonting med datan som vi har fått 
    .then( posts => {

        posts.forEach(post => {

            let container = document.createElement("div");
            container.style.border="1 px solid black";
            container.style.margin="5px";
            container.style.padding= "10 px";

            let header = document.createElement("h3");

            header.innerText = post.title;

            let body = document.createElement("p");
            body.innerText = post.text;

            container.appendChild(header);
            container.appendChild(body);

            document.querySelector("#data").appendChild(container);


        });



    });

}

getData();