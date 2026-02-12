

document.querySelector("#setValue").addEventListener("click", () => {

    const userObject = {"name": "Lisa", "email": "lisa@gmail.com"};

    // Gör om objektet till en JSON sträng och lägger in i localstorage
    localStorage.setItem("user", JSON.stringify(userObject));

});

document.querySelector("#showValue").addEventListener("click", () => {

    // Hämta strängen från localstorage och gör om det till ett objekt
    const user = JSON.parse(localStorage.getItem("user"));

    alert(user.name);

});

document.querySelector("#removeValue").addEventListener("click", () => {

    localStorage.removeItem("user");

});