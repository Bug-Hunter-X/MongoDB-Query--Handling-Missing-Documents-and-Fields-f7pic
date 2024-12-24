```javascript
const query = { name: /John/i }; // Case-insensitive search

// The following code will fail if the collection is empty, resulting in an undefined error
const result = db.collection('users').findOne(query); 
if (!result) {
  console.error('No user found.');
}

//This will throw an error if the field 'age' is missing or not present in the documents
const age = result.age; 
console.log(age); 
```