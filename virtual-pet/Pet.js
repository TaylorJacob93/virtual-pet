const MAX_FITNESS = 10;
const MIN_HUNGER = 0;

function Pet(name){
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}
Pet.prototype ={
  get isAlive(){
  return this.age < 30 && this.hunger > 10 && this.fitness < 0;
}
}
Pet.prototype.growUp = function() {
  this.age += 1;
  this.fitness -= 3;
  this.hunger += 5;

  if(this.age > 30){
    throw 'Your pet is no longer alive :(';
  }
}
Pet.prototype.walk = function(){
  if(this.fitness >= 6){
    this.fitness = MAX_FITNESS;
  }
  if(this.fitness > 0 && this.fitness < 6){
    this.fitness += 4;
  }
  if(this.fitness < 0){
    throw 'Your pet is no longer alive :(';
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
  if(this.fitness <= 3 && this.hunger >= 5){
    return "I am hungry AND I need a walk"
  }
  if(this.fitness <= 3){
    return "I need a walk"
  }
  if (this.hunger >= 5){
    return "I am hungry"
  }
  if(this.isAlive){
    return "Your pet is no longer alive :("
  }
return "I feel great!";
}

module.exports = Pet;