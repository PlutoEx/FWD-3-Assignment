const email: string = 'a.kuralbayev@innopolis.university'
const myId = document.getElementById('myId') as HTMLDivElement
const getRandomBtn = document.getElementById('getId') as HTMLButtonElement
const myRandomId = document.getElementById('myRandomId') as HTMLDivElement
const myImg = document.getElementById('myImg') as HTMLImageElement
const imgTitle = document.getElementById('imgTitle') as HTMLDivElement
const imgAlt = document.getElementById('imgAlt') as HTMLDivElement
const imgDate = document.getElementById('imgDate') as HTMLDivElement

function fetchId() {
    return fetch('https://fwd.innopolis.app/api/hw2?email=' + email).then(r => r.json());
}

function fetchImage(id: string) {
    return fetch('https://getxkcd.vercel.app/api/comic?num=' + id).then(r => r.json());
}

interface Comic {
    img: string
    alt: string
    day: string
    month: string
    year: string
}

document.addEventListener('DOMContentLoaded', async function () {
    const id: string = await fetchId()
    myId.textContent = id.toString()
    const data: Comic = await fetchImage(id)
    console.log(data)
    // const image = await fetchImage(id)
    // myImg.setAttribute('src', image.img)
    // myImg.setAttribute('alt', image.alt)
    // imgTitle.textContent = 'Title: ' + image.title
    // imgAlt.textContent = 'Alt: ' + image.alt
    // const date = new Date(image.year, parseInt(image.month) - 1, image.day).toLocaleDateString();
    // imgDate.textContent = 'Date: ' + date
})

// getRandomBtn.addEventListener('click', async function (e) {
//     const id = Math.floor(Math.random() * 1000)
//     myRandomId.textContent = id
//     const image = await fetchImage(id)
//     myImg.setAttribute('src', image.img)
//     myImg.setAttribute('alt', image.alt)
//     imgTitle.textContent = 'Title: ' + image.title
//     imgAlt.textContent = 'Alt: ' + image.alt
//     const date = new Date(image.year, parseInt(image.month) - 1, image.day).toLocaleDateString();
//     imgDate.textContent = 'Date: ' + date
// });