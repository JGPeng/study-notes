const mongoose = require('mongoose');
mongoose.connect('mongodb://eggadmin:123456@localhost:27017/eggcms');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('we\'re connected!');
});

const userSchema = mongoose.Schema({
    name: String,
    age: Number
});
userSchema.methods.speak = function () {
    const greeting = this.name ? `My name is ${this.name}` : 'I don\'t have a name';
    console.log(greeting);
}

const User = mongoose.model('User', userSchema);

const user = new User({ name: 'JGPeng', age: 20 });
console.log(user);

// 保存数据
// user.save(function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     user.speak();
// })

// 查询数据
User.find(function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
})