```javascript
const query = { name: /John/i };

const result = db.collection('users').findOne(query);

if (result) {
  // Access fields only if a document is found
  if (result.hasOwnProperty('age')) {
    const age = result.age;
    console.log(age);
  } else {
    console.log('Age field not found in the document');
  }
} else {
  console.log('No user found.');
}
```