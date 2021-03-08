class Scroll{
  constructor(set){ // set это объект с ключами
    if(typeof set.el == 'string'){
      this.el = document.querySelector(set.el);
    } else if(set.el instanceof HTMLElement){
      this.el = set.el;
    }
    this.top = set.top;
    this.unit = set.unit;
    this.el.style.position = 'fixed';
    this.el.style.top = this.scroll();
    this.el.style.background = set.bg;

    window.addEventListener('scroll', ()=> this.scroll());
    // добавили событие при скроле и вызвали функцию 
    // pageYOffset расстояние от верха до нашего скролла

  }
  scroll(){
    this.window = this.scrollNumber();
    if (this.window - pageYOffset > 0) {
      this.el.style.opacity = (this.window - pageYOffset) / 100;
      this.el.style.top = this.window - pageYOffset + 'px';
    } else{
      this.el.style.top = 0;
    }
  }
  scrollNumber(){
    if (this.unit == 'px') {
      return this.top >= 0 ? this.top : 0;
    } else if (this.unit == '%' || this.unit == undefined){
      return this.el.clientHeight;
    }
  }
}

const myScroll = new Scroll({
  el: '.header__nav',
  top: 100,
  unit: 'px',
  bg: 'goldenrod',
});


// со сттрелочной функцией => выходит сразу с return

const spidor = document.querySelector('.spidor');

function randomHeight() {
  let randHeight = Math.floor((Math.random() * 200) + 200);
  return randHeight;
}

var height = randomHeight();

function randomWidth() {
  let randWidth = Math.floor((Math.random() * 250) + 350);
  return randWidth;
}

var width = randomWidth();

  spidor.addEventListener('mouseenter', function spidoras(){
    spidor.style.top = height + 'px';
    spidor.style.right = width + 'px';
  });





