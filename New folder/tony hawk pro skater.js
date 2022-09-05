//create a Tony Hawk Pro Skater constructor that makes skating game character with 4 properties and 3 methods

function ProSkater(skateMake, skateModel, numOfWheels, skateShoeMake) {
  this.make = skateMake;
  this.model = skateModel;
  this.wheels = numOfWheels;
  this.shoes = skateShoeMake;
  this.jump = function () {
    alert('down up down  ');
  };
}
