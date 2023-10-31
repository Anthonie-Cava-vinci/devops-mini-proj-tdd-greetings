const greet = require('../greet');

describe('greet', () => {
  it('1. Greet a person', () => {
    expect(greet('Jean-Kevin')).toBe('Hello, Jean-Kevin.');
  });

  it('2. Handle null, undefined, or " "', () => {
    expect(greet(null)).toBe('Hello, my friend.');
    expect(greet(undefined)).toBe('Hello, my friend.');
    expect(greet(' ')).toBe('Hello, my friend.');
    
    expect(greet('')).toBe('Hello, my friend.');
  });

  it('3. Handle uppercase names', () => {
    expect(greet('KENOBI')).toBe('HELLO, KENOBI!');
  });

  it('4. greet two people', () => {
    expect(greet(['Kratos', 'Thanathos'])).toBe('Hello, Kratos and Thanathos.');
  });
  

  
});
