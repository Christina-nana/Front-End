# nodejs

nodejs===》了解 ===》面试不会问



**nodejs是一个服务，运行在后端的，nodejs遵循commonjs规范，nodejs模块化开发**



## 一、下载安装nodejs

中文网：http://nodejs.cn/

测试：node -v  

​		*****************会出现版本号，就证明下载成功

macos操作系统：安装node

​								终端输入：node -v ===》出现版本号

window操作系统：

​								1》安装window

​								win键 + R 打开运行 ===》输入cmd ===》node -v ===》出现版本号



​								2》安装git

​								安装好了空白处右击会出现Git GUI Here

​																			  Git Bash Here

​									*****************网址：https://git-scm.com/



## 二、nodejs命令

​				cd ===》 进入文件夹

​				ls ===》打开当前文件夹目录

​				node a.js ===》运行

​				clear ===》清屏

​				../ 返回上一文件夹

​				cnpm install jquery/swiper ===》下载jquery/swiper,下载到当前目录下

​				control C ===》终止

​				npm ===》npm相关语法

​				npm login ===》登录（上传包）



macOS打开终端：有时候执行命令需要前面加sudo				

windows打开win键+R 打开运行，输入cmd/进入文件右边击，Git Bash：

​				node a.js 运行



## 三、commonJS模块化（nodejs语法）

**nodejs是一个服务，运行在后端的，nodejs遵循commonjs规范，nodejs模块化开发**



**commonjs规范，最主要的规范：强调了模块化**



nodejs语法：

1.所有ECMAScript语法在Node环境中都可以使用。

2.在Node环境下执行代码，使用Node命令执行后缀为.js的文件即可



a> 规范定义：
	2.1 nodejs中规定每一个js文件都是一个模块，都有自己的作用域。
	2.2 在模块内部，module变量代表自身
	2.3 module.exports提供对外接口

```javascript
commonjs一直强调模块化，b.js想用a.js的变量

===》a.js 抛出去/导出 ===》module.exports.xxx = 变量 
										     module.exports.bjs调用的函数名 = 函数名

===》b.js 引入/导入 ===》 var mod = require('./a.js') // 1，a文件的路径 2，./表示当前文件夹 3，后缀.js可以省略
									      console.log(mod.xxx)
									    	console.log(mod.函数名())

注意⚠️：（1）a.js抛出与a.js中定义的变量和函数名尽量一致
			 （2）若'./a.js'只写'./a'则按js,json,node顺序查找文件
```



b> require语法：

​	2.1 /代表绝对路径，./代表相对路径
​	2.2 默认后缀名： .js 、.json、.node ===》按照js，json，node顺序查找文件
​	2.3 require('jquery')、require('http')、require('a')	===> 找的是node_modules文件中模块	



c> global语法：(全局)：用的很少，后面微信小程序会用到

在**浏览器**中全局对象是**window**，在**Node**中全局对象是**global**。

   global.变量名

```javascript
a.js
	global.test = 666;

b.js
	var mod = require('./a');
	console.log(test)
```



![](/Users/christina/Desktop/xiaoluxian /step05-nodejs.js/01笔记/nodejs笔记/img/nodejs模块加载机制2.png)



![](/Users/christina/Desktop/xiaoluxian /step05-nodejs.js/01笔记/nodejs笔记/img/nodejs模块加载机制1.png)





## 四、package.json文件



1》**package.json  :  就是项目的描述文件** ===》每个项目中一定有packeage.json文件，不一定有node_modules文件，传送给别人都传送packages.json，不传送node_modules，接收到package.json，通过cnpm install 下载node_modules



​	使用**npm init / cnpm init** 自动生成**packages.json** 文件，可以填写项目内容

​	使用**npm init -y** 自动生成**packages.json** 文件，不用填写项目内容，自动生成



2》如果删除了**node_modules文件，在命令行中输入** **：**

​			**npm install** **自动生成所有第三方模块** **包括开发和运行所需要的** ===》存储在package.json的dependencies

​			**npm install --production** **自动生成项目运行阶段所需要的第三方模块** ===》存储在package.json的devdependencies



3》开发阶段和线上运行阶段：**npm install 包名** ===》存储在package.json的dependencies

 	开发阶段需要，线上运行阶段不需要：**npm install 包名 --save-dev** ===》存储在package.json的devdependencies



4》命令行中输入：**cnpm install express -S** ：局部下载 express

​							 	**cnpm install mysql -S**    ：局部下载 mysql 



5》name选项在 packages.json 尤为重要，上传到npm上一定要填写



6》Scripts选项中存储的都是命令的别名：当频繁执行的命令比较长的时候，就把长的命令写到script中

  	 eg:新建一个叫”build”的选项： "build": "nodemon app.js"===》 在命令行中输入：**npm run build** 就可以执行app.js文件



7》 package-lock.json文件的作用

​		a> 锁定包的版本，确保再次下载时不会因为包版本不同而产生问题

 		b> 加快下载速度，因为该文件中已经记录了项目所依赖第三方包的树状结构和包的下载地址，重新安装时只需下载即可，不需要做额外的工作



## 五、npm

下载nodejs包，不仅只是下载了nodejs，其实还下载了npm

**npm的定义：是一个包管理器（文件管理器）：上传和下载**





## 六、npm命令

### 6.1 下载包

​	6.1.1 npm install 包名

​		简写===> 5.1.2 npm i 包名

```nodejs
		例如：
		npm install jquery 下载在node_module中的dist/src中
```



6.2 官网

​		https://www.npmjs.com/



6.3 安装cnpm(淘宝镜像)

​		(sudo) npm install cnpm -g --registry=https://registry.npm.taobao.org



​			1》cnpm -v ：查看版本

​			2》cnpm install xxx ： 把xxx模块下载到当前目录下

​                  ***简写：cnpm i jquery

​			3》下载方式

​					cnpm install xxx -g ： 下载到全局

​					cnpm install xxx -S ： 局部，下载到生产环境（以后我们下载局部基本用-S）,大小写是有区别的，小写相当于没写

​					cnpm install xxx -D ： 局部，下载到开发环境



### 6.4 如何上传包（文件）

​		a> 注册一个账号

​				账号：likui123456
​				密码：laozhangweb123
​				邮箱：zpsthao@163.com

​		b> 初始化项目
​		
​				cnpm init  ||  npm init 

​		c> 登录

​				npm login 

​				提示：Logged in as likui123456 on http://registry.npmjs.org/.

​		d> 上传包	

​				npm publish

​				成功后：+ xiaoqin@1.0.0











## 七、nodejs创建web服务器

7.1 创建web服务器代码

```javascript
 //引用系统模块
 const http = require('http');

 //创建web服务器
 const app = http.createServer();

 //当客户端发送请求的时候
 app.on('request',(req,res)=>{
   
 //响应
 res.end('<h1>hi, user</h1>');

 });

// 监听3000端口
app.listen(3000);
console.log('服务器已启动，监听3000端口，请访问 localhost:3000')
```



7.2清楚被占用的端口号

```
终端输入
lsof -i:8080
kill PID号
```





## 八、get/post请求

### 8.1 get/post请求方式

1》get请求方式

​	得到路径req.url  ===》url模块，url.parse( )把url转换为对象

```javascript
// 引入url系统模块
const url = require("url");
// req.url得到请求路径
var reqUrl = req.url;
// 解析url
url.parse(reqUrl,true).query
```

2》post请求方式

​	事件接收 ondata，onend事件 ===》通过字符串拼接的方式传递值===》querystring模块，querystring.parse( )把传输的数据解析对象

```javascript
req.on('data',回调函数) : 每次发送的数据
req.on('end',回调函数)  : 数据发送完成
```
```javascript
// 引入querystring系统模块
const querystring = require('querystring');

// 初始化字符串
let postVal = "";

// 每次发送的数据
req.on("data",(chunk)=>{
  // 通过字符串拼接的方式传递值
  postVal+=chunk; 
})

// 数据发送完成
req.on("end",()=>{
  console.log(  querystring.parse(postVal) );
  // 响应
  res.end();
})
```



3》post/get每次请求，默认req.url 中网站图标也要传递一次，所以后端会响应两次 == 》解决方法，做一个判断

```javascript
if(req.url != '/facicon.ico'){
		
}
```



### 8.2 get请求url数据操作

1》url地址中有中文，有两种方法获取到中文：	

​	方法1》加true ： url.parse(req.url,**true**)

```javascript
	//引入url系统模块
  const url = require('url')
  	...
  //true将通过url获取过来的中文字显示出来
  url.parse(req.url,true)
  	
```

​		方法2》 **querystring.parse( )**

```javascript
	//引入url系统模块
  const url = require('url')；
	// 引入querystring系统模块
	const querystring = require('querystring');

	....
  
  // querystring.parse()来将获取过来的中文显示出来
  querystring.parse(url.parse(req.url).query)
```



### 8.3 get请求表单数据操作

1》form表单中input一定要填写name值，

​      form表单要写明请求方式method，请求地址action

```html
<form method="get" action='http://localhost:8080'>
	<input type="text" name="userName">
	<input type="password" name="userPwd">
	<input type="submit" value="登录">
</form>
```

2》响应头：**res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})**

​	200为请求成功，"Content-Type":"text/html;charset=utf8"，解决响应内容中文乱码问题

```javascript
const http = require("http");
const url = require("url");

const server = http.createServer((req,res)=>{

  // 响应头，解决响应内容中文乱码问题
	res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
  
	const reqUrl = req.url;
	const formVal = url.parse(reqUrl,true).query;
	console.log(formVal.userName,formVal.userPwd);
  
  // 响应到页面上
	res.end("用户名:"+formVal.userName+"----->"+"密码:"+formVal.userPwd);
	
})

server.listen(8080);
```



### 8.4 post请求表单数据操作

1》post请求方式

​	post ===》事件接收 ondata，onend事件 ===》通过字符串拼接的方式获取传输的值===》querystring模块，querystring.parser( )解析对象

```javascript
req.on('data',回调函数) : 每次发送的数据
req.on('end',回调函数)  : 数据发送完成
```



2》案例

```javascript
const http = require("http");
const querystring = require('querystring');
const server = http.createServer((req,res)=>{

	let postVal = "";
  // 每次发送的数据
	req.on("data",(chunk)=>{
		postVal+=chunk; // 拼接
	})
  // 数据发送完成
	req.on("end",()=>{
		console.log(  querystring.parse(postVal) )
		res.end();
	})

})

server.listen(8080);
```



## 九、连接mysql数据库

### 9.1 下载内容

​		1》下载mysql

​		   	下载地址：https://dev.mysql.com/downloads/mysql/

​		2》下载工具 ：nacicat premium



### 9.2 node连接数据库

​		1》创建文件夹，在当前目录中下载第三方模块mysql包===》生成node_module包 ===》里面有mysql

​					cnpm install mysql -S

​		2》引入mysql 系统模块

​					var mysql = require('mysql');

​		3》配置mysql信息

​				    var connection = mysql.createConnection({
   					     host     : '主机名', ===》服务器IP地址
​      					  user     : '用户名', 
​    					    password : '密码',
​       					 database : '库名称',
​      					  port     : '端口号'   ===》默认端口号是：3306

​							socketPath: '/tmp/mysql.sock' // 指定套接字文件路径  （勾选使用套接字文件时候加）    				

​					});

​		 4》连接

​					connection.connect();

​	 	5》进行数据库查询操作

​					connection.query('select * from 表名称', function (error, results, fields) {
​							  if (error) throw error;
​				 			 console.log(results);
​					});



​	 	6》关闭

​					connection.end();



### 9.3 数据库操作

​		数据库 ===〉表 ===》字段

​		

#### 9.3.1 查

数据库查询语句：

​	1》	select * from 表名称：查询所有数据
​	2》	select * from 表名称  where userName = ?   and   userPwd = ?    ===>条件查询

​			 'select * from 表名称  where userName='+req.query.userName+''   ===>条件查询

​			where ===》条件

​			and ===》连接多个数据

```javascript
connection.query('select * from 表名称 where userName=? and userPwd=?',[第一个post/get请求值,第二个post/get请求值],(err,results,fields)=>{
				
})
```

案例：登录



​	3》模糊查询

```javascript
普通字符串写法
connection.query("select * from xiaomi_goods where goods_name like '%" + goodsName + "%'", function(error,results,fields) {})

模版字符串写法：
connection.query(`select * from xiaomi_goods where goods_name like '%${goodsName}%'` + goodsName + "%'", function(error,results,fields) {})
```

案例：vue小米商场名称搜索



​	4》数据库按照升序或则降序查

```javascript
select * from 表名 where 字段名 like "%'+goodsName+'%" order by '+按照升将序的字段名+' '+升序/降序+''

注意：升序asc 降序desc
```



#### 9.3.2 增

​	数据库增加语句：

​	1》写法一：

​		insert into 表名称 value (100,123,456) ,[0,]

​		[0,]  0 ===〉代表数据库中值1实现自增长，并且要在数据库中将值1设置为自增长

```javascript
connection.query('insert into user value (?,?,?)',[0,userName,userPwd],function(error,result,fields){
			if(error) throw error;
			console.log(result)
  		res.write("注册成功！！！");
			res.end();
})
```

​	2》写法二：

```mysql
`insert into address (name,tel,province,city,district,address,isDefault,userId) values ('${name}','${tel}','${province}','${city}','${district}','${address}','${isDefault}','${id}'）`
```

案例：注册



#### 9.3.3 改

写法一：

```mysql
`update 表名 set id = ?, name ? , migurl = ? Where id = ${upid}`,[upid,imgName,pic]
```

写法二：

```mysql
模版字符串写法：
`update 表名 set goods_num = replace(goods_num,${goods_Num}原来数据,${goodsNum}修改后的数据) where id = ${id}修改的id号码`

拼接字符串写法：
'update goods_cart set goods_num = replace(goods_num,"' + goods_Num原来数据 + '","' + goodsNum修改后的数据 + '") where id = "' + id + '"'
```



```javascript
eg：
connection.query('update goods_cart set goods_num = replace(goods_num,"' + goods_Num + '","' + goodsNum + '") where id = "' + id + '"',function(e,r) {
					res.send({
						code: 0,
						data:{
							success:true,
							msg:'修改成功',
							data:r
						}
					})
				})
```



#### 9.3.4 删

```mysql
`delete from 表名 where id = ${goodsId}`
```





## 十、express框架

**express：基于node.js的web应用开发框架		====》 就是一个框架**

### 10.1 express框架语法及功能

​	1》express基本语法



​				a》express框架可以直接使用res.send()方法

 				 	res.send('Hello Express'); ===》send方法会根据内容的类型自动设置请求头

​					  res.wirte('Hello Express'); ===》必须设置响应头，res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});



​				 	 res.render('页面admin',{参数:模版语法使用的数据}) ===》 渲染一个模版																	

​					  参数1:页面admin：views文件中一定要有这个admin.ejs页面。参数2:模版语法使用的数据

​				

​				b》不同操作系统的路径分隔符（文件夹与文件夹之间的分隔符）不统一

​						macOS：/public/uploads/avatar

​						Windows：  \   / 都可以

​						Linux：  / 才可以

​	2》创建web服务器

​	3》中间件

​			a》app.use/get/post(‘创建的路由：/代表首页，/index也代表首页，/login登录页面’,function(req请求对象,res响应对象,next跳出){})

​			b》next

​			c》错误处理中间件

​			d》中间件应用

​	4》创建路由===》路由模块化

​			a》创建一级路由

​			b》创建二级路由

​			c》路由参数

​	5》请求参数

​			a》get请求参数===>req.query ===>获取过来的是对象

​			b》post请求参数 ===>req.body ===> 获取过来的是对象

​	6》静态资源处理



### 10.2 使用webstorm创建express

​	1》下载webstorm

​	2》新建Nodejs Express App ===》 template 选择 EJS

​	3》窗口Run ===》运行bin中的www ：启动文件【入口文件】===》1.文件里面查看port端口号  2.运行在下面框框中

​	4》在浏览器中输入：localhost:3000打开页面



### 10.3 express 目录结构

​	bin：www  ===》启动文件【入口文件】

​	public   ===》静态资源  【存放css、img、js】	

​	app.js   ===》全局配置文件

​	routers  ===》路由的配置

​	views    ===》页面

​	node_modules	



### 10.4 express搭建web服务器

​	10.4.1 手动使用express搭建web服务器

​			1》npm install express 下载nodejs第三方模块express

​			2》创建web服务器：代码如下

```javascript
 // 引入Express框架
 const express = require('express');
 // 使用框架创建web服务器
 const app = express();
 // 当客户端以get方式访问/路由时
 app.get('/', (req, res，next) => {
    // 对客户端做出响应 
    res.send('Hello Express'); // send方法会根据内容的类型自动设置请求头
 });
 // 程序监听3000端口
 app.listen(3000);

```



​	10.4.2 使用webstorm已经搭建好的express项目自动生成

​			2》新建Nodejs Express App ===》 template 选择 EJS

​			3》窗口Run ===》运行bin中的www ：启动文件【入口文件】===》1.文件里面查看port端口号  2.运行在下面框框中

​			4》在浏览器中输入：localhost:3000打开页面				



### 10.5 express创建路由

```javascript
 const express = require('express')
 // 创建路由对象
 const home = express.Router();

 // 将路由和请求路径进行匹配
 app.use('/home',home);

 // 在home路由下继续创建二级路由
 home.get('/index',()=>{
 //  在页面中/home/index进行访问
 res.send('欢迎来到博客展示页面');
	});
```

​	

​	10.5.1 创建1级路由 ===> http://localhost:3000/admin

​	app.js===>全局配置文件

```javascript
var express = require('express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');

var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin',adminRouter);
```

index.js		

```javascript
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
 	  msg:'使用模版语法'
  });
});

module.exports = router;

```

users.js

```javascript
var express = require('express');
var router = express.Router();

//  / === /users
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('users');
});

module.exports = router;
```



10.5.2 创建2级路由 ：http://localhost:3000/admin/login

```javascript
//	admin.js								
var express = require('express');
var router = express.Router();

// 一级路由 ===> / === /admin
router.get('/', function(req, res, next) {
    res.render('admin');
});
// 二级路由
router.get('/login',function(req,res,next){
    res.render('login');
})

module.exports = router;
```



### 10.6 get/post请求（express框架下）

​			a》get请求参数===>req.query ===>获取过来的是对象

​			b》post请求参数 ===>req.body ===> 获取过来的是对象



### 10.6 引入静态资源

​			express中静态资源都放在publish文件夹中，引用路径： /+publish中对应的文件类型名称+文件名称，不需要加publish

```html
eg：
<link rel='stylesheet' href='/stylesheets/style.css' />
<img src="/images/4.png" alt="">
```



### 10.7 模版语法

模版引擎主要作用：拼接字符串

 res.render('页面admin',{参数:模版语法使用的数据}) ===》

​																							res.render:渲染一个模版

​																							参数1:页面admin：views文件中一定要有这个admin.ejs页面。

​																							参数2:模版语法使用的数据



语法一：

​			原始语法：<%=   %>  ===》等号代表引用值

​			标准语法：{{数据}}



语法二：循环

​			原始语法：

```html
<% arr.forEach(function(item,index){ %>
    <li><%= index %></li>
 <%  }) %>
```

​		

​		



## 十一、后台管理系统项目



### 11.1 url设置

​	  后台管理与前台公用一个url，路由设置不同

​	  xuexiluxian.cn  前台页面的url

​	  xuexiluxian.cn/admin  进入后台管理系统的登录页面



### 11.2 业务逻辑

​		1》/admin 登录页，routes===》index.js， views===》index.ejs

​				a》设置登录页面和后台管理主页路由/admin、/admin/main

​				b》发送登录用户信息及密码请求，获取数据库用户密码信息，进行匹配

​												

​		2》/admin/main 后台管理主页面

​	

















1、frameset 元素可定义一个框架集。它被用来组织多个窗口（框架）。每个框架存有独立的文档

<frame> 标签定义 frameset 中的一个特定的窗口（框架）

​		src	URL	规定在框架中显示的文档的 URL。

​		name	name	规定框架的名称。



2、<a href="" target="">

_blank	在新窗口中打开被链接文档。
_self	默认。在相同的框架中打开被链接文档。
_parent	在父框架集中打开被链接文档。
_top	在整个窗口中打开被链接文档。
framename	在指定的框架中打开被链接文档。































































































































## 十二、nodejs补充点

1》nodejs中没有window对象，window对象是浏览器引擎自动生成的