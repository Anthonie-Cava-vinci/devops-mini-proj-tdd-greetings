function greet(name) {
  
  // Case 2: Handle null, undefined, '', ' '
  if (!name || name.trim() === '') {
    return 'Hello, my friend.';
  }

  // Case 3: Handle uppercase names
  if(name === name.toUpperCase()){
    return `HELLO, ${name}!`;
  }

  // Case 1: Greet someone
  return `Hello, ${name}.`;
}

module.exports = greet;
