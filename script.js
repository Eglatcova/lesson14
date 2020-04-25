'use srtict';

const baseDiv = document.querySelector('.base');

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.create = function () {
  let sim = this.selector.slice(0, 1),
    addStyle = function (el) {
      el.style.height = this.height;
      el.style.width = this.width;
      el.style.background = this.bg;
      el.style.fontSize = this.fontSize;
    };

  if (sim === '.') {
    const divClass = document.createElement('div');
    divClass.setAttribute('class', 'block');
    divClass.textContent = 'Привет!';
    baseDiv.append(divClass);
    
    addStyle.call(elem, divClass);
  }

  if (sim === '#') {
    const divId = document.createElement('p');
    divId.setAttribute('id', 'block');
    divId.textContent = 'Привет!';
    baseDiv.append(divId);
    addStyle.call(elem, divId);
  }
};

let elem = new DomElement('.gym', '400px', '500px', 'red', '14px');

elem.create();