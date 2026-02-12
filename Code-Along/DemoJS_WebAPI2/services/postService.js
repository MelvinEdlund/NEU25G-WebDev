//Eftersom det är ett asynkront anrop och funktionen anropas från en annan funktion 
// måste man använda async och await .
const getPost = async (id) => {

    const url ="https://jsonplaceholder.typicode.com/posts/" + id;

    // Det JSON data som kommer från anropet skickas vidare 
    return await fetch(url).then(response => response.json());
}