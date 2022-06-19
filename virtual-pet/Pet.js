const MAX_FITNESS = 10;
const FITNESS_INCREMENT = 4;
const FITNESS_DECREMENT = 3;
const MIN_FITNESS = 0;
const MAX_PREFITNESS_POINT = 6;
const MIN_HUNGER = 0;
const MAX_HUNGER = 10;
const MAX_AGE = 30;
const MIN_AGE = 0;
const AGE_INCREMENET = 1;

const HUNGER_INCREMENT = 5;


function Pet(name){
  this.name = name;
  this.age = MIN_AGE;
  this.hunger = MIN_HUNGER;
  this.fitness = MAX_FITNESS;
}
Pet.prototype = {
  get isAlive() {
    return this.age < MAX_AGE && this.hunger < MAX_HUNGER && this.fitness > MIN_FITNESS;
  }
};
Pet.prototype.growUp = function() {
  this.age += AGE_INCREMENET;
  this.fitness -= FITNESS_DECREMENT;
  this.hunger += HUNGER_INCREMENT;

  if (!this.isAlive) {
    throw ('Your pet is no longer alive :(');
  }
}
Pet.prototype.walk = function(){
  if (!this.isAlive) {
    throw ('Your pet is no longer alive :(');
  }
  if(this.fitness >= MAX_PREFITNESS_POINT){
    this.fitness = MAX_FITNESS;
  }
  if(this.fitness > MIN_FITNESS && this.fitness < MAX_FITNESS){
    this.fitness += FITNESS_INCREMENT;
  }
}
Pet.prototype.feed = function (){
  if(this.hunger <= 3){
    this.hunger = MIN_HUNGER;
  }
  else{
    this.hunger -= 3;
  }
}

Pet.prototype.checkUp = function (){
  if (!this.isAlive) {
    throw('Your pet is no longer alive :(');
  }
  if(this.fitness <= 3 && this.hunger >= 5){
    return "I am hungry AND I need a walk"
  }
  if(this.fitness <= 3){
    return "I need a walk"
  }
  if (this.hunger >= 5){
    return "I am hungry"
  }
return "I feel great!";
}

module.exports = Pet;