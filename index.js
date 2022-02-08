let count = 12;

function render(){
    let container = document.getElementById("pokemon");
    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`
}

let previous = document.getElementById("prev-button")
let next = document.getElementById("next-button")

previous.onclick = function(){
    if(count > 1){
        count=count-1
        render()
    }
}

next.onclick = function(){
    if(count < 650){
        count=count+1
        render()
    }
}

render()