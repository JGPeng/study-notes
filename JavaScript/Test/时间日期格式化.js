// 实现日期时间的格式化
/**
 * 把输入的时间格式化成相应的输出，格式化支持以下几种类型：
    Y: 年份
    m：月份
    d：日期
    H：小时
    i：分
    s：秒
*/

/**
 * 输入描述：
 * 第一行为合法的日期时间字符串，例如:2020-08-31 12:03:04
 * 每二行为格式化说明:例如: YmdHis，除了以上6个格式化字符外，其它字符则保持原样输出所有输入均为合法内容
 */

/**
 * 输出描述：
 * 根据格式化输出对应的结果
 */

function formatDate(date, format) {
    const datas = date.split(' ')
    const dates = datas[0].split('-')
    const times = datas[1].split(':')
    const obj = {
        'Y': dates[0],
        'm': dates[1],
        'd': dates[2],
        'H': times[0],
        'i': times[1],
        's': times[2]
    }
    const arr = ['Y', 'm', 'd', 'H', 'i', 's']
    return format.split('').map(i => {
        return arr.findIndex(j => i === j) > -1 ? obj[i] : i
    }).join('')
}

console.log(formatDate('1998-12-01 00:01:59', 'xxxHyyyizzzs'))
console.log(formatDate('1998-02-01 08:01:59', 'Y/m'))