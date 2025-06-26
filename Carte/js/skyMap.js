export class SkyMap {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.canvas.addEventListener("click", this.handleClick.bind(this));

this.objects = [];

for (let i = 0; i < 200; i++) {
  const baseAlpha = Math.random() * 0.5 + 0.5;
  const phase = Math.random() * Math.PI * 2;

  this.objects.push({
    x: Math.random() * this.width,
    y: Math.random() * this.height,
    radius: Math.random() * 2 + 1, 
    baseAlpha: baseAlpha,
    phase: phase,
    name: "",
    color: "white"
  });
}

this.objects.push(
  {
    x: 100,
    y: 150,
    radius: 5,
    name: "Soleil",
    color: "yellow",
    type: "Étoile",
    planets: 8,
    description: "L'étoile au centre de notre système solaire."
  },
  {
    x: 300,
    y: 200,
    radius: 2.5,
    name: "Sirius",
    color: "white",
    type: "Étoile",
    planets: 2,
    description: "L'étoile la plus brillante du ciel nocturne."
  },
  {
    x: 500,
    y: 100,
    radius: 2,
    name: "Bételgeuse",
    color: "orange",
    type: "Étoile géante rouge",
    planets: 1,
    description: "Une supergéante rouge de la constellation d’Orion."
  },
  {
    x: 200,
    y: 350,
    radius: 2.2,
    name: "Rigel",
    color: "lightblue",
    type: "Étoile bleue",
    planets: 3,
    description: "Étoile brillante d’Orion, très massive et chaude."
  }
);
  }

drawSky() {
  const time = Date.now() * 0.002; // Temps pour animer en douceur

  this.ctx.fillStyle = "black";
  this.ctx.fillRect(0, 0, this.width, this.height);

  this.objects.forEach(obj => {
    const flicker = obj.baseAlpha + 0.2 * Math.sin(time + obj.phase);

    this.ctx.beginPath();
    this.ctx.globalAlpha = flicker;
    this.ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = obj.color;
    this.ctx.fill();

    this.ctx.globalAlpha = 1.0;

    if (obj.name) {
      this.ctx.fillStyle = "lightgray";
      this.ctx.font = "12px Arial";
      this.ctx.fillText(obj.name, obj.x + 8, obj.y);
    }
  });
}
handleClick(event) {
  const rect = this.canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const clicked = this.objects.find(obj => {
    const dx = obj.x - x;
    const dy = obj.y - y;
    return Math.sqrt(dx * dx + dy * dy) < obj.radius + 3 && obj.name;
  });

  if (clicked) {
    document.getElementById("fiche").style.display = "block";
    document.getElementById("fiche-nom").textContent = clicked.name;
    document.getElementById("fiche-type").textContent = clicked.type || "Inconnu";
    document.getElementById("fiche-planetes").textContent = clicked.planets || "0";
    document.getElementById("fiche-description").textContent = clicked.description || "Aucune description.";
  }
}
}