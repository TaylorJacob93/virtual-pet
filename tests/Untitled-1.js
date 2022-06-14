const Pet = require('./Pet.js'); 
describe('Pet constructor', () => { 
    it('returns an object', () => { 
        expect(new Pet()).toBeInstanceOf(Object); 
        }); 
    });