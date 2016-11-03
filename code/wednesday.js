// var day = 'Wednesday',
//     wednesday = 'wednesday';
//
// // How many equals signs does it take to screw your code?
// // if (day = 'wednesday') {
// //   console.log('Test 1: Well lookee there, it\'s ' + day);
// // }
//
// // The case of the failing "if" statement
// // if (day == 'Wednesday') {
// //   console.log('Test 2: Lo and behold, it\'s ' + day);
// // }
//
// // // Equals thrice, test once
// // if (day === 'Wednesday') {
// //   console.log('Test 3: Huh. It\'s ' + day);
// // }
//
// // TODO: After commenting out the 3 conditionals above,
// //       uncomment this code and run it.
// // day = 'Sunday';
// // if (day === 'Wednesday') {
// //   console.log('Hump day!');
// // } else if ( day === 'Saturday' || day === 'Sunday' ) {
// //   console.log('It\'s the weekend');
// // } else {
// //   console.log('Whistle while you work!')
// // }
//
// // TODO: Add an "else if" block to check whether it's Saturday
// //       and console.log() a different statement for the weekend.
//
//
//
// // TODO: Modify the conditional for Saturday to check whether
// //       the day is Saturday OR Sunday.
//
//
//
// // TODO: Add an "else if" block to check whether it's Monday
// //       and console.log() a different statement for Monday.
//
//
//
// // TODO: Change the string that's assigned into the day
// //       variable and run the code several times.
//
//
//
// var days = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday'
// ];
//
// // console.log('index 0: ' + days[0]);
// // console.log('index 1: ' + days[1]);
// // console.log('index 2: ' + days[2]);
// // console.log('index 6: ' + days[6]);
// // console.log('index 7: ' + days[7]);
// // console.log('index 20: ' + days[20]);
//
// // // TODO: DRY it up!
// // for (var i = 0; i < days.length; i++) {
// //   var displayIndex = i + 1;
// //   console.log('Day # ' + displayIndex + ': ' + days[i]);
// // }
//
//
// // TODO: Replace the "6" in "i < 6" with the length of the array
//
//
// // TODO: On each iteration, use our randomly generated dayNumber
// //       to get a day from the days array, and console.log the
// //       name of the day.
// var max = 100,
//     result;
// for (var j = 0; j < max; j++) {
//   dayNumber = Math.floor(Math.random() * days.length);
//   console.log('Day of the week: ' + days[dayNumber]);
// }
//

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
Dog.prototype = new Animal('canid', 4);
Dog.prototype.announceMyself = function () {
  return 'Greetings, I am ' + this.name;
};

Human.prototype = new Animal('homo sapiens', 2);

var fido = new Dog('Fido');
console.log(fido.announceMyself());

var fifi = new Dog('Fifi');
var rex = new Dog('Rex');






function barkLoudly() {
  return 'WOOF!!!';
}

function Animal(species, numberLegs) {
  this.species = species;
  this.numberLegs = numberLegs;
}

function Human() {

}

function Dog(name) {
  this.name = name;
  this.greetFriend = function(friendName) {
    return 'Woof woof ' + friendName + '!!';
  }
  this.fetch = function(thing) {
    return 'Here, I brought you ' + thing;
  }
}
