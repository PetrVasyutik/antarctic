import L from 'leaflet';

const ZOOM = 16;
const WIDTH = 18;
const HEIGHT = 22;
const WIDTH_ANCHOR = 4;
const HEIGHT_ANCHOR = 24;
const BASE_COORDS = {
  lat: 59.938631,
  lng: 30.323037
};

export const initMap = () => {
  const mapElement = document.querySelector('#map');
  if (!mapElement) {
    return;
  }

  // Добавляем карту
  const map = L.map('map', { scrollWheelZoom: false }).setView(BASE_COORDS, ZOOM);

  // Добавляем слой с нужной картой
  L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    minZoom: 10,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  }).addTo(map);

  // Создаем главную метку
  const pinIcon = L.marker(BASE_COORDS, {
    icon: L.icon({
      iconUrl: 'img/svg/icon-pin.svg',
      iconSize: [WIDTH, HEIGHT],
      iconAnchor: [WIDTH_ANCHOR, HEIGHT_ANCHOR]
    })
  });

  // Добавляем метку на карту
  pinIcon.addTo(map);
  mapElement.querySelector('.leaflet-control-attribution').style.visibility = 'hidden';
};
