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
    title: string
}

function handleComic(data: Comic) {
    myImg.setAttribute('src', data.img)
    myImg.setAttribute('alt', data.alt)
    imgTitle.textContent = 'Title: ' + data.title
    imgAlt.textContent = 'Alt: ' + data.alt
    const date = new Date(parseInt(data.year), parseInt(data.month) - 1, parseInt(data.day)).toLocaleDateString();
    imgDate.textContent = 'Date: ' + date
}

document.addEventListener('DOMContentLoaded', async function () {
    const id: string = await fetchId()
    myId.textContent = id.toString()
    const data: Comic = await fetchImage(id)
    handleComic(data)
})

getRandomBtn.addEventListener('click', async function () {
    const id: string = Math.floor(Math.random() * 1000).toString()
    myRandomId.textContent = id
    const data: Comic = await fetchImage(id)
    handleComic(data)
});