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
describe('walking with fitness < 5', () => {
    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 8;
        pet.walk();
    
        expect(pet.fitness).toEqual(10);
      });
    });


