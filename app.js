console.log("Let's get this party started!");

const giphyKey = "vRd3lGFQsHDDLEdg3PZMvJYX19bSYl4B";
let imgCount = 0;

function handleSearch(e) {
    e.preventDefault();
    let search = document.querySelector("input").value;

    if (!search) return;

    try {
        getGif(search);
    } catch (error) {
        
    }
    search.value = "";
}

async function getGif(searchTerm) {
    let reqString = "https://api.giphy.com/v1/gifs/search?api_key=" + giphyKey + "&q=" + searchTerm + "&rating=g&lang=en";
    let req = await axios.get(reqString);
    console.log(req);
    appendGifToDOM(req.data.data[0].images.downsized.url);
}

function appendGifToDOM(url) {
    let gif = document.createElement("img");
    gif.classList.add('img-fluid');
    gif.classList.add('py-5');
    gif.src = url;

    let colNum = imgCount % 3;
    let col = document.querySelector(`#col-${colNum}`);
    col.appendChild(gif);
    imgCount++;
}

function handleRemove(e) {
    e.preventDefault();
    removeAllImages();
}

function removeAllImages(){
    $("img").remove();
    imgCount = 0;
}

document.querySelector('#search').addEventListener('click', handleSearch);
document.querySelector('#remove').addEventListener('click', handleRemove);