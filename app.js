"use strict";

//getPokemon();
$("#btn").click(function () {
    let random =  Math.floor(Math.random() * 100) +1;
    getPokemon(random);
});

function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
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
        console.log(data)
        showPokemon(data);
    })
        .catch(error => console.error(error));
}

function showPokemon(data){
    let output = `
    <div>
    <img src="${data.sprites.front_default}" alt=""> <br>
    <h4>Name: ${data.forms[0].name}<br></h4>
    Height: ${data.height}<br>
    Weight: ${data.weight}<br>
    Type: ${data.types[0].type.name}<br>
    Moves: ${data.moves[0].move.name} <br>
    ${data.moves[1].move.name}
    </div>
        `;
    $("#searchResults").append(output);
}

