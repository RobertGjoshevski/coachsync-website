(function () {
  'use strict';

  var config = window.COACHSYNC_CONFIG || {};

  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var mobileNav = document.querySelector('.nav-mobile');
    if (!toggle || !mobileNav) {
      return;
    }

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      mobileNav.classList.toggle('is-open', !expanded);
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
      });
    });
  }

  function initStoreButtons() {
    var appStoreUrl = config.appStoreUrl || '';
    var playStoreUrl = config.playStoreUrl || '';

    document.querySelectorAll('[data-store="appstore"]').forEach(function (el) {
      if (appStoreUrl) {
        el.href = appStoreUrl;
        el.removeAttribute('aria-disabled');
        el.classList.remove('is-disabled');
      } else {
        el.href = '#';
        el.setAttribute('aria-disabled', 'true');
        el.classList.add('is-disabled');
        el.addEventListener('click', function (e) {
          e.preventDefault();
        });
      }
    });

    document.querySelectorAll('[data-store="playstore"]').forEach(function (el) {
      if (playStoreUrl) {
        el.href = playStoreUrl;
        el.removeAttribute('aria-disabled');
        el.classList.remove('is-disabled');
      } else {
        el.href = '#';
        el.setAttribute('aria-disabled', 'true');
        el.classList.add('is-disabled');
        el.addEventListener('click', function (e) {
          e.preventDefault();
        });
      }
    });
  }

  function initContactEmail() {
    var email = config.contactEmail;
    if (!email) {
      return;
    }

    document.querySelectorAll('[data-contact-email]').forEach(function (el) {
      if (el.tagName === 'A') {
        el.href = 'mailto:' + email;
        if (!el.textContent.trim()) {
          el.textContent = email;
        }
      } else {
        el.textContent = email;
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initStoreButtons();
    initContactEmail();
  });
})();
