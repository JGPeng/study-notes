// process 不需要 "require"，它是自动可用的
process.stdin.setEncoding('utf-8')
process.stdin.on('readable', function () {
    var input = process.stdin.read()
    if (input !== null) {
        process.stdout.write(input)

        var command = input.toString().trim()
        if (command == 'exit') {
            process.exit(0)
        }
    }
})