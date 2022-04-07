/**
 * 类型保护是可执⾏运⾏时检查的⼀种表达式，
 * ⽤于确保该类型在⼀定的范围内。
 */

// in关键词
interface Admin {
  name: string
  privileges: string[]
}
interface Employee {
  name: string
  startDate: Date
}
type UnknownEmployee = Employee | Admin
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name)
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges)
  } else if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate)
  }
}

// typeof关键词
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  } else if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}

// instanceof关键词
interface Padder {
  getPadderString(): string
}
class NumberPadder implements Padder {
  constructor(private value: number) {}
  getPadderString() {
    return Array(this.value + 1).join()
  }
}
class StringPadder implements Padder {
  constructor(private value: string) {}
  getPadderString() {
    return this.value
  }
}
let padder: Padder = new NumberPadder(6)
if (padder instanceof NumberPadder) {
  console.log(padder.getPadderString())
} else if (padder instanceof StringPadder) {
  console.log(padder.getPadderString())
}

// 自定义类型保护的类型谓词
function isNumber(x: any): x is number {
  return typeof x === 'number'
}
function isString(x: any): x is string {
  return typeof x === 'string'
}
