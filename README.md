# MongoDB Query Error Handling

This repository demonstrates a common error in MongoDB queries and shows how to avoid it.

## The Bug
The `bug.js` file contains code that performs a MongoDB query. The query searches for documents matching a given criteria.  However, it does not explicitly handle the scenario when no document is found, which could cause an error if you try to access fields on an undefined object.

## The Solution
The `bugSolution.js` file shows the corrected version of the MongoDB query. Before attempting to access any fields, it checks if the returned value from `findOne()` is null or undefined.