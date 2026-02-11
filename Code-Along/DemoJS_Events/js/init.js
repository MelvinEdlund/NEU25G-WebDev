
// Läggs kod direkt i en js fil hamnar den i det globala scopet. Inte så snyggt. 
// Genom att lägga in det i window.onload körs det en gång och ligger inte i scopet.
// Finns även moduler i JS som vi kommer att titta på senare.
window.onload = () => {

    // Här läser vi in hela img taggen som ett objekt
    let image = document.querySelector("#imgGlass");

    document
    .querySelector("#buttonChange")
    .addEventListener("click", () =>{
        image.src = "images/empty.jpg"; 

    });

    document
    .querySelector("#buttonChanged")
    .addEventListener("click", () =>{
        image.src = "images/full.jpg";    
    
    });

    image.addEventListener("mouseenter", () => {
        image.src= "images/empty.jpg";

    });

    image.addEventListener("mouseleave", () => {
        image.src= "images/full.jpg";

    });

}


