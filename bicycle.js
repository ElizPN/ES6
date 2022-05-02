// without keyword function.
//We dont pass the function as value of property.
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);

// with keyword function. Traditional way.
const bicycle1 = {
  gear: 2,
  setGear: function (newGear) {
    this.gear = newGear;
  },
};

bicycle1.setGear(3);
console.log(bicycle1.gear);
