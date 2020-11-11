/* eslint-disable no-undef */
'use strict';

const script = document.createElement('script');

// eslint-disable-next-line max-len
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCvzEBq0Js5PxaHTbgmmAm2Ejeo1pC9cgY&callback=initMap';
script.defer = true;

window.initMap = function() {
  const position1 = {
    lat: 50.443205,
    lng: 30.497723,
  };

  const map1 = new google.maps.Map(document.getElementById('map1'), {
    center: position1,
    zoom: 13,
    disableDefaultUI: true,
  });

  // eslint-disable-next-line no-unused-vars
  const marker1 = new google.maps.Marker({
    position: position1,
    map: map1,
  });

  const position2 = {
    lat: 50.443205,
    lng: 30.497723,
  };

  const map2 = new google.maps.Map(document.getElementById('map2'), {
    center: position2,
    zoom: 13,
    disableDefaultUI: true,
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
    // responsive: [
    //   {
    //     breakpoint: '1600',
    //     settings: {
    //       slidesToShow: '3',
    //     },
    //   },
    // ],
  });

  $('.reviews__slider').slick({
    dots: true,
    variableWidth: true,
    // responsive: [
    //   {
    //     breakpoint: '440',
    //     settings: {
    //       autoplay: true,
    //     },
    //   },
    // ],
  });

  $(function() {
    $(document).on('click', '.mobileMenu__close', function(e) {
      e.preventDefault();
      $(this).parent().parent().removeClass('loaded');
    });

    $(document).on('click', '.mobileMenu__link', function(e) {
      $(this).parent().parent().parent().removeClass('loaded');
    });

    $(document).on('click', '.top__menu', function(e) {
      e.preventDefault();
      $('.mobileMenu').addClass('loaded');
    });
  });
});
