import eases from 'eases';

if (typeof(window) === "object") {
  window.Ease = eases;
}

module.exports = eases;
