const greet = require('../greet.js')

describe('greet', () => {
  it('1. greet a personne', () => {
    expect(greet('Jean-Kevin')).toBe('Hello, Jean-Kevin.')
  })
})