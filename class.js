var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet; // create a constructor function in which describe rools creating
};
var zeus = new SpaceShuttle("Jupiter");

class Vegetable {
  constructor(name) {
    this.name = name; // this
  }
}

const carrot = new Vegetable("carrot"); // creating new
console.log(carrot.name); // Should display 'carrot'
