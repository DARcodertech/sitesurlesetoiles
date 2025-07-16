export class AstronomyAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.ipgeolocation.io/astronomy";
  }

  async getAstronomyData(lat, lon) {
    const url = `${this.baseUrl}?apiKey=${this.apiKey}&lat=${lat}&long=${lon}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Erreur API");

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur lors de l'appel à l'API :", error);
      return null;
    }
  }
}
