
const toggle = document.querySelector('.navigation__toggle');
const nav = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
  nav.classList.toggle('navigation--open');
  nav.classList.toggle('navigation--close');
});


ymaps.ready(init);

function init() {
  const map = new ymaps.Map('map', {
    center: [59.938719, 30.323037],
    zoom: 14
  });

  const myPlacemark = new ymaps.Placemark([59.938719, 30.323037], {
    hintContent: 'Наш офис',
    balloonContent: 'ул. Большая Конюшенная, д. 19/8'
  }, {
    // Опции иконки
    iconLayout: 'default#image',
    iconImageHref: '..//images/logo-pic-mobile.svg', // твоя кастомная иконка
    iconImageSize: [40, 40],
    iconImageOffset: [-20, -40]
  });

  map.geoObjects.add(myPlacemark);
}
