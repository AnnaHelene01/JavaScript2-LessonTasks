
const url = "https://noroffcors.herokuapp.com/" + "https://www.geek.no/noroff/stuff/restauranter.json";
const out = document.querySelector("div#listout");

console.log(url);

listRestaurants = (list) => {
    console.log(list);
    out.innerHTML = "";

    for (let item of list) {
        let newDiv = `<div>
        <p>Name: ${item.name} (${item.branch})</p>
        <p>Address: ${item.address} and the URL: <a href="${item.url}">Click here</a></p>
        </div>`
        out.innerHTML += newDiv;
    }
}

fetch (url)
 .then (response => response.json())
 .then (data => listRestaurants(data.restaurants))
 .catch (error =>{(error.message)
    console.error(error.message)
    out.innerHTML = `<div> Somethings wrong! </div>`
 });