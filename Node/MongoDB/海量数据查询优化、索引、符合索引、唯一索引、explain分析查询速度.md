### 索引基础

创建索引：

```
db.user.ensureIndex({'username': 1})
```

获取当前集合的索引：

```
db.user.getIndexes()
```

删除索引：

```
db.user.dropIndex({'username': 1})
```



### 复合索引

```
db.user.ensureIndex({'username': 1, 'age': -1})
```

​		该索引被创建后，基于username和age的查询将会用到该索引，或者是基于username的查询也会用到该索引，但是只是基于age的查询将不会用到该复合索引。因此可以说，如果想用到复合索引，必须在查询条件中包含复合索引中的前N个索引列。

​		<span style='color:red'>随着集合的增长，需要针对查询中大量的排序做索引。如果没有对索引的键调用sort，MongoDB需要将所有数据提取到内存并排序。因此在做无索引排序时，如果数据量过大以致无法在内存中进行排序，此时MongoDB将会报错。</span>



### 唯一索引

在缺省情况下创建的索引均不是唯一索引。如：

```
db.user.ensureIndex({'userId': 1}, {'unique': true})
```

如果再次插入userId重复的文档时，MongoDB将报错，以提示插入重复键。

如果插入的文档中不包含userId的键，那么该文档中该键的值为null，如果多次插入类似的文档，MongoDB将会报出同样的错误。

如果在创建唯一索引时已经存在了重复项，则可以：

+ 先删除刚刚创建的唯一索引：

  ```
  db.user.dropIndex({'userId': 1})
  ```

  

+ 



### explain executionStats 查询具体的执行时间

```
db.tablename.find().explain('executionStats')

// 关注输出的如下数值：explain.executionStats.executionTimeMillis 
```

