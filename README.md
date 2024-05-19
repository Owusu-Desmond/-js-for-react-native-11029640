# JavaScript Array Manipulation and User Profiles

## Student ID: 11029640

### Task 1: Array Manipulation
- **File:** arrayManipulation.js
- **Function:** `processArray`
  - **Description:** Takes an array of numbers as an argument and returns a new array where each even number is squared and each odd number is tripled.

### Task 2: String Formatting Based on Numbers
- **File:** arrayManipulation.js
- **Function:** `formatArrayStrings`
  - **Description:** Takes two arrays as arguments: an array of strings and an array of numbers processed by `processArray`. It modifies each string based on its corresponding number: capitalizes the entire string if the number is even, and converts the string to lowercase if the number is odd.

### Task 3: User Profile Creation
- **File:** userInfo.js
- **Function:** `createUserProfiles`
  - **Description:** Takes an array of names and the array of modified names from Task 2. Returns an array of objects, each containing `originalName`, `modifiedName`, and `id` (auto-incremented starting from 1).

### Usage
1. **arrayManipulation.js**
   - Contains the functions `processArray` and `formatArrayStrings`.
   - These functions can be imported and used in other files.
2. **userInfo.js**
   - Contains the function `createUserProfiles`.
   - This function can be imported and used in other files.

### Example
```javascript
const { processArray, formatArrayStrings } = require('./arrayManipulation');
const { createUserProfiles } = require('./userInfo');

const numbers = [1, 2, 3, 4];
const processedNumbers = processArray(numbers); // [3, 4, 9, 16]

const strings = ["apple", "banana", "cherry", "date"];
const formattedStrings = formatArrayStrings(strings, processedNumbers); // ["apple", "BANANA", "cherry", "DATE"]

const userProfiles = createUserProfiles(strings, formattedStrings);
console.log(userProfiles);
/*
[
  { id: 1, originalName: 'apple', modifiedName: 'apple' },
  { id: 2, originalName: 'banana', modifiedName: 'BANANA' },
  { id: 3, originalName: 'cherry', modifiedName: 'cherry' },
  { id: 4, originalName: 'date', modifiedName: 'DATE' }
]
*/
