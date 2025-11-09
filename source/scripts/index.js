const toggle = document.querySelector('.navigation__toggle');
const nav = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
  nav.classList.toggle('navigation--open');
  nav.classList.toggle('navigation--close');
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header-index, .header-catalog');
  const navigation = document.querySelector('.navigation');

  if (!header || !navigation) {
    console.error();
    return;
  }

  console.log();

  header.classList.remove('header--nojs');
  navigation.classList.remove('navigation--nojs');
});

ymaps.ready(init);

function init() {
  const mapContainer = document.getElementById('map');

  function setMapHeight() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1440) {
      mapContainer.style.height = '400px';
    } else if (screenWidth > 767) {
      mapContainer.style.height = '400px';
    } else {
      mapContainer.style.height = '362px';
    }
  }

  function getIconSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1440) {
      return [113, 106];
    } else if (screenWidth >= 768) {
      return [113, 106];
    } else {
      return [56, 52];
    }
  }

  function getIconOffset() {
    const size = getIconSize();
    return [-size[0] / 2, -size[1]];
  }

  // Устанавливаем высоту перед созданием карты
  setMapHeight();

  // Создаем карту ОДИН раз
  const map = new ymaps.Map('map', {
    center: [59.938719, 30.323037],
    zoom: 14
  });

  // Создаем метку
  const myPlacemark = new ymaps.Placemark([59.938719, 30.323037], {
    hintContent: 'Наш офис',
    balloonContent: 'ул. Большая Конюшенная, д. 19/8'
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../images/logo-pic-tablet.svg',
    iconImageSize: getIconSize(),
    iconImageOffset: getIconOffset()
  });

  // Добавляем метку на карту
  map.geoObjects.add(myPlacemark);

  // Обработчик ресайза
  window.addEventListener('resize', setMapHeight);
}
