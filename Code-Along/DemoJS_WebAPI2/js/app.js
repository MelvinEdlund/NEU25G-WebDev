
document.querySelector("#search-button").addEventListener("click", () =>{

    // Ta fram id från textboxen 
    const id = document.querySelector("#search-text").value;
    // Anropa en sökfunktion som går mot web api:et för att hämta en post med detta id.
    search(id);


});

// Denna funktion måste vara async eftersom den anropar en annan funktion som också är async
const search = async (id) => {

    // Anropa funktionen som finns i postservice och
    // Få tillbaka ett post objekt
    const post = await getPost(id);
    // Lägg ut data från post på webbsidan med DOM manipulation
    console.log(post);
    let header = document.createElement("h3");
    header.innerText = post.title;

    let body = document.createElement("p");
    body.innerText = post.body;

    // Här anges var på webbsidan vi vill lägga på de nya elementen
    const data = document.querySelector("#search-data");


    // Innan vi lägger på de nya värderna tar vi bort de tidigare värdena
    data.innerHTML="";

    // Sedan lägger vi på dom nya elementen
    data.appendChild(header);
    data.appendChild(body);

    // anropa funktionen som finns i post service och få tillbaka ett post objekt
    //Kögg ut data från post på webbsidan med dom maipulation console.log(post); let header
    //document.createElement("h3"); header.innerText = post.title,

}