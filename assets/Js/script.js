const fs = require('fs');

// Create a folder named "myFolder"
fs.mkdir('myFolder', (err) => {
  if (err) {
    console.error('Error creating folder:', err);
  } else {
    console.log('Folder created successfully!');
  }
});
