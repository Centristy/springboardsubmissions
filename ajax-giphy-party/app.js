console.log("Let's get this party started!");


let findButton = document.getElementById('search');
let deleteButton = document.getElementById('delete');
let inputVal = document.getElementById('prompt');
let list = document.getElementById('memefind')

findButton.addEventListener("click",async function(){
    try{
    let find = await getGIF()
    let i = Math.floor(Math.random()*19)
    let randGen = find.data[i].embed_url;
    console.log(find, randGen);

    let img = document.createElement("iframe");
    img.src = randGen;
    list.append(img);
    inputVal.value = "";
}
    catch(e){
        alert("No Memes Found!")
    }

})

deleteButton.addEventListener("click", function(){
    list.innerHTML= []
})




// getGIF makes axios request and returns an object

async function getGIF(){
let prompt = inputVal.value
let request = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${prompt}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&limit=20`)

return request.data
}