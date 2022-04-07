// 联合类型
const sayHello = (name: string | undefined) => {
  /** */
}
let num: 1 | 2
num = 1 // OK
num = 3 // Error
type EvenNames = 'click' | 'scroll' | 'mousemove'
let even: EvenNames
even = 'click' //OK
even = 'keydown' // Error

/**
 * 可辨识类型
 *   TypeScript 可辨识联合（Discriminated Unions）类型，
 *   也称为代数数据类型或标签联合类型。它包含 3 个要点：
 *   可辨识、联合类型和类型守卫
 */
