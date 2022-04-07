function getTree(arr) {
  let newArr = []
  let count = 0
  while (arr.length > 0) {
    if (newArr.length === 0) {
      newArr.push(arr.shift())
    } else {
      let children = newArr[0]
      for (let j = 1; j < count; j++) {
        children = children.children[children.children.length - 1]
      }
      children.children = []
      for (let i = 0; i < count; i++) {
        children.children.push(arr.shift())
      }
    }
    count++
  }
  return newArr
}

const arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
]
const newArr = getTree(arr)
console.log(newArr)
