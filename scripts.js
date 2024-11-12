// Script for Map
// CENTER (Norway)
const centerLat = 60.472;  // Latitude for Norway's center
const centerLong = 8.468;  // Longitude for Norway's center



// DATA: ARRAY OF PLACES
const places = [
  {
    name: "Kontoret i Fredrikstad",
    lat: 59.2128,
    long: 10.9309,
    image: "images/pristina.png", // Path to image for FC Pristina
    type: "football",
    zoomLevel: 16 // Custom zoom level
  },
  
   
  {
    name: "Kontoret på remmen",
    lat: 59.1292,
    long: 11.3528,
    image: "pictures/martinhi.jpg", // Path to image for HSS Volleyball
    type: "volleyball",
    zoomLevel: 15 // Custom zoom level
  },
  
  {
    name: "Kristiansand LSU",
    lat: 58.1638,    
    long:  8.0030, 
    image: "images/kvik_halden.png", // Path to image for Kvik Halden
    type: "football",
    zoomLevel: 16 // Custom zoom level
  },
 {
    name: "Trondheim representant for Hiøf",
    lat: 63.4195,
    long: 10.4020,
    image: "images/idd.png", // Path to image for Idd Idrettsklubb
    type: "football",
    zoomLevel: 15 // Custom zoom level
  },
  {
    name: "Drammen NSO konferanse",
    lat:59.7438,
    long: 10.1936,
    image: "images/aremark.png", // Path to image for Aremark Fotball Klubb
    type: "football",
    zoomLevel: 15 // Custom zoom level
  },
 
];

let map = L.map("map", {
  center: [centerLat, centerLong],
  zoom: 5,  // Lower zoom level for broader view of Norway
  scrollWheelZoom: false // Disable scroll to avoid accidental zooming
});

// SET MAP CONSTRUCTOR
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// CREATE ICONS
const footballIcon = L.icon({
  iconUrl: "pictures/ektemartin.jpg", // Specify the correct path for the football icon
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});

const volleyballIcon = L.icon({
  iconUrl: "pictures/ektemartin.jpg", // Specify the correct path for the volleyball icon
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});

// Prepare navigation HTML
let navHTML = "";

// Loop through places
places.forEach((place) => {
  // Select icon based on type
  const icon = place.type === "football" ? footballIcon : volleyballIcon;

  // Place markers
  L.marker([place.lat, place.long], { icon: icon })
    .addTo(map)
    .bindPopup(`
      <div>
        <h3>${place.name}</h3>
        <img src="${place.image}" alt="${place.name} logo" style="width:100px; height:auto;"/>
      </div>
    `); // Include image in popup

  // Build navigation
  navHTML += `
    <article>
      <h3>${place.name}</h3>
      <button onclick="map.flyTo([${place.lat}, ${place.long}], ${place.zoomLevel})">Vis på kart</button>
    </article>
  `;
});

// Add HTML to nav
document.getElementById("klubbkart").innerHTML = navHTML;