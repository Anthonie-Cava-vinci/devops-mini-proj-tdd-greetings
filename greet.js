function greet (name, language = 'EN') {
  if (!Array.isArray(name)) {
    // Case 2: Handle null, undefined, '', ' '
    if (!name || name.trim() === '') {
      return 'Hello, my friend.'
    }

    // Case 3: Handle uppercase names
    if (name === name.toUpperCase()) {
      return `HELLO, ${name}!`
    }

    // Case 1: Greet someone
    return `Hello, ${name}.`
  }

  // Case 4: Greet two people (case 7 with)
  if (name.length === 2) {
    if (language === 'FR') {
      return `Bonjour, ${name[0]} et ${name[1]}.`
    } else if (language === 'NL') {
      return `Hallo, ${name[0]} en ${name[1]}.`
    }
    return `Hello, ${name[0]} and ${name[1]}.`
  }

  // Case 6: Handle normal and uppercase names
  const normalNames = []
  const upperCaseNames = []
  name.forEach((n) => {
    if (n === n.toUpperCase()) {
      upperCaseNames.push(n)
    } else {
      normalNames.push(n)
    }
  })
  if (normalNames.length > 0 && upperCaseNames.length > 0) {
    return `Hello, ${normalNames
            .slice(0, -1)
            .join(', ')} and ${normalNames.slice(
            -1
        )}. AND HELLO ${upperCaseNames.join(' ')}!`
  }

  // Case 5: Handle more than two names (case 7 with)
  if (name.length > 2) {
    if (language === 'FR') {
      return `Bonjour, ${name.slice(0, -1).join(', ')} et ${name.slice(
                -1
            )}.`
    } else if (language === 'NL') {
      return `Hallo, ${name.slice(0, -1).join(', ')} en ${name.slice(
                -1
            )}.`
    }
    return `Hello, ${name.slice(0, -1).join(', ')} and ${name.slice(-1)}.`
  }
}
module.exports = greet
