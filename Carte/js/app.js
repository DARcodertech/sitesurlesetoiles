import { GeoLocation } from './geoLocation.js';
import { AstronomyAPI } from './api.js';
import { SkyMap } from './skyMap.js';

document.getElementById("btn").addEventListener("click", async () => {
  const geo = new GeoLocation();

  try {
    const position = await geo.getCurrentPosition();
    const api = new AstronomyAPI("3812ebd7266b496f947adc0c136a9e41");

    const data = await api.getAstronomyData(position.lat, position.lon);

    if (data) {
      const info = `☀️ Lever du Soleil : ${data.sunrise}<br>🌙 Coucher du Soleil : ${data.sunset}`;
      document.getElementById("info").innerHTML = info;
    } else {
      document.getElementById("info").textContent = "Erreur de données astronomiques.";
    }
  } catch (error) {
    document.getElementById("info").textContent = error;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const sky = new SkyMap("sky");

  function animate() {
    sky.drawSky();
    requestAnimationFrame(animate);
  }

  animate();
});

