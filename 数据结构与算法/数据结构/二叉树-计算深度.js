function getDeep(tree) {
  if (tree == null) {
    return 0
  } else {
    let left = getDeep(tree.left)
    let right = getDeep(tree.right)
    return Math.max(left, right) + 1
  }
}

const root = {
  val: 'A',
  left: {
    val: 'A1',
    left: {
      val: 'A11',
      left: {
        val: 'Ax1',
      },
    },
  },
  right: {
    val: 'A2',
  },
}
console.log(getDeep(root))
