# CP+R Technical Challenges

The challenge is broken into two parts:

- Part 1 is a more traditional technical challenge with two short problems to solve
- Part 2 is an express/mongo based challenge

## Part 1

Inside the folder marked `part_one` there are two JS files. Please complete the challenges for each as described below. We have given some basic test cases but feel free to add more to demonstrate the capability of your solution.

### deepCopy.js

Write a function that takes in an object as it's only argument and creates a copy of it. The challenge is to primarily return only primitive values but consider how the function might deal with more complex objects such as dates, functions or regex. There are test cases but they are not required; simply an example of the kind of things that you could possibly use to demonstrate your solution.

### fillArray.js

A real world example from our code base: a database helper has pulled total number of hours worked per week for a particular employee. You need to manipulate the data to fit in a simple array format, in order, to be displayed on a graph. The data has three problems: 1.) it has come back out of order 2.) It needs to be in a different data structure...

```javascript
// No missing data
const data = [
  { week: 1, hours: 17 },
  { week: 3, hours: 44 },
  { week: 2, hours: 7 },
];

// Required data structure (in week order)
const preparedData = [17, 7, 44];
```

The third problem is that the database will not return any values for weeks that were not worked. In the example below, you will see that by excluding week 4, the final array has deceptive values:

```javascript
// Week 4 is missing
const data = [
  { week: 1, hours: 17 },
  { week: 3, hours: 44 },
  { week: 2, hours: 7 },
  { week: 6, hours: 40 },
  { week: 5, hours: 12 },
];

// Required data structure - week 5 and 6 will be misread as weeks 4 and 5
const preparedData = [17, 7, 44, 12, 40];
```

The correct result would be:

```javascript
const preparedData = [17, 7, 44, 0, 12, 40];
```

What would happen if we are in fact wanting to display ten weeks of data and the employee has been off for the past four weeks? The correct result would then be:

```javascript
const preparedData = [17, 7, 44, 0, 12, 40, 0, 0, 0, 0];
```

The challenge is to write a function that will take two arguments: the data object and the current numerical week. The functions should return an array of the hours worked, in week order, with any missing weeks represented by a 0.
Like the first challenge, there are example test cases but these are not mandatory. Please feel free to provide your own to show off your work.

## Part 2

