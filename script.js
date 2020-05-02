'use srtict';

class DomElement {
  constructor(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }

  create() {
    let sim = this.selector.slice(0, 1),
      addStyle = function (el) {
        el.style.height = this.height;
        el.style.width = this.width;
        el.style.background = this.bg;
        el.style.fontSize = this.fontSize;
        el.style.position = 'absolute';
      };

    if (sim === '.') {
      const divClass = document.createElement('div');
      divClass.setAttribute('class', 'block');
      divClass.textContent = 'Привет!';
      document.body.append(divClass);
      addStyle.call(elem, divClass);
    }

    if (sim === '#') {
      const divId = document.createElement('p');
      divId.setAttribute('id', 'block');
      divId.textContent = 'Привет!';
      baseDiv.append(divId);
      addStyle.call(elem, divId);
    }
  }
};

let elem = new DomElement('.gym', '100px', '100px', 'red', '14px');

/////////////////////////////////////

document.addEventListener('DOMContentLoaded', (event) => {
  elem.create();

  let newDiv = document.querySelector('.block');
  let numDown = 0,
    numLeft = 0;
  const go = (event) => {

    switch (event.code) {
      case 'ArrowDown':
        numDown += 10;
        newDiv.style.marginTop = numDown.toString() + 'px';
        break;
      case 'ArrowUp':
        numDown -= 10;
        newDiv.style.marginTop = numDown.toString() + 'px';
        break;
      case 'ArrowRight':
        numLeft += 10;
        newDiv.style.marginLeft = numLeft.toString() + 'px';
        break;
      case 'ArrowLeft':
        numLeft -= 10;
        newDiv.style.marginLeft = numLeft.toString() + 'px';
        break;

    }
  };

  document.addEventListener('keydown', go);

});

