// Fonction greet avec deux paramètres : name et language (par défaut à 'EN')
function greet(name) {
  // Case 2: Handle null, undefined, '', ' '
  if (!name || name.trim() === '') {
    return 'Hello, my friend.';
  }

  // Case 1: Greet someone
  return `Hello, ${name}.`;
}

module.exports = greet;
