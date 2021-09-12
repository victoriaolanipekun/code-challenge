const fillArray = (rawData, currentWeek) => {

  const newArray = new Array()
  const arrange = rawData.sort(function (x, y) {
    return x.week - y.week
  })

  for (let i = 1; i <= currentWeek; i++) {
    const target = arrange.filter(item => {
      return item.week === i
    })

    if (target[0] !== undefined) {
      newArray.push(target[0].hours)
    } else {
      newArray.push(0)
    }
  
  }

  return newArray
}

// Example simple test case
const source = [
  { week: 1, hours: 17 },
  { week: 3, hours: 44 },
  { week: 2, hours: 7 }
]

const result = fillArray(source, 3)
console.group('Set1')
console.log('result ==>', result)
console.log('target ==>', [17, 7, 44])
console.groupEnd()

// Example more advanced test case
const source1 = [
  { week: 5, hours: 17 },
  { week: 3, hours: 44 },
  { week: 2, hours: 7 }
]

const result1 = fillArray(source1, 8)
console.group('Set2')
console.log('result ==>', result1)
console.log('target ==>', [0, 7, 44, 0, 17, 0, 0, 0])
console.groupEnd()
