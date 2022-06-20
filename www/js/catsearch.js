const baseUrl = 'https://api.thecatapi.com/v1/breeds/search'
const section = document.querySelector('.content-wrapper')
const button = document.querySelector('#searchBtn')

const notfound = document.querySelector('#notfound')
const notsearch = document.querySelector('#notsearch')

async function getCats() {
    let catName = document.getElementById('searchForm').value;

    try {
        const response = await fetch(baseUrl+"?q="+catName)
        const json = await response.json()
        console.log('JSON', json)
        return showList(json)
    } catch (e) { 
        console.log('Error while fetching cats.')
        console.log(e)
    }
}

showList = json => {
    
}

button.addEventListener('click', getCats)