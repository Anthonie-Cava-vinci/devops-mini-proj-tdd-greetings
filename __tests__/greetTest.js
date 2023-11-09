const greet = require('../greet')

describe('greet', () => {
  it('1. Greet a person', () => {
    expect(greet('Jean-Kevin')).toBe('Hello, Jean-Kevin.')
  })

  it('2. Handle null, undefined, or " "', () => {
    expect(greet(null)).toBe('Hello, my friend.')
    expect(greet(undefined)).toBe('Hello, my friend.')
    expect(greet(' ')).toBe('Hello, my friend.')

    expect(greet('')).toBe('Hello, my friend.')
  })

  it('3. Handle uppercase names', () => {
    expect(greet('KENOBI')).toBe('HELLO, KENOBI!')
  })

  it('4. greet two people', () => {
    expect(greet(['Kratos', 'Thanathos'])).toBe(
      'Hello, Kratos and Thanathos.'
    )
  })

  it('5. Handle more than two names', () => {
    expect(greet(['Kratos', 'Thanathos', 'Hypnos'])).toBe(
      'Hello, Kratos, Thanathos and Hypnos.'
    )
  })

  it('6. Handle normal and uppercase names', () => {
    expect(greet(['KRATOS', 'Thanathos', 'Hypnos'])).toBe(
      'Hello, Thanathos and Hypnos. AND HELLO KRATOS!'
    )
  })

  it('7. Handle multiple names and language', () => {
    expect(greet(['Kratos', 'Thanathos'], 'FR')).toBe(
      'Bonjour, Kratos et Thanathos.'
    )
    expect(greet(['Kratos', 'Thanathos', 'Hypnos'], 'NL')).toBe(
      'Hallo, Kratos, Thanathos en Hypnos.'
    )
  })
})
