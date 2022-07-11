#### vue-crm后台管理系统项目笔记

### 一、项目搭建

#### 1.版本

vue 2.5.12

vue-cli ===> @vue/cli 4.5.13

​		

#### 2.选择框架

vue-cli 脚手架

vue 

element-ui  ===> ui框架 ===> 自己下载 ===> 页面中95%的布局都是来自element ui

echarts  ===> 统计图 ===> 主要做图表的一些事情

vue-resource ===> vue比较早的请求ajax插件，vue请求ajax的插件有很多

 

#### 3.下载

1》下载vue-cli脚手架 

​		创建文件夹crm，在文件夹下执行命令`vue init webpack-simple app` ===》vue 2版本的创建

2》`cnpm i ` 下载项目依赖node_modules

3》`cnpm i element-ui vue-resource --save` 下载element-ui，和 vue-resource 插件

4》`npm` 下载`vuex`，`vue-router`，`echarts`

⚠️：下载npm/cnpm 插件要加--save 才会在package.json的dependencies中做记录



#### 4.目录结构

​		一级文件夹

​			components文件夹 ===> 放.vue文件

​			router路由文件夹 ===> 配置index.js ===>在main.js中引入

​			store文件夹===》vuex ===> 配置index.js ===>在main.js中引入

​			api文件夹 ===》放ajax请求 ===> 配置api.js

​		![](/Users/christina/Desktop/crm授课版本/crm思维导图.png)![crm思维导图](/Users/christina/Desktop/项目/crm后台管理/crm授课版本/crm思维导图.png)

#### 	5.命令

​		`npm run dev`     启动项目

​		`npm run build `     webpack打包后生成dist文件夹



### 二、项目涉及知识点

#### 1.vue单页面应用(SPA)手动新增页面login.html

配置：webpack.config.js 文件的entry入口文件（多文件入口）、output:'[name].js'（多文件出口）（output中publicPath是代理路径）

新增：login.html的与index.html配置一样，设置打包路径`<script src="/dist/login.js"></script>`

​			login.js文件与main.js配置一样

​			模版login.vue文件，与app.vue的配置一样

#### 2. Element UI引入报错ttf｜woff

​	原因：webpack中没有解析.ttf .woff字体图标的文件，在loader中配置加上ttf、woff

```javascript
			{
				test: /\.(png|jpg|gif|svg|ttf|woff)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
```

#### 3.vue-resource请求ajax

​	vue-resource是比较早的一种vue中请求ajax的一种方式，Vue.js 2.0 版本推荐使用 axios 来完成 ajax 请求。

​	vue-resource与axios的使用差不多

​	1》下载

​			`cnpm i vue-resource --save`

​	2》引入===>在main.js中引入

```javascript
import resource from 'vue-resource';
Vue.use(resource)
```

​	3》使用

```javascript
this.$http.post|get(url,{传递的参数},{emulateJSON:true}).then(请求成功的回调函数(data)=>{},请求失败的回调函数(err)=>{})
```

​	⚠️：$http是vue-resource的方法，在vue原型链中添加了这个方法，可以被this调用到



#### 4.拦截器

​	1》**拦截器：**要想统一处理所有http请求和响应，就得用上 axios ｜vue-resource的拦截器。通过配置http response inteceptors，当后端接口返回401 Unauthorized（未授权），让用户重新登录。

​		vue-resource设置拦截器的方法： Vue.http.interceptors.push

​		axios设置拦截器方法：

​	2》**设置拦截器的目**：当我们需要统一处理http请求和响应时我们通过设置拦截器处理方便很多，

​	3》**使用场景：**

​			**a>每次发送ajax请求，设置统一的响应头，传递用户token**

​				判断用户有没有登录用token，token值是用户登录就一直和用户绑定在一起的，用户登录成功将token存储到本地存储中

​			**b>验证用户token是否过期**

​				每次接收后台传递过来的值前，如果http状态码为401，则token过期

​	4》**例子：**设置请求头传递用户token

```javascript
  写在main.js中：

	//拦截器
  Vue.http.interceptors.push((request, next) => {
    //在请求之前进行一些预处理和配置：
    if(localStorage.token) { //设置token请求头
      Vue.http.headers.common['Authorization'] = localStorage.token
    } else {
      location.href = './login.html'
    }
    next((response)=>{ //在响应之后传给then之前对response进行修改和逻辑判断：
      if(response.status == 401){ ⚠️：检测token是否过期
        location.href = './login.html'
      }
      return response
    })
  })
```

​	

#### 5.Element UI 布局

​	1》布局===〉栅格布局，类似bootstrapt，把盒子分成24等份

​	2》布局容器===〉crm后台管理项目侧边栏和主要区域部分，使用element ui 是用flex布局弹性盒布局的	

​	3》min-height 设置最小高度



#### 6.vuex中state、mutations

​	1》**mutations**中声明的方法是**全局**的一个概念

​		 **state**中声明的方法是**局部**的概念

​		 **getters**中声明的方法是**全局**的概念

​	2》修改**状态树(state)**尽量利用**mutations**去修改，不要在引用的组件中去修改，不然的话后面很难检测到状态树的改变

​	3》moudles中的state，mutations在组件中的引用方式

​			moudles库中state的引用：state是局部的概念

```javascript
方式一：只能用于modules库中的state属性
			this.$store.state.modules中库名称.state中属性名

方式二：只能用于modules库中的state属性
			import { mapState } from 'vuex'
			computed:{
        ...mapState({
          自定义名称(尽量与属性名一致):state=>state.modules中库名称.state中属性名 ⚠️：箭头函数(state) => {return state.car.aaa}													
      	}),
      }

```

​		moudles库中mutations的引用：mutations是全局的概念

```javascript
方式一：无论是否是modules库中都可以用
			this.$store.commit('mutatons方法名',{传递的参数})

方式二：无论是否是modules库中都可以用
			import { mapMutations } from 'vuex'
			methods:{
        ...mapMutations(['mutitions方法名'])
      }
			调用：mutitions方法名(传递的参数)

方法三：只能用于modules库中的mutations方法
      ...mapMutations({
           自定义名称(尽量与方法名一致):mutations=>mutations.modules库名称.mutations方法名  
      })
			调用：mutitions方法名(传递的参数)
```



#### 7.请求数据渲染，做v-if判断

​	请求数据渲染到dom层，要做v-if判断，当请求的数据全部拿到后再做渲染，ajax请求有时间限制，防止有些数据还没有拿到就渲染会报错，特别是将渲染的数据存储到vuex中再渲染到dom层的情况



#### 8.用到的js方法

##### 	1》数组方法

​		**a>数组. indexOf(查找的值)**  ===> 查找数组，查找到返回数组下标，没有查找到返回-1

```html
<el-menu-item v-for="a in i.children" 
              :key="a.uid" :index="a.path" 
              :disabled="$store.state.user.info.permissions.indexOf(a.path) == -1">	⚠️：使用indexOf的地方				  
		<i :class="icontype[a.id]"></i>
		<span slot="title">{{a.name}}</span>
</el-menu-item>
```

​			**b>map() **遍历数组===》返回新数组

​			**forEach()**遍历数组===》不会返回新数组，也不会改变原来数组，需要定义一个数组push给他

​											===》 内部不能使用break，continue



##### 2》对象方法

​			a>遍历对象还是用for(let i in obj){}的方法

​			b>判断是否为数组

​				`Arrary.isArrary(判断的值) ===》是数组返回true，不是数组返回false`

​				项目中的案例：

```javascript
if (Array.isArray(this.form.deptid)) {
    this.form.deptid = this.form.deptid[this.form.deptid.length - 1];
}
```



##### 3》递归

```javascript
  // 处理获取到的部门信息==》将children = []的数据转换成null
  childrennull(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].children.length == 0) {
        data[i].children = null
      } else {
        this.childrennull(data[i].children)
      }
    }
    return data
  }
```
##### 4》日期对象

​	向后端传递的时候注意日期格式

```javascript
     // 设置时间格式
      settime(time) {
        let times = new Date(time);
        return times.getFullYear() + '-' + (times.getMonth() + 1) + '-' + times.getDate()
      },
```

##### 5》深浅拷贝

​				将对象form浅拷贝变为json深拷贝 ===》使用this.$set方法 ===》循环依次添加

```javascript
      tableRow() {
        // 将浅拷贝变为深拷贝
        let json = {};
        for (let i in this.tableRow) {
          this.$set(json, i, this.tableRow[i].toString())
        }
        this.form = json;
      },
```



##### 6》字符串方法

​	toString()转换成字符串



##### 7》箭头函数this指向

​		1》在crm项目中：全部使用的是箭头函数，因为箭头函数的this指向是定义时所在的对象，而不是使用时所在的对象。因此在vue中箭头函数中的this指向vue对象，而在普通函数中的this就不是指向vue对象了，而是指向函数的调用者

​		2》箭头函数this：箭头函数不绑定this关键字，箭头函数中的this，指向的是函数定义位置的上下文this

​		3》普通函数this：

#### 9.循环导航图标

​	找到每个循环数据中的唯一值，设置一个data数据===>对象， 将唯一值设置为该对象的属性名，图标的class名存储对对应的属性值，在循环的时候根据唯一值渲染图标的class名称

```vue
<el-menu-item v-for="a in i.children" 
              :key="a.uid" 
              :index="a.path" 			
              :disabled="$store.state.user.info.permissions.indexOf(a.path) == -1">
  	<i :class="icontype[a.id]"></i> ⚠️：循环图标
		<span slot="title">{{a.name}}</span>
</el-menu-item>

<script>
data() {
  return {
    icontype: {
      1: 'el-icon-setting',
      2: 'el-icon-tickets',
      4: 'el-icon-user',
      12: 'el-icon-s-custom',
      21: 'el-icon-s-check',
      17: 'el-icon-menu',
      22: 'el-icon-collection',
      41: 'el-icon-s-order',
      46: 'el-icon-document-add',
      42: 'el-icon-document',
      45: 'el-icon-folder-opened'
    }
  }
},
</script>
```



#### 10.循环渲染数据确定每个数据唯一值

​	方法一：可以在后台返回的数据中查找唯一值

​	方法二：如果请求的数据中无法确定唯一值，设置自定义属性，拿到唯一值



#### 11.v-for循环中key唯一值

​		一般**:key='唯一值'**使用请求渲染数据中uid来代替

​	 	key：请用字符串或数值类型的值。		



#### 12.`<router-view>`

​		router-view管跳转视图的，在App.vue中一定要加，不然路由内容显示不了

​		router-link to 管路由跳转的，加给一级路由tabbar，tabbar可以放在App.vue中，也可以单独放一个组件，根据业务逻辑啊自己判断

#### 13.组件传递值和方法注意事项

​		1》父组件传递给子组件的值是**只读，不能进行修改，**

​		2》组件之间不仅可以传递值，还可以传递方法

​		3》利用watch监听可以监听到组件传递的值的变化，监听的值的变化也有两个参数

​		4》组件传值可以直接传递死数据，不用单项绑定

​			   ` <Mgradd :type='单项绑定传递的值' :fun='传递的方法' tname="不用单项绑定的死值"></Mgradd>`

​		5》重要案例===>******************   思想非常重要

​				点击页面中的某个按钮，弹出子组件对话框：

​					1>一进入页面父组件给子组件传递false的值给子组件，false赋值对话框隐藏状态

​					a>点击按钮页面（父组件）传递一个true的值给子组件，子组件设置watch监听事件监听父组件传递过来的值变化并赋值给当前对话框为true的状态，

​					b>对话框点击关闭，调用父组件传递过了的拿到对话框关闭状态的函数方法，在父组件中执行该方法，把父组件传递给子组件的值改为false

```vue
父组件：
<template>
   	对话框组件：
    <Setpass :type='type' :btn='btn'></Setpass>
</template>
<script>
  export default{
    data(){
       return{
          type:false
       }
    },
   components:{
     Setpass
   },
   methods:{
      // 检测修改密码对话框关闭状态
      btn(){
         this.type = false;
      },
   }
  }
</script>

子组件：
<template>
    <el-dialog  :visible.sync="dialogFormVisible" @close="btn">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button @click="dialogFormVisible = false">确 定</el-button>
    </el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
      }
    },
    props: ['type', 'btn'],
    watch: {
      type(a, b) {
        this.dialogFormVisible = this.type
      }
  }
</script>
```



#### 14.Echarts统计图

​		1》在官网上搜，知道了解==》做图表的

​		2》

​				下载

​				引入==》main.js中还是该组件中引入，官网上没有这种引入方法，自己搜，注意版本不同，引入也不同

​				配置	

​		3》**⚠️：注意echarts统计图，必须要等ajax请求完毕之后才能够进行渲染，不然数据不显示，使用promise，如果请求多个接口，使用promise.all()**

​				

#### 15.Promise.all()

​	1》`Promise.all()`方法用于将多个 Promise 实例，包装成一个新的 Promise 实例，方法接受一个数组作为参数

​		当所有的状态都fulfilled，新的Promise才会fulfilled，返回值组成数组

​		如果有一个状态是rejected，新的Promise就会新的Promise，返回值是第一个被`reject`的实例的

​	2》文档地址：https://es6.ruanyifeng.com/#docs/promise#Promise-all

​	3》**使用场景**

​			Promse.all在处理多个异步处理时非常有用，比如说一个页面上需要等两个或多个ajax的数据回来以后才正常显示

```javascript
      // 发送请求
      getData() {
        Promise.all([this.$http.get(http + articlebychannel),
          this.$http.get(http + channellist)
        ]).then((data) => {
          
          let articlesNum = data[0].data.data
          let articlesType = data[1].data.data
          let arr1 = articlesNum.map((item) => {
            return item.articles
          })
          let arr2 = articlesType.map((item) => {
            return item.name
          })

          // 要把数据拿到之后再进行统计图的渲染
          this.viewEcharts(arr1,arr2)

        }, (err) => {
          console.log(err)
        })
      }			
```



#### 16.vue中this.$set()方法

​		 1>当你发现你给**对象添加或则修改一个属性**，在控制台能打印出来，但是却没有更新到视图上时，也许这个时候就需要用到this.$set（）这个方法了，简单来说this.$set的功能就是解决这个问题的啦。

​		2>官方解释：向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 `this.myObject.newProperty = 'hi'`)

​		3>文档地址：https://cn.vuejs.org/v2/api/#Vue-set



​		**4>this.$set(target, key, value )===>可以放在循环中，创建一个对象**	

​			🌹 target：要更改的数据源(可以是对象或者数组)

​			🌹 key：要更改的具体数据，数组的位置，对象的属性名

​			🌹 value ：重新赋的值

​		**5>本项目中的用法===>生成一个对象**

```javascript
				 let json = {};
          // 双重for循环
          for (let i = 0; i < listData.length; i++) {
              let child = listData[i].children
              for(let k = 0; k<child.length;k++){
                  this.$set(json,child[k].url,child[k].children)
              }
          }
```



#### 17.富文本编辑器

​		1》vue+element富文本编辑器有很多，crm项目中使用的是wangEditor--轻量级 web 富文本编辑器，使用富文本编辑器是因为有段落的划分，而文本域是没有编辑器的划分的

​			文档地址wangEditor4：https://doc.wangeditor.com/打开文档地址，别打开官网，国外的很慢

​			⚠️注意要下载什么插件最好直接到github上搜索

​		2》

​			下载--npm	`npm install wangeditor`

​		    引入  ` import wangeditor from 'wangeditor';`

​			配置

```html
        <!-- 富文本编辑器 -->
        <div style="margin-top: 30px;">
          <div ref="widthcontent"></div>
        </div>

        <script>
          mounted() {
            // 创造一个编辑器
            let editor = new wangeditor(this.$refs.widthcontent)
            editor.create()
          },
        </script>
```

##### 		3》上传单张图片到服务器

​			let f = resultFiles[0];   ===》 拿到第一张图片,resultFiles是一个数组

​			let d = new FormData;  ===》实例化文件类型

​			d.append('file', f); ===》将图片添加到文件对象中，发送一定发送的是文件对象，而不是文件

​											===》一定取名叫file，取别的名可能会报错													

```javascript
mounted() {
  let editor = new wangeditor(this.$refs.widthcontent)
  // 配置服务器端地址
  editor.config.uploadImgServer = '/upload';
  // 限制一次最多上传 1 张图片
  editor.config.uploadImgMaxLength = 1;
  // 隐藏插入网络图片的功能
  editor.config.showLinkImg = false;
	// 上传图片到服务器
  editor.config.customUploadImg = (resultFiles, insertImgFn) => {⚠️：要改为箭头函数，不然里面的this不再指向vue对象，this不会输出因为已经发生了改变
    // resultFiles 是 input 中选中的文件列表
    // insertImgFn 是获取图片 url 后，插入到编辑器的方法
    // 拿到第一张图片
    let f = resultFiles[0];
    // 实例化文件类型
    let d = new FormData; ⚠️：一定要new FormData文件类型
    d.append('file', f);⚠️：一定取名叫file，取别的名可能会报错
    // 发送上传图片请求⚠️：发送文件只能post格式，不能用其他格式
    this.$http.post(http + file, d, {⚠️：发送的是文件对象而不是文件
      headers: {⚠️：文件类型与文本类型不一样，一定要规定下面headers的内容，并且token值要手动设置，不是绑定状态
        'constent-type': 'multipart/form-data',
        'Authorization': localStorage.token
      }
    }).then((data) => {
      if (data.data.msg == '成功') {
        // console.log(data)
        // 拿到的是图片路径
        // 上传图片，返回结果，将图片插入到编辑器中
        // 后台给的图片地址格式为：静态地址publicimg+文件名字
        let imgurl = publicimg+data.data.data.originalFileName
        insertImgFn(imgurl)⚠️：将返回的图片路径插入到文本器
      } else {
        this.$message.error(data.data.msg);
      }
    }, (err) => {
      console.log(err)
      this.$message.error(err.data.message);
    })
  }				
```
##### 		4》上传多张图片到服务器

​				与单张思路一样，把`resultFiles`进行循环，依次`d.append('file',f)`加入到`new FormData`文件对象中，最后把发送文件对象给服务器

​			let f = resultFiles[0];   ===》 拿到第一张图片，resultFiles是一个数组

​			let d = new FormData;  ===》实例化文本类型

​			d.append('file', f); ===》将图片添加到文件对象中，发送一定发送的是文件对象，而不是文件

​											===》一定取名叫file，取别的名可能会报错			

##### 		5》内容

​		a> 如果在富文本编辑器中输入%，传给后端解析会出错，所以在前端要把%替换成%25，利用replace()正则

​				`this.editor.txt.html().replace(/\%/g,'%25')`

​		b> 获取富文本框中的内容

​				`this.editor.txt.html()`

​		c>富文本编辑器都写到mounted中，因为要获取到dom元素



#### 18.下载、显示、上传图片

##### 1》下载图片===>跳转链接

​		 **location.href=url地址+传递的值拼接'?名=值&名=值'**

```javascript
// 点击下载 下载链接
 location.href = http+downloadfile+'?idFile='+row.id+'&fileName='+row.originalFileName
```
##### 2》显示图片

​		**img 中的src写服务器的图片地址**

```javascript
 此项目中的格式是：静态地址publicimg+文件名字scope.row.originalFileName
 <img :src="publicimg+scope.row.originalFileName" style="height:100px">
```
**3》代码例子**

```vue
<!-- 表格 -->
<div class="flie-table" v-if="tableData">
  <el-table :data="tableData" style="width: 100%;" height="380">
    <el-table-column label="文件预览" prop='originalFileName'>
      <template slot-scope="scope">
					⚠️：显示图片
          <!-- 静态地址+文件名字 -->
          <img :src="publicimg+scope.row.originalFileName" style="height:100px">
      </template>
    </el-table-column>
    <el-table-column prop="realFileName" label="操作">
      <template slot-scope="scope">
				⚠️：下载图片
        <el-button @click="downloadFile(scope.row)" type="text">下载</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>

<script>
  import {http,filelist,downloadfile,publicimg} from '../../api/api.js'
  export default {
    data() {
      return {
        publicimg
      }
    },
    methods: {
      // 点击下载	⚠️：点击下载图片
      downloadFile(row) {
          // 点击下载下载链接
          location.href = http+downloadfile+'?idFile='+row.id+'&fileName='+row.originalFileName
      },
    
</script>
```


##### 	3》上传图片

​		**1>注意点：**

​				a>上传图片一定要设置响应头，上传的内容类型

​	  			  headers:{ 
​     						'constent-type': 'multipart/form-data',
​     						'Authorization': localStorage.token
   				  }

​				b>上传图片都是用post方式

​	

​		**1>ajax发送请求方式上传图片**	

```javascript
     // 拿到第一张图片
        let f = resultFiles[0];//resultFiles数组类型
        // 实例化文本类型
        let d = new FormData;
        d.append('file', f);   
		// 发送上传图片请求
    this.$http.post(http + file, d, {
      headers: {
        'constent-type': 'multipart/form-data',
        'Authorization': localStorage.token
      }
    }).then((data) => {
      if (data.data.msg == '成功') {
        // console.log(data)
        // 拿到的是图片路径
        // 上传图片，返回结果，将图片插入到编辑器中
        insertImgFn(data.data.data.realFileName)
      } else {
        this.$message.error(data.data.msg);
      }
    }, (err) => {
      this.$message.error(err.data.message);
    })
```
​		**2>借助element ui框架的上传图片功能**

```html
 		<el-upload
      class="upload-demo"
      drag
      :action='upfileurl'⚠️：上传的路径
      :headers='headers'⚠️：设置响应头
      multiple⚠️：多文件上传
      :on-success='success'⚠️：上传成功的回调函数
      :on-error='error'⚠️：上传失败的回调函数
      >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
```

```javascript
<script>
  import {
    http,
    file,
    filelist,
    downloadfile,
    publicimg
  } from '../../api/api.js'
  export default {
    data() {
      return {
        upfileurl:http+file, ⚠️：上传的文件地址
        headers:{ ⚠️：设置的响应头
          'constent-type': 'multipart/form-data',
          'Authorization': localStorage.token
         }
      }
    },
    methods: {
      // 上传成功
      success(response,file,fileList){
        if (response.msg == '成功') {
            this.$message({
              message: '上传成功',
              type: 'success'
            });
            this.getfilelist(this.page)
        } else {
            this.$message.error(response.message);
        }
      },
      // 上传失败
      error(err, file, fileList){
        this.$message('上传失败')
      },
```



#### 19.加载动画

​		1》本项目的加载取消加载动画使用element ui的动画

​         2》开始动画可以放在created(){ 开始动画 }

​			  结束动画可以放在created(){ this.$nextTick(()=>{ 结束动画 }) }

​			  案例：setPass页面中		

```javascript
    created() {
      // 开始动画
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      this.$nextTick(() => {
        // 结束动画
        setTimeout(() => {
          loading.close();
        }, 100);
      })
    },
```



#### 20.html/css注意问题

​		布局中尽量用padding，不要用margin



#### 21.http状态码

##### 		1》500

​	           前端传递的数据格式或者数据有问题

​				前端传递的数据格式没有问题，那么服务器端的问题

##### 		2》401

​			    token过期，可以设置拦截器来拦截



##### 	   3》415 传递参数类型报错

​			 1》  报错：Unsupported Media Type 415报错

​			2》	传递给服务器的参数也要根据后台的要求设置,有时传递一个对象,但有时要将对象转换为json字符串				

​			3》	例子：

​			  				 后端需要的数据接口是json数据，客服端传递的是其他数据类型(string)	

​				

​				

#### 22.vue中delete字段

1》项目中的案例：    删除form表单中的pid，num字段

```javascript
  	delete this.form.pid
    delete this.form.num
```
2》Vue.delete( target, propertyName/index )

 	用法：删除对象的 property。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到 property 被删除的限制，但是你应该很少会使用它。							



### 三、项目中遇到的bug总结



### 四、项目打包上线

​			1》流程：前端打包=>发送给后台上线=>再次进行测试

​					a>打包前修改

​									webpack.config.json：

​														设置代理路径`publicPath:'./dist'`一定要设置./，回到login.html中location.href='./'也要加上一个点

​									在index.html 、login.html中有引入dist的路径也要加上./

​					b>打包：npm run build ===> 没报错基本打包完成，如果报错可能存在文件引入路径的问题，检查一下

​				   c>上线的文件：单独放到一个文件夹下：index.html,login.html,dist文件，除此之外没有文件了

​										      在这个文件夹下本地打开html，一定要在**服务器状态下**打开，不然不行，

​																在服务器状态下打开方法：							

​																											方法一：在浏览器上前面路径换成本地服务器 

​																									 		方式二：在编辑器中的打开浏览器

​			

​					d>测试各项功能，如果没问题，将最后打包好的文件传递给后端，最后打包好的文件是c步骤新建的文件夹



​						注意点⚠️：打包的路径的问题

​											在服务器状态下打开





















