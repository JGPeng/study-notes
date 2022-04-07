### 创建 package.json 文件

```
mkdir myproject
cd myproject

npm init 或者 npm init --yes

cnpm install mongodb --save
```



### 连接MongoDB

```
// 引入mongodb
const { MongoClient } = require('mongodb');

// 定义数据库连接地址
const url = 'mongodb://localhost:27017';

// 定义要操作的数据库名称
const dbName = 'myproject';

// 实例化MongoClient，并传入数据库连接地址
const client = new MongoClient(url, { useUnifiedTopology: true });

// 连接数据库
client.connect(err => {
	if(err) {
		console.log(err);
		return;
	}
	console.log('连接数据库成功');
	
	let db = client.db(dbName);
	let collection = db.collection('user');
	
	/* 在这里进行数据库操作，如增删改查 */
	
	// 操作数据库完毕后，关闭数据库
	// client.close(); // 行数据库操作时，不能在外面关闭数据库
})
```

1. 查找数据

   ```
   collection.find({}).toArray((err, data) => {
   	if (err) {
   		console.log(err);
   		return;
   	}
   	console.log(data);
   	client.close(); // 因为是异步操作，所以需要在这里进行关闭数据库操作
   })
   ```

2. 增加数据

   ```
   collection.insertOne({'name': 'abc', 'age': 18}, (err, result) => {
   	if (err) {
   		console.log(err);
   		return;
   	}
   	console.log('增加成功');
   	console.log(result);
   	client.close(); // 因为是异步操作，所以需要在这里进行关闭数据库操作
   })
   ```

3. 修改数据

   ```
   collection.updateOne({'name': 'abc'}, {$set: {'age': 18}}, (err, result) => {
   	if (err) {
   		console.log(err);
   		return;
   	}
   	console.log('修改成功');
   	console.log(result);
   	client.close(); // 因为是异步操作，所以需要在这里进行关闭数据库操作
   })
   ```

4. 删除数据

   ```
   collection.deleteOne({'name': 'abc'}, (err) => {
   	// 注意：没有删除数据时也不会报错
   	if (err) {
   		console.log(err);
   		return;
   	}
   	console.log('删除一条数据成功');
   	client.close(); // 因为是异步操作，所以需要在这里进行关闭数据库操作
   })
   ```

   ```
   collection.deleteMany({'name': 'abc'}, (err) => {
   	if (err) {
   		console.log(err);
   		return;
   	}
   	console.log('删除多条数据成功');
   	client.close(); // 因为是异步操作，所以需要在这里进行关闭数据库操作
   })
   ```
