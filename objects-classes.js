
var collar = true;

var dog = {
  name: 'Fido',
  age: 8,
  bark: function() {
    return 'woof';
  },
  collar: collar
};

var barkQuietly = function () {
  return 'woooof';
};

function barkLoudly() {
  return 'WOOF!!!';
}

function Dog(name) {
  this.name = name;
  this.announceMyself = function () {
    return 'Greetings, I am ' + this.name;
  }
}

var fido = new Dog('Fido');
console.log(fido.announceMyself());
