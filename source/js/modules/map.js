const center = [59.938631, 30.323037];
const iconImageSize = [18, 22];
const zoom = 16;

export const initMap = () => {
  const mapElement = document.querySelector('#map');
  if (!mapElement) {
    return;
  }

  const scriptElement = document.createElement('script');
  scriptElement.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
  scriptElement.addEventListener('load', () => {
    if (typeof ymaps !== 'undefined') {
      ymaps.ready(() => {
        const map = new ymaps.Map('map', {
          center,
          controls: [],
          zoom,
        });
        map.geoObjects.add(new ymaps.Placemark(map.getCenter(), [
          {
            hintContent: 'г. Санкт Петербург, ул. Большая Конюшенная, 19/8',
          },
          {
            iconImageHref: 'img/sprite.svg#icon-pin',
            iconImageSize,
            iconLayout: 'default#image',
            iconShadow: false,
          }
        ]));
        map.behaviors.disable('scrollZoom');
      });
    }
  });
  document.body.append(scriptElement);
};
