console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    renderImages()
    loadBreeds()
})

function renderImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(results => {
            results.message.forEach(imageUrl => addImage(imageUrl))
        })
}

function addImage(imageUrl) {
    const imageContainer = document.querySelector("#dog-image-container")
    let img = document.createElement('img')
    img.src = imageUrl
    imageContainer.appendChild(img)
}

function loadBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(results => {
        console.log(results.message)
    })
}

