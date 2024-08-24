// Dog CEO API Key
const DOG_CEO_API_KEY = 'YOUR_DOG_CEO_API_KEY';

// Function to fetch random dog images using the API key
function fetchDogImages() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dogImages').innerHTML += `<img src="${data.message}" class="img-fluid mb-3" alt="Random Dog Image">`;
        })
        .catch(error => console.error('Error fetching dog images:', error));
}

// Call fetchDogImages function
document.addEventListener('DOMContentLoaded', fetchDogImages);
