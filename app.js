"use strict";

//getPokemon();
$("#btn").click(function () {
    let random =  Math.floor(Math.random() * 100) +1;
    getPokemon(random);
});

function getPokemon(number) {
    const url = `https://pokeapi.co/api/v2/pokemon/${number}/`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    fetch(url, options)
        .then(response => response.json()
        ).then(data => {
        $("#loader").hide(500);
        showPokemon(data);
    })
        .catch(error => console.error(error));
}

function showPokemon(data){
    let output = `
    <h4>Name: ${data.forms[0].name}<h4>
    <p>Height: ${data.height}</p>
    <p>Weight: ${data.weight}</p>
        `;
    $("#searchResults").append(output);
}