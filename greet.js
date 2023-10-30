//hello world
// Case 1 greet someone
function greet (name, language = 'EN') {
    if (language === 'FR') {
      return `Bonjour, ${name}.`;
    }
    return `Hello, ${name}.`;
  }

  module.exports = greet;
