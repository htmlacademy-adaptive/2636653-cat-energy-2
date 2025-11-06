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

  const myPlacemark = new ymaps.Placemark([59.938719, 30.323037], {
    hintContent: 'Наш офис',
    balloonContent: 'ул. Большая Конюшенная, д. 19/8'
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../images/logo-pic-tablet.svg',
    iconImageSize: getIconSize(),
    iconImageOffset: getIconOffset()
  });

  map.geoObjects.add(myPlacemark);
}
