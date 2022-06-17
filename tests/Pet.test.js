const Pet = require('../virtual-pet/Pet.js');



describe('Pet constructor', () => { 
    it('returns an object', () => { 
        expect(new Pet()).toBeInstanceOf(Object); 
        }); 
    it('sets the name property', () => {
        const pet = new Pet('Fido');
    
        expect(pet.name).toEqual('Fido');
      });
      it('sets the initial age to 0', () => {
        const pet = new Pet('Fido');
    
        expect(pet.age).toEqual(0);
      });
    });

describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
    it('decreases fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();

    expect(pet.fitness).toEqual(7);
    });
  });
describe('walk', () => {
    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 8;
        pet.walk();
    
        expect(pet.fitness).toEqual(10);
      });
    });
describe('feed', () => {
    it('decreases instances hunger by 3', () => { 
        const pet = new Pet('Fido');
        pet.hunger = 7;
        pet.feed();

    expect(pet.hunger).toBe(4);
    });
});
describe('checkUp', () => {
    it('checks to see if fit and/or hungry combined',() => {
        const pet = new Pet('Fido');
        pet.hunger = 7;
        pet.fitness = 2;
    
    expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
    });
    it('checks to see if fit and/or hungry combined',() => {
        const pet = new Pet('Fido');
        pet.hunger = 4;
        pet.fitness = 7;
    
    expect(pet.checkUp()).toBe("I feel great!");
    });
    it('checks to see if fit and/or hungry combined',() => {
        const pet = new Pet('Fido');
        pet.hunger = 5;
        pet.fitness = 5;
    
    expect(pet.checkUp()).toBe("I am hungry");
    });
    it('checks to see if fit and/or hungry combined',() => {
        const pet = new Pet('Fido');
        pet.hunger = 3;
        pet.fitness = 2;
    
    expect(pet.checkUp()).toBe("I need a walk");
    });
    it('checks to see if pet is alive with the isAlive function', () => {
        const pet = new Pet('Fido');
        pet.hunger = 30;
    })
});
describe('isAlive', () => {
    it("if the pet's age is 30 or more, it should return false.", () => {
        const pet = new Pet('Fido');
        pet.age = 30;

    expect(pet.isAlive).toBe(false);
     })
     it("if the pet's fitness is 0 or less, it should return false.", () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;
        
    expect(pet.isAlive).toBe(false);
     })
     it("if the pet's hunger is 10 or more", () => {
        const pet = new Pet('Fido');
        pet.hunger = 11;
        
    expect(pet.isAlive).toBe(false);
     })
})


