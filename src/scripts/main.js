/* eslint-disable no-undef */
'use strict';

const script = document.createElement('script');

// eslint-disable-next-line max-len
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCvzEBq0Js5PxaHTbgmmAm2Ejeo1pC9cgY&callback=initMap';
script.defer = true;

window.initMap = function() {
  const position1 = {
    lat: 49.846797,
    lng: 24.029588,
  };

  const map1 = new google.maps.Map(document.getElementById('map1'), {
    center: position1,
    zoom: 16,
    disableDefaultUI: true,
    styles: [
      {
        'featureType': 'all',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#ebe3cd',
          },
        ],
      },
      {
        'featureType': 'all',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#523735',
          },
        ],
      },
      {
        'featureType': 'all',
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'color': '#f5f1e6',
          },
        ],
      },
      {
        'featureType': 'administrative',
        'elementType': 'geometry.stroke',
        'stylers': [
          {
            'color': '#c9b2a6',
          },
        ],
      },
      {
        'featureType': 'administrative',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'administrative.locality',
        'elementType': 'labels.text',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'administrative.neighborhood',
        'elementType': 'labels.text',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'administrative.land_parcel',
        'elementType': 'geometry.stroke',
        'stylers': [
          {
            'color': '#dcd2be',
          },
        ],
      },
      {
        'featureType': 'administrative.land_parcel',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#ae9e90',
          },
        ],
      },
      {
        'featureType': 'landscape',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'landscape.natural',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#dfd2ae',
          },
        ],
      },
      {
        'featureType': 'poi',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#dfd2ae',
          },
        ],
      },
      {
        'featureType': 'poi',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'poi',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#93817c',
          },
        ],
      },
      {
        'featureType': 'poi.park',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#a5b076',
          },
        ],
      },
      {
        'featureType': 'poi.park',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#447530',
          },
        ],
      },
      {
        'featureType': 'road',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#f5f1e6',
          },
        ],
      },
      {
        'featureType': 'road',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'simplified',
          },
        ],
      },
      {
        'featureType': 'road.highway',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#f8c967',
          },
        ],
      },
      {
        'featureType': 'road.highway',
        'elementType': 'geometry.stroke',
        'stylers': [
          {
            'color': '#e9bc62',
          },
        ],
      },
      {
        'featureType': 'road.highway',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off,',
          },
        ],
      },
      {
        'featureType': 'road.highway.controlled_access',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#e98d58',
          },
        ],
      },
      {
        'featureType': 'road.highway.controlled_access',
        'elementType': 'geometry.stroke',
        'stylers': [
          {
            'color': '#db8555',
          },
        ],
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#fdfcf8',
          },
        ],
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'hue': '#ff6300',
          },
          {
            'lightness': '-25',
          },
        ],
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'on',
          },
        ],
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'labels.text',
        'stylers': [
          {
            'visibility': 'on',
          },
        ],
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'labels.icon',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'road.local',
        'elementType': 'geometry',
        'stylers': [
          {
            'hue': '#ff9c00',
          },
          {
            'gamma': '.9',
          },
          {
            'lightness': '-24',
          },
        ],
      },
      {
        'featureType': 'road.local',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#806b63',
          },
        ],
      },
      {
        'featureType': 'transit',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'transit.line',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#dfd2ae',
          },
        ],
      },
      {
        'featureType': 'transit.line',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#8f7d77',
          },
        ],
      },
      {
        'featureType': 'transit.line',
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'color': '#ebe3cd',
          },
        ],
      },
      {
        'featureType': 'transit.station',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#dfd2ae',
          },
        ],
      },
      {
        'featureType': 'water',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#b9d3c2',
          },
        ],
      },
      {
        'featureType': 'water',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#92998d',
          },
        ],
      },
    ],
  });

  // eslint-disable-next-line no-unused-vars
  const marker1 = new google.maps.Marker({
    position: position1,
    map: map1,
  });

  const position2 = {
    lat: 49.227194,
    lng: 16.647531,
  };

  const map2 = new google.maps.Map(document.getElementById('map2'), {
    center: position2,
    zoom: 16,
    disableDefaultUI: true,
    styles: [
      {
        'featureType': 'all',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#ebe3cd',
          },
        ],
      },
      {
        'featureType': 'all',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#523735',
          },
        ],
      },
      {
        'featureType': 'all',
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'color': '#f5f1e6',
          },
        ],
      },
      {
        'featureType': 'administrative',
        'elementType': 'geometry.stroke',
        'stylers': [
          {
            'color': '#c9b2a6',
          },
        ],
      },
      {
        'featureType': 'administrative',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'administrative.locality',
        'elementType': 'labels.text',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'administrative.neighborhood',
        'elementType': 'labels.text',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'administrative.land_parcel',
        'elementType': 'geometry.stroke',
        'stylers': [
          {
            'color': '#dcd2be',
          },
        ],
      },
      {
        'featureType': 'administrative.land_parcel',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#ae9e90',
          },
        ],
      },
      {
        'featureType': 'landscape',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'landscape.natural',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#dfd2ae',
          },
        ],
      },
      {
        'featureType': 'poi',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#dfd2ae',
          },
        ],
      },
      {
        'featureType': 'poi',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'poi',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#93817c',
          },
        ],
      },
      {
        'featureType': 'poi.park',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#a5b076',
          },
        ],
      },
      {
        'featureType': 'poi.park',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#447530',
          },
        ],
      },
      {
        'featureType': 'road',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#f5f1e6',
          },
        ],
      },
      {
        'featureType': 'road',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'simplified',
          },
        ],
      },
      {
        'featureType': 'road.highway',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#f8c967',
          },
        ],
      },
      {
        'featureType': 'road.highway',
        'elementType': 'geometry.stroke',
        'stylers': [
          {
            'color': '#e9bc62',
          },
        ],
      },
      {
        'featureType': 'road.highway',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off,',
          },
        ],
      },
      {
        'featureType': 'road.highway.controlled_access',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#e98d58',
          },
        ],
      },
      {
        'featureType': 'road.highway.controlled_access',
        'elementType': 'geometry.stroke',
        'stylers': [
          {
            'color': '#db8555',
          },
        ],
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#fdfcf8',
          },
        ],
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'hue': '#ff6300',
          },
          {
            'lightness': '-25',
          },
        ],
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'on',
          },
        ],
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'labels.text',
        'stylers': [
          {
            'visibility': 'on',
          },
        ],
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'labels.icon',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'road.local',
        'elementType': 'geometry',
        'stylers': [
          {
            'hue': '#ff9c00',
          },
          {
            'gamma': '.9',
          },
          {
            'lightness': '-24',
          },
        ],
      },
      {
        'featureType': 'road.local',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#806b63',
          },
        ],
      },
      {
        'featureType': 'transit',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'transit.line',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#dfd2ae',
          },
        ],
      },
      {
        'featureType': 'transit.line',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#8f7d77',
          },
        ],
      },
      {
        'featureType': 'transit.line',
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'color': '#ebe3cd',
          },
        ],
      },
      {
        'featureType': 'transit.station',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#dfd2ae',
          },
        ],
      },
      {
        'featureType': 'water',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#b9d3c2',
          },
        ],
      },
      {
        'featureType': 'water',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#92998d',
          },
        ],
      },
    ],
  });

  // eslint-disable-next-line no-unused-vars
  const marker2 = new google.maps.Marker({
    position: position2,
    map: map2,
  });
};

document.head.appendChild(script);

$(document).ready(function() {
  $('.gallery__slider').slick({
    dots: true,
    slidesToShow: '4',
    autoplay: true,
    responsive: [
      {
        breakpoint: '440',
        settings: {
          autoplay: true,
          arrows: false,
        },
      },
    ],
  });

  $('.reviews__slider').slick({
    dots: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: '440',
        settings: {
          autoplay: true,
          arrows: false,
        },
      },
    ],
  });

  $('.reviews__slider2').slick({
    dots: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: '440',
        settings: {
          autoplay: true,
          arrows: false,
        },
      },
    ],
  });

  $('.whyWe__slider').slick({
    dots: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: '440',
        settings: {
          autoplay: true,
          arrows: false,
        },
      },
    ],
  });

  $(function() {
    $(document).on('click', '.contacts__item2', function(e) {
      e.preventDefault();
      $('.contacts__item1').addClass('contacts__item--none');
      $('.contacts__item2').removeClass('contacts__item--none');
      $('#map1').addClass('contacts__map--none');
      $('#map2').removeClass('contacts__map--none');
    });

    $(document).on('click', '.contacts__item1', function(e) {
      e.preventDefault();
      $('.contacts__item2').addClass('contacts__item--none');
      $('.contacts__item1').removeClass('contacts__item--none');
      $('#map2').addClass('contacts__map--none');
      $('#map1').removeClass('contacts__map--none');
    });

    $(document).on('click', '.vacancy__bottom', function(e) {
      e.preventDefault();
      $('.vacancy__list').addClass('vacancy__list--active');
      $('.vacancy__bottom').addClass('vacancy__bottom--active');
      // $('.contacts__item2').removeClass('contacts__item--none');
      // $('#map1').addClass('contacts__map--none');
      // $('#map2').removeClass('contacts__map--none');
    });
  });
});
