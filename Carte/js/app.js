import { GeoLocation } from './geoLocation.js';
import { AstronomyAPI } from './api.js';
import { SkyMap } from './skyMap.js';

document.getElementById("btn").addEventListener("click", async () => {
  const input = document.getElementById("search-location").value.trim();
  const api = new AstronomyAPI("3812ebd7266b496f947adc0c136a9e41");

  let lat, lon;

  if (input) {
    const geoData = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(input)}&format=json&limit=1`)
      .then(res => res.json())
      .catch(() => []);

    if (geoData.length === 0) {
      document.getElementById("info").textContent = "Lieu introuvable.";
      return;
    }

    lat = geoData[0].lat;
    lon = geoData[0].lon;
  } else {
    try {
      const geo = new GeoLocation();
      const position = await geo.getCurrentPosition();
      lat = position.lat;
      lon = position.lon;
    } catch (error) {
      document.getElementById("info").textContent = error;
      return;
    }
  }

  const data = await api.getAstronomyData(lat, lon);

  if (data) {
    const info = `☀️ Lever du Soleil : ${data.sunrise}<br>🌙 Coucher du Soleil : ${data.sunset}`;
    document.getElementById("info").innerHTML = info;
  } else {
    document.getElementById("info").textContent = "Erreur de données astronomiques.";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const sky = new SkyMap("sky");

  function animate() {
    sky.drawSky();
    requestAnimationFrame(animate);
  }

  animate();

  const searchInput = document.getElementById("search-location");
  const suggestionsDiv = document.getElementById("suggestions");

  searchInput.addEventListener("input", async () => {
    const query = searchInput.value.trim();

    if (query.length < 2) {
      suggestionsDiv.innerHTML = "";
      return;
    }

    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=10&accept-language=fr`);
    const data = await response.json();

    const mainTypes = ["country", "city", "town", "village", "state"];
    const mainPlaces = [];
    const detailedPlaces = [];

    data.forEach(place => {
      if (mainTypes.includes(place.type)) {
        mainPlaces.push(place);
      } else {
        detailedPlaces.push(place);
      }
    });

    const sortedResults = [...mainPlaces, ...detailedPlaces];

    suggestionsDiv.innerHTML = "";

    sortedResults.forEach(place => {
      const suggestion = document.createElement("div");
      suggestion.textContent = place.display_name;
      suggestion.addEventListener("click", () => {
        searchInput.value = place.display_name;
        suggestionsDiv.innerHTML = "";
      });
      suggestionsDiv.appendChild(suggestion);
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target !== searchInput) {
      suggestionsDiv.innerHTML = "";
    }
  });
});
