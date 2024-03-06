let button = document.getElementById('getjoke')
let render = document.getElementById('jokerender')
let jokeshowpara = document.getElementById('jokerendershow')
let keyTerm = document.getElementById('keyterm')
let content = []

button.addEventListener("click", async function(){

    const joke = await axios.get (`https://icanhazdadjoke.com/search?term=${keyTerm.value}`)

    render.innerHTML= joke.data;

    let showjoke = document.getElementsByClassName('table is-striped')

    jokeshowpara.innerHTML = showjoke[0].innerHTML



})