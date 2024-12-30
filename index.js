// Google Maps API
function initMap() {
    const location = { lat: 49.8397, lng: 24.0297 }; // Львівська політехніка
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
        mapTypeId: 'roadmap',
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Львівська політехніка",
    });
}

// YouTube Data API
const API_KEY = 'YOUR_YOUTUBE_API_KEY';
const VIDEO_ID = 'TVO6lfXKxak'; // Замість цього вставте свій YouTube Video ID

fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${VIDEO_ID}&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        const videoData = data.items[0].snippet;
        const videoContainer = document.getElementById('youtube-video');
        videoContainer.innerHTML = `
            <h3>${videoData.title}</h3>
            <iframe src="https://www.youtube.com/embed/${VIDEO_ID}" frameborder="0" allowfullscreen></iframe>
            <p>${videoData.description}</p>
        `;
    })
    .catch(error => console.error('Error fetching YouTube data:', error));

// OpenWeather API
const WEATHER_API_KEY = 'ea4fd80ca4a501142455c9c254ba3217';
const CITY = 'Lviv';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${WEATHER_API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `
            <p>Місто: ${data.name}</p>
            <p>Температура: ${data.main.temp}°C</p>
            <p>Погода: ${data.weather[0].description}</p>
        `;
    })
    .catch(error => console.error('Error fetching weather data:', error));

