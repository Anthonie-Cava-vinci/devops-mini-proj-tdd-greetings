function greet(name) {

    if(!Array.isArray(name)){
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
   
  
    // Case 4: Greet two people
    if (name.length === 2) {
        return `Hello, ${name[0]} and ${name[1]}.`;
    }
  
}
module.exports = greet;
