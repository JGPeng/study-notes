const inquirer = require('inquirer')

var questions = [
    {
        type: 'input',
        name: 'name',
        message: "你叫什么名字?"
    },
    {
        type: 'input',
        name: 'age',
        message: "你多大啦?"
    }
]

inquirer.prompt(questions).then(answers => {
    console.log(`你好 ${answers['age']} 岁的 ${answers['name']}!`)
})