const deepCopy = (sourceObj) => {

  let finalTarget = null, output = null, index = null

  if (typeof sourceObj !== 'object' || sourceObj === null) {
    return sourceObj 
  }

  if (typeof sourceObj === 'object') {
    if (sourceObj.constructor.name !== 'Object') {
      finalTarget = new sourceObj.constructor(sourceObj) 
    } else {
      finalTarget = Array.isArray(sourceObj) ? [] : {}
    }
  }
  

  for (index in sourceObj) {
    output = sourceObj[index]

    finalTarget[index] = deepCopy(output)
  }

  return finalTarget
}

// Example simple test case
const source = {
  a: 1,
  b: 'string',
  c: false
}

const target = deepCopy(source)
console.group('Set1')
console.log('source ==>', source)
console.log('target ==>', target)
console.groupEnd()

// Example more advanced test case
const source1 = {
  a: [1, 2, 3, 4],
  b: {
    c: 1,
    d: 2,
    e: new Date(),
    f: () => console.log('Hello World')
  }
}
const target1 = deepCopy(source1)
console.group('Set2')
console.log('source ==>', source1)
console.log('target ===>', target1)
console.groupEnd()

// Feel free to show off different style test cases as you see fit
