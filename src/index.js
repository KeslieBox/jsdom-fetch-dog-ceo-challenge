console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    loadImages()
    loadBreeds()
})

function loadImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(results => {
            results.message.forEach(imgUrl => addImage(imgUrl))
        })
}

function addImage(imgUrl) {
    const imageContainer = document.querySelector("#dog-image-container")
    let img = document.createElement('img')
    img.src = imgUrl
    imageContainer.appendChild(img)
}

function loadBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(results => {
        breeds = Object.keys(results.message)
        updateBreedList(breeds)
        breedSelectListener()
    })
}

function updateBreedList(breeds) {
    let ul = document.querySelector("#dog-breeds")
    ul.innerHTML = ""
    breeds.forEach(breed => addBreedToList(breed))
}

function addBreedToList(breed) {
    let ul = document.querySelector("#dog-breeds")
    const li = document.createElement("li")
    li.innerText = breed
    li.style.cursor = "pointer"
    ul.appendChild(li)
    li.addEventListener("click", updateColor)
}

function updateColor(e) {
    e.target.style.color = "blue"
}

function breedSelectListener() {
    const selectElement = document.querySelector("#breed-dropdown")
    selectElement.addEventListener("change", (event) => {
        filterBreedsBy(event.target.value)
        // function to filter breeds
    })

}

function filterBreedsBy(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)))
}