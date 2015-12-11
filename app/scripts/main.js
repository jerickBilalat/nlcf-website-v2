/*global $ */
'use strict';

function tabs() {
  $('.accordion-tabs').each(function() {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
  return false;
}

function navToggle() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass('show');
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
  return false;
}

function featureIconsAnimation() {
  var iconsArray = [],
      icons = $('.grid-item').find('img'),
      randomNum = Math.floor(Math.random() * icons.length);

      icons.each(function() {
        iconsArray.push(this);
      });

      $(iconsArray).each(function() {
          var item = $(this);
          if (item.hasClass('animated bounceIn')) {
            item.removeClass('animated bounceIn');
          }
        })

      if (iconsArray.length > 1) {
        var elem = $(iconsArray[randomNum]);
        elem.addClass('animated bounceIn');
      };
  return false;
}


function accordion() {
  $('.js-accordion-trigger').bind('click', function(e){
    $(this).find('.accordion').find('ul').addClass('is-expanded').slideToggle('fast');
    $(this).parent().toggleClass('is-expanded');
    e.preventDefault();
  });
}


function loadSermon() {
  $('.submenu a').on('click', function() {
    var dataFile= $(this).data('file'),
        newHtml = '../' + dataFile + '.html';
    $.ajax(newHtml, {
      success: function(response) {
        $('.hero-copy').html('').html(response);
      },
      error: function() {
        alert("Unable to complete request. Please try again.")
      }
    });
  });
}

$(document).ready(function () {
  tabs();
  navToggle();
  setInterval(function(){featureIconsAnimation()}, 2000);
  accordion();
  loadSermon();
});
