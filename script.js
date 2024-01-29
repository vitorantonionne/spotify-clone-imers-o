const searchInput = document.getElementById('search-input')
const resultArtist = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlists')


function requestAPI(searchTerm) {
  const URL = `http://localhost:3000/artists?name_like=${searchTerm}`
  fetch(URL) 
    .then((response) => response.json())
    .then((result) => displayResults(result))
}


function  displayResults(result) {
  resultPlaylist.classList.add('hidden')

  const artistName = document.getElementById('artist-name')
  const artistImage = document.getAnimations('artist-img')

  result.forEach(element => {
    artistName.innerText = element.name
    artistImage.src = element.urlImg
  }) 

  resultArtist.classList.remove('hidden')
}

document.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase()
  if (searchInput === '') {

    resultPlaylist.classList.add('hidden')
    resultArtist.classList.remove('hidden')
    return
  }

  requestAPI(searchTerm)
})