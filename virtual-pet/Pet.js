const MAX_FITNESS = 10;
const MIN_HUNGER = 0;

function Pet(name){
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}
Pet.prototype.growUp = function() {
  this.age += 1;
  this.fitness -= 3;
};
Pet.prototype.walk = function(){
  if(this.fitness >= 6){
    this.fitness = MAX_FITNESS;
  }
  else{
    this.fitness += 4;
  }
}
Pet.prototype.feed = function (){
  if(this.hunger <= 3){
    this.fitness = MIN_HUNGER;
  }
  else{
    this.hunger -= 3;
  }
}

module.exports = Pet;