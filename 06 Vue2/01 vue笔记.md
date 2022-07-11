# Vue

前端三大

框架：

​						vue

​						react

​						angular ===> 使用率特别低，几乎每个版本都不一样



vue.js 文件，更新慢 现在2.x.x/3.x.x版本，没什么好改的，所以更新慢

vue-cli 脚手架，更新快 现在4.5.12版本，脚手架需要修改的有很多，所以更新快



##  一、脚手架安装

1.1 vue-cli官网

​	https://cli.vuejs.org/zh/

1.2 安装

​	(sudo) npm install -g @vue/cli

1.3 创建一个项目

​	vue create [项目名称] ===>vue-cli3及以上的版本 

​	===》选择vue 2 / vue 3版本 / 自定义安装需要的插件



```
1.vue create 项目名称

是vue-cli3.x的初始化方式，目前模板是固定的，模板选项可自由配置，创建出来的是vue-cli3的项目，与vue-cli2项目结构不同，配置方法不同，具体配置方法参考官方文档。

2.vue init 

是vue-cli2.x的初始化方式，可以使用github上面的一些模板来初始化项目，webpack是官方推荐的标准模板名。vue-cli2.x项目向3.x迁移只需要把static目录复制到public目录下，老项目的src目录覆盖3.x的src目录(如果修改了配置，可以查看文档，用cli3的方法进行配置)

vue init webpack 项目名称===》适合中大型项目 ===》webpack是官方推荐的标准模板名

vue init webpack-simple 项目名称===》 适合小型项目

vue init simulatedgreg/electron-vue 项目名称===》electron-vue的模板
```



1.4 查看当前的vue-cli版本 

​		vue -V ===> V大写

1.5 安装指定版本（vue-cli）

​		npm install -g vue-cli@2.x.x

​	例如：
​		npm install -g vue-cli@2.8.2

1.6 查看vue-cli2.x及以下可以安装的版本

​		npm view vue-cli versions --json

​	1.6.1 创建项目

​		vue init webpack [项目名称]

1.7 运行项目

​	npm run serve ===> vue-cli 3.x.x及以上版本

​	npm run dev ===> vue-cli 2.x.x及以下版本

1.8 更改配置文件

​	更改配置文件 ｜ packjson.json文件需要重新运行项目







## 二、页面打开流程

index.html  打开页面
src ===> main.js   webpack入口文件（全局js文件，在哪里都执行，main.js中又渲染app.vue：项目打开的文件，不见得在哪都会执行，app.vue可以改名）

index.html | main.js ===> App.vue



vue.js ===> 文件的版本 2.6
vue-cli ===> 脚手架的版本 4.222



## 三、关于vue-cli各个版本目录结构问题

1》

vue-cli 目录结构：3.x.x和4.x.x   没什么太大区别
vue-cli 2.x.x 区别挺大的

例子：

vue-app:   vue.js是2    vue-cli@4.x

vue-demo:  vue.js是2    vue-cli@2.8.2



2》vue老版本(2及以下)与新版本(3及以上)区别？

1）目录结构不同，vue-cli@4.x.x更加轻量级一些，文件少一些，vue-cli@2.8.2依赖项更多，很多依赖项放到本身上，没有放到node_modules里面

2）老版本有很多配置，而新版本有些配置没有，没有后边可能会自己去配

3）目录结构虽然不同，但写代码都在src中，src的目录是一样的



3》.vue文件如何执行起来，如何让浏览器认识，浏览器只认识html？

build ===> webpack.base.conf.js 中的配置，借助loader，vue-loader ===> webpack中的配置

```javascript
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: vueLoaderConfig
  }
```




## 四、.vue文件

### 4.1 vue内容结构

```vue
<template></template> ===>节点 ⚠️注意：template中必须要有一个父元素包裹内容
<script></script>     ===>js|数据|逻辑
<style></style>       ===>样式
```



### 4.2 assets文件夹===>存放资源

​	存放img文件夹、css文件夹、fonts文件夹、mp3、mp4...都放到src中的assets里面



### 4.3 组件内style样式局部化(scoped)

```vue
	<style scoped lang='less'>
  </style>
```



### 4.4 全局的css

​	可以在main.js中引入

```javascript
import './assets/css/common.css'
```



### 4.5 使用less、sass、stylus

```vue
	<style scoped lang='less'>
  </style>
```

⚠️：使用less、sass、stylus在生成vue项目的时候要勾选☑️css插件下载

⚠️：stylus与sass区别不大，不加{}，冒号，分号，加了也ok



### 4.6 script数据驱动===>data(){}

vue讲究单页面操作，**是数据驱动，性能要好些，获取dom的js操作是dom驱动**

data(){} ===> data是放数据的，函数

```vue
格式：	
data(){
	    return{
        
	    }
	}
```



```javascript
例子：
export default {
  name: "App",
  data(){
    return{
      arr:[11,22,33,'44'], // ===》放数据
      str:'你好'
    }
  }
};
```



### 4.7 循环

```vue
<li v-for='(item,index) in arr' :key='index'>
```

​	⚠️：1》像v-for这种指令的，在节点上去写，不是在节点里面，在节点上都不需要加{{}}模版语法

​			2》:key是标识，具有唯一性，加了key提高性能 ==> 向前或后查找匹配形同标示的的，如果不加key会不同的标识别会被替换掉



### 4.8 条件

```vue
<li v-if='true'></li>
<li v-else-if='true'></li>
<li v-else></li>
```

​	⚠️：1》注意我们**不**推荐在同一元素上使用 `v-if` 和 `v-for`



### 4.9 事件

```javascript
	<button id='btn' @click='eventBtn'>按钮</button>

	methods:{
	    eventBtn(){
	      this.arr = ['a','b','c','d'];
	    }
	}
```



### 4.10 简写

​	v-on:click 			===> @click                   绑定事件
​	v-bind:key='index'  ===> :key='index'     绑定属性



### 4.11v-if与v-show区别

### 【面试题】

4.11 v-if和v-show区别 *****************************很重要【面试题】

  1.v-show 只是简单的控制元素的 display 属性，而 v-if 才是条件渲染（条件为真，元素将会被加载，条件为假，元素就不会被加载）；

2. v-show 有更高的首次渲染开销，而 v-if 的首次渲染开销要小的多；

3. v-if 有更高的切换开销，v-show 切换开销小；

4. v-if 有配套的 v-else-if 和 v-else，而 v-show 没有

5. v-if 可以搭配 template 使用，而 v-show 不行

******************做经常切换的效果用v-show



## 五、事件方法===》methods：{}

### 5.1 事件写法

```vue
<button @click='函数( 1,2,3,4,5 )'>  按钮  </button>

methods:{
	函数(  num1,num2....    ){

		}
}
```

⚠️：	如果事件修改，要修改的是原数组



### 5.2 事件对象event

```vue
	@click='函数(参数1,参数2,$event)'

 	methods:{
 		函数(参数1,参数2, event|e ){
 			
 				console.log(event)
 	
 		}
 	}
```



### 5.3 事件的修饰符

```vue
@click.stop    ===> 阻止冒泡

@click.prevent ===> 阻止默认行为
```



### 5.4 按键修饰符

1.按下了enter键｜13键盘码

```vue
@|v-on:键盘事件.键盘码｜按键码别名

@keyup.enter="函数()"｜v-on:keyup.enter='函数()'
@keypress.13='函数()'| v-on:keypress.13='函数()'
```



2.Vue 提供了绝大多数常用的按键码的别名

​	.tab
​	.delete (捕获“删除”和“退格”键)
​	.esc
​	.space
​	.up
​	.down
​	.left
​	.right



### 5.5 系统修饰键

#### 1》系统修饰符

​	可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。
​	.ctrl
​	.alt
​	.shift
​	.meta

```vue
⚠️：在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)

<!-- Alt + C -->
<input v-on:keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div v-on:click.ctrl="doSomething">Do something</div>

```

#### 2》.exact 修饰符

​	  .exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。

```vue
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button v-on:click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button v-on:click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button v-on:click.exact="onClick">A</button>
```

#### 3》鼠标按钮修饰符

​	.left
​	.right
​	.middle



## 六、表单输入绑定（双向绑定）

### 6.1 双向/单项绑定

​	 v-bind:    ===>   :      *****************数据单项

​	 v-model    ===>  双向绑定 ===> 一处改了，其他地方也会同时修改 ===》原理：后边讲

​	⚠️：无论是单选按钮radio还是checkbox复选框都要有value值，用v-module双向绑定



#### 	6.1.1 v-model

##### 					1》基础用法

​						a> input text 和 textarea 元素使用 `value `  property 并将input 作为事件

​						b> checkbox 和 radio 使用 `checked ` property 并将change 作为事件

​						c> select 字段将` value` 作为 prop 并将 change 作为事件。

##### 					2》文本

​						a>单行文本：text          <input type:'text' v-model='message'>

​						b>多行文本：textarea  <input type:'textarea' v-model='message'>			

##### 					3》复选框checkbox

​					  	a>单个复选框，绑定到布尔值		

```html
						<input type="checkbox" v-model="checked"> 
						{{ checked }}
						注意⚠️：视图层上是：口false
```

​						  b>多个复选框，绑定到同一个数组

```html
						<input type="checkbox" value="Jack" v-model="checkedNames">
						<label>Jack</label>
						<input type="checkbox" value="John" v-model="checkedNames">
						<label>John</label>
						<input type="checkbox" value="Mike" v-model="checkedNames">
						<label>Mike</label>
						<br>
						<span>Checked names: {{ checkedNames }}</span>
```

```javascript
            data: {
              checkedNames: []
            }
```

##### 					

##### 					4》单选按钮radio

```html
          <div id="example-4">
            <input type="radio" value="One" v-model="picked">
            <label>One</label>
            <br>
            <input type="radio" value="Two" v-model="picked">
            <label>Two</label>
            <br>
            <span>Picked: {{ picked }}</span>
          </div>
```

```
          data: {
            picked: ''
          }
```

##### 			

##### 						5》选择框select

​						a>单选时：

```html
            <div id="example-5">
              <select v-model="selected">
                <option disabled>请选择</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <span>Selected: {{ selected }}</span>
            </div>
```

```
          data: {
            selected: ''
          }
```

​						b>多选时：

```html
					<div id="example-6">
          <select v-model="selected" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <br>
          <span>Selected: {{ selected }}</span>
        </div>
```

```
        data: {
          selected: []
        }
```



#### 	6.1.2 v-bind

​	1》v-bind单项绑定

案例1:   v-bind:value="str" | :value="str"

```html
		{{str}}
		<input type="text" v-bind:value="str">
```

案例2:  v-bind :value="option.value" | :value="option.value"

```html
		<select v-model="selected" >
			<option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value">
				{{ option.text }}
			</option>
		</select>
		<span>Selected: {{ selected }}</span>
```

```
				data(){
          selected: 'A',
          options: [{
              text: 'One',
              value: 'A'
            },
            {
              text: 'Two',
              value: 'B'
            },
            {
              text: 'Three',
              value: 'C'
            }
          ]
				}
```



自己补充：

v-bind单项绑定，后面的引号内的可作为逻辑变量，eg：

表单中，`disabled=disabled` 禁用，但是加上`v-bind\：`单项绑定后`:disabled=disabled`，`disabled`可以作为变量可以在data数据中定义为`false\true`



#### 【面试题】    

​	Vue中单项数据绑定是？  v-bind 	



### 6.2 修饰符

#### 	1》.lazy

​		在默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步 (除了[上述](https://cn.vuejs.org/v2/guide/forms.html#vmodel-ime-tip)输入法组合文字时)。你可以添加 `lazy` 修饰符，从而转为在 `change` 事件_之后_进行同步：

```html
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg">
```

#### 	2》.number

​	   如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符：

```html
<input v-model.number="age" type="number">
```

#### 	3》.trim

​		如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符

```html
<input v-model.trim="msg">
```





## 七、Class 绑定

1>⚠️ class的传统写法与v-bind:class的逻辑写法是结合起来用的，不会冲突，不会覆盖，是累加的关系

2> v-bind:class中可以加三元运算符



### 7.1 对象写法

===》对象写法

```
v-bind:class="{class属性名:true|false,calss属性名:true|false}" ===>true或false来控制用或不用
```



```vue
		v-bind:class='{ a :true |false , b:true|false   }'

		<script type="text/javascript">
		data () {
			return {
				classObj : {
					a:true|false,
					b:true|false
				}
			}
		}
		</script>

		<style type="text/css">
		.a{

		}	
		.b{

		}
		</style>
```



​	案例：

​			:class样式逻辑，`:class="{color:isColor}"` 

​												data:`isColor: false,`

​												 css:`	.color {color: blue;}`

##### 

### 7.2 数组写法

```vue
		 <div :class="[activeClass,hasClass]"> 这是class数组节点 </div>

		 <script type="text/javascript">
		 data () {
		 	return {
		 		activeClass:'active'
		 		hasClass:'has'
		 	}
		 }
		 </script>

		 <style type="text/css">
	 	.active{

	 	}
	 	.has{

	 	}
		
		</style>
```



### 7.3 三元表达式写法

```html
<div :class='bool ? activeClass : hasClass  '> 最多的写法 </div>

<div :class="[ bool ? activeClass : ''  ,hasClass]"> 这是class数组节点 </div>


<script>
  data(){
    return {
      activeClass: 'active',
      hasClass: 'has',
      bool: true
    }
  }
</script>


<style>
  .active {
    font-size: 50px;
    background: red;
  }
  .has {
    background: blue;
  }
</style>
```





## 八、计算属性

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护，所以，对于任何复杂逻辑，你都应当使用**计算属性**



computed 计算属性：

```vue
<template>
	<div>
		{{changeStr}}  ⚠️直接使用，不加括号，看起来是函数，实际上是属性
  </div>	
</template>


<script>
computed:{
	changsStr(){ ⚠️直接使用，不加括号，看起来是函数，实际上是属性
		return ⚠️ 写逻辑，一定要有return
	}
}
</script>
```



methods方法:

```vue
<template>
	<div>
    {{ conStr() }} ⚠️：函数，使用时要加()
  </div>
</template>

<script>
	methods:{
		conStr(){
			return 写逻辑
		}
}
</script>
```







### 【面试题】

 computed  和   methods 有什么区别？

​		 computed 只在初始化时被调用===>拥有缓存机制

​		 methods 会在数据变化时被调用, 即使变动的数据与自身无关

​		补充：

​				1》computed计算属性方式有缓存，methods方法方式没有缓存

​				2》与本数据不相关的操作，computed不会更新，methods会更新

​				3》修改一个属性，computed与methods都可以实现

​		

## 九、vue中指令

	v-for：循环
	v-if：显示与隐藏
	v-model：双向绑定
	v-show：显示与隐藏
	v-else
	v-bind：单项绑定
	v-on  ===》简写: @ ===》事件绑定
	v-text：解析文本
	v-html：解析html标签 




## 十、vue生命周期

生命周期（生命周期钩子、钩子函数、生命周期钩子函数）

理解：vue从一开始初始化==》修改==》销毁  整个这个流程就是vue生命周期



beforeCreate
created  ===>请求数据（放在created里面）  fetch    ===>代表data数据加载完毕（只是加载数据，还未出现dom请求）

beforeMount
mounted	  ====>代表	 根节点全部加载完毕(this.$el（更新数据） 可以获取到根节点，dom请求完毕，template加载完毕)

beforeUpdate   ===>data被修改前
updated        ===>data被修改后

beforeDestory  ===>当前组件被销毁（删除、关闭）
destoryed	   ===>当前组件被销毁（删除、关闭）



⚠️：页面一打开就先会执行beforeCreate、created、beforeMount、mounted

​		而更新，是在数据发生变化的时候才会被执行

​		而销毁，是在组件被关闭的时候才会被执行



### 【面试题】

​	讲述Vue的生命周期？

​	1》先回答有几个，4组，分别是

​	2》具体讲述每个流程



## 十一、组件

页面和组件不需要区分，app.vue又叫页面又叫组件，但是程序员需要区分，以... .vue结尾的叫组件，也叫页面

### 11.1 组件基本使用

​	组件 ===> xxx.vue 

​	目录结构: components

​	组件：首字母大写

​	引入组件：

```javascript
		import Header from './components/common/Header.vue' // .vue后缀可以不写
		export default {
		  components:{
		    Header // Header:Header ===> es6简写，可以直接写成Header
		  }
		}
```

​	使用：

```html
<template>
	<Header></Header>
</template>
```

### 11.2 组件的传值

注意⚠️：组件之间的传值不能跳级，也不能越级，有些方式可以去越，但是系统自带是不可以越级的，当层级非常非常多的时候，使用其他技术去代替	

注意⚠️：组件传递的值是只读，不能改变，如果要修改利用组件之间传递方法监听值变化来修改，

注意⚠️：在export default中：	

​													name：    放第一位

​													props: { }  放在第二位

​													data(){ }    放在第三位



### 【面试题】

​	 组件传值95%的概率会问	



#### 	 11.2.1 父组件传值子组件 

​		⚠️：父组件传递给子组件的值只读，不能修改，如果要修改，利用父组件向子组件传递方法，监听值变化，子组件调用父组件的方法来修改

​		父组件：传

```html
	<!--传输一条数据-->	
	<子组件 :名称='数据'></子组件>	
	

	<!--传输多条数据-->
	<子组件
    :xxx='数据'
    key = '字符串值' ⚠️：字符串的死值没有:
  ></子组件>	
 
	⚠️：尽量让名称与数据的值一样

```

​		**子组件接收值：props:{}**

​		子组件写法一: 数组的写法 

```vue
	<script>
    export default{
        name:'Header',
        props:['xxx','str']
     }
	</script>
		
	<template>
		{{xxx}}
		{{str}}
		<!--注意调用的是名称，不是props-->
	</template>
```

​		子组件写法二：对象的写法，规定传值类型，String、Number...

```vue
	<script>
    export default{
      name:'Header',
      props:{
        
        xxx:{
        	type:String, ⚠️传值类型
          default:默认值 ,⚠️默认值
          required:true|false ⚠️是否为必填项、
          validator：Function⚠️：自定义验证函数会将该 prop 的值作为唯一的参数代入。在非生产环境下，如果该函数返回一个 false 的值 (也就是验证失败)，一个控制台警告将会被抛出
        },
      
        str:Number,
      
        yy:String
      
      }
    }
	</script>

	<template>
		{{xxx}}
		{{str}}
		<!--注意调用的是名称，不是props-->
	</template>
```



#### 	  11.2.2 子组件传值父组件  

​		子组件:传

```js
		this.$emit('自定义事件名称',值);
```

​		父组件:接收

```vue
		  	<template>
            <Swiper
             @自定义事件名称='methods定义的函数'
             ></Swiper> 
				</template> 

	    	<script>
						methods定义的函数(data ===>就是值 ){
								console.log(data)
						}
				</script>
```



#### 		 11.2.3 兄弟组件的传值 (bus.js)

​		a> 弄一个公共的.js文件(bus) ===> 实例化vue

```js
      import Vue from 'vue'
      export default new Vue; 
			// 把new vue 实例共享出去
```

​		b> 兄弟A:传值：bus.$emit('自定义事件名称','值')

```js
			import bus from '../bus.js'
			bus.$emit('自定义事件名称','值')

			⚠️：$emit:触发当前实例上事件
      ⚠️：bus返回new vue实例化，把new vue实例共享出去
```

​			 兄弟B:接收值:bus.$on('自定义事件',function(data){})

```js
      import bus from '../bus.js'
      bus.$on('自定义事件名称',function(data)){
      	data就是传过来，接收的数据
      }
      
      ⚠️：$on:监听当前实例上的自定义事件
      ⚠️：bus返回new vue实例化，把new vue实例共享出去
```



## 十二、axios

​	补充：

​	1》这里讲vue如何请求数据，以及如何将数据放到页面中：请求的数据放到页面上===》data初始化数据 ===》赋值

​	2》一般网站端口为80，localhost以及192.168.2.11直接对应项目中的public目录，打开的是public的index.html页面，在public中新建data.json也可以访问到

​	3》**axios数据请求写在： created(){}生命周期中**

​	

### 12.1 请求数据

​	vue中请求数据      ===》axios | fetch ｜vue-resource(见crm后台管理项目)  ：Vue.js 2.0 版本推荐使用 axios 来完成 ajax 请求。

​	jquery中请求数据 ===》 $.ajax | fetch

​	zepto中请求数据  ===》$.ajax | fetch

​	mui中请求数据.    ===》mui.ajax | fetch

​	fetch 通用，不需要安装，但兼容性比较差，现在已经不用考虑ie端的兼容了，可以用fetch

​	

### 12.2 axios使用

​	12.2.1下载

​	 		`npm install axios -S`

​	12.2.2 引用 ===> 写在main.js全局js文件中，被全局使用

```js
    import axios from 'axios';
    Vue.prototype.axios = axios; ===》给vue添加原型方法，在其他vue中使用 this.axios
```
​    12.2.3 写法

 		http://www.axios-js.com/zh-cn/docs/

​		**axios数据请求写在： created(){}生命周期中**

​		get请求：

```js
        // 为给定 ID 的 user 创建请求
        this.axios.get('url')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


        // 上面的请求也可以这样做
      	 this.axios.get('url', {
            params: { ⚠️===>相当于ajax中的data，在axios中是params代表传递的数据
              ID: 12345
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


					// 方法2:
					// 获取远端图片
         this.axios({
            method:'get',
            url:'http://bit.ly/2mTM3nY',
            params:{
              id:333,
              xxxx:'我不是不懂事，我是舍不得你'
            },
            responseType:'stream'
          })
            .then(function(response) {
            response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
          });
```

​		post请求：

```js
				//方法1:     	
				this.axios.post('url', {
          firstName: 'Fred',
          lastName: 'Flintstone'
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });


				// 方法2:
        this.axios({
          method: 'post',
          url: '/user/12345',
          data: {
            firstName: 'Fred',
            lastName: 'Flintstone'
          }
        });
```



​	注意⚠️：

​					1》main.js是全局的，在哪都会执行的，使全局都能引入axios，可以在main.js中设置

​					2》请求的数据放到页面上===》data初始化数据 ===》赋值

​					3》vue(单页面应用)通常做的项目有两种：

​																	a>后台管理系统

​																	b>通过手机移动端浏览器打开的页面 

​																		===》淘宝无限适配方案

​																		===》每个页面都有可能使用，js文件放到src文件夹下的assets中

​																		===》在main.js中引入 import ‘./assets/flexible.js'

​					4》main.js要擅用，main.js相当于全局js，入口是index.html，找js先找main.js，把所有组件都可能用的文件再main.js中引入，例如：公共css、公共js...



### 【面试题】

​	说说flexible.js原理？(淘宝无限适配)

```js
  function fun(){
    var doc = document.documentElement;
    doc.style.fontSize = doc.clientWidth / 10 + 'px';
  }
  fun();
  window.addEventListener('resize',fun);
```
注意⚠️：自适应要加这个meta字体才会变化<meta name="viewport" content="width=device-width,initial-scale=1.0">





## 十三、Vue路由

vue是单页面应用（SPA），只有一个html（单页面应用是通过锚点进行跳转的，单页面应用不会刷新页面，改变的是url，孕育宝典html源生项目就是vue的前身，孕育宝典怎么做的，vue就是怎么做的）

文档链接：https://router.vuejs.org/zh/installation.html



### 13.1 目录结构

​	a》项目目录结构

​	main.js    ===》 entry 入口js文件【全局js文件】
​	App.vue    ===》 首次加载的组件(并不代表首页)
​	assets     ===》 放入资源【css、图片、字体图标...】
​	components ===》 放入组件(.vue组件首字母要大写)
​	router     ===》 vue路由的配置文件
​	views      ===》 页面



​	b》views文件夹与components文件夹

​	页面与组件，页面就是这些组件的包裹元素，页面中引入组件

​	views文件夹下：存放页面    以.vue结尾文件

​	components文件夹下：存放组件（组件首字母大写）    以.vue结尾文件

​	views: 存放页面

​				Home.vue 首页

​				City.vue 城市列表页

​	components：存放组件

​				home文件夹：

​								...首页的各种组件

​								Header.vue组件

​								Swiper.vue组件

​								...

​				city文件夹：

​								Header.vue组件

​								CityList.vue组件

​								...

​				common文件夹：

​								...公共的各种组件

### 13.2 页面跳转配置

​     		===》在App.vue中专门配页面，配跳转

```html
	切换的内容（管视图的）：	<router-view/> ===》放在那里，页面视图显示就在那里，上/下/左/右/中
	跳转到哪里（管跳转的）：  <router-link to="/">Home</router-link>  ===>相当于 <a href=""></a>
```



补充：

​		1》在.gitignore中注释了哪些文件不上传到远程仓库，eg：node_modules、/dist...所以将项目clone到本地需要npm install -S下载到本地

​		2》path : '/' ===》代表首页或则默认页





## 十四、路由跳转方式

`<router-link to>`与`$router.push()`区别：

​			1.<router-link to>能够右击打开新页面，复制链接，用户体验更好一点，$router.push()不可以

​			2.<router-link to> 是a链接跳转方式，$router.push()是js跳转方式

### 	14.1 router-link	to的写法 ===>声明式导航

​					===》声明式导航，创建a连接的形式来定义导航连接

```html
		写法一：主流写法
		<router-link to="/">Home</router-link>


		写法二：用的一般
		<router-link :to="{
			path:'/路径',
			query:{传递的参数}
		}">Home</router-link>

		例子：
		<router-link :to="{ 
       path:'/about', 
       query:{
       userName:'zhangsan'
     } 
   	}">About</router-link>


		写法三：写法不多
		<router-link :to="{
			name:'router/index.js配置的name',
			params:{传递的参数}
		}">Home</router-link>
```

​	

### 	14.2 编程式导航 

​					===》通过js形式不通过上面a连接的形式

```js
		a> this.$router.push()  ===》可以返回

			// 字符串
			router.push('home')

			// 对象
			router.push({ path: 'home' })

			// 命名的路由
			router.push({ name: 'user', params: { userId: '123' }})

			// 带查询参数，变成 /register?plan=private
			router.push({ path: 'register', query: { plan: 'private' }})

		b> this.$router.replace() ===》不会返回 ===》跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。===》一级页面不能返回，所以只能用replace

		c> this.$router.go(1)     ===》返回-1 / 前进2 哪页面，go(0)就是刷新

		d> this.$router.back()    ===》返回上一页
```



### 	14.3 router-link 配置

​					tag : 默认是a标记，可以修改

​					tag='li'  tag='button|div'

```html
				<router-link to="/" tag="div">
          <div>Home</div>
				</router-link> ===> <a href=""><div>Home</div></a>

				<router-link to="/" tag="div">Home</router-link> ===> <div>Home</div>
```



### 14.4 默认类

​		默认触发的class类(添加点击的样式(导航点击跳转的样式class名)) ： router-link-exact-active



## 十五、router/index.js 配置

### 15.1 直接访问

```js
import Home from '../views/Home.vue'	
{
	    path: '/',        ====>路径,'/'代表首页或则默认页
	    name:'Home',	 	  ====>name名称，给路径做标示或者判断
	    component: Home   ====>跳转到这个路径，对应访问的.vue文件（要在index.js中引入home.vue页面）
	}
```

### 15.2 懒加载

```js
	{
		path: '/', 
	    name:'Home',
	   	component:()=>import('.vue文件的路径')
	}

注意⚠️：一级页面、首页、下面写的tabbar是不适合做懒加载的，二级三级页面做懒加载	
			这里的懒加载：先跳转路由，再引入页面
      上面直接访问是：先引入页面，再跳转路由
```

### 15.3 路由重定向

```js
	{
			path: '*', 
	   	redirect:Home
	}
```



## 十六、小鹿线移动端vue目录搭建练习

1》项目目录结构

​	src

​	views 

​		Home.vue
​		Curriculum.vue
​		Learning.vue
​		About.vue

​	components

​		home

​			...首页的各种组件

​		curriculum

​			...curriculum页的各种组件

​		common

​			...公共的各种组件



2》App.vue中的`<router-link to="/"></router-link>`单独封装成一个组件放到components中的common文件夹下面===》实现不是所有的页面都有tabbar

```html
<div> 
	<router-link to="/"></router-link> ===》⚠️：可以单独封装成一个组件放到components中的common文件夹下面
</div>
```

​	

3》公司里面做项目App.vue里面东西很少，基本上只有`<router-view></router-view>`，当然也有例外





## 十七、路由相关【面试题】

### 17.1 路由模式

​	Vue路由的模式？

​	mode:'hash' ===》默认的 ===》有#号（可以理解为锚点，打包后生成静态文件，双击html可以打开）
​		******http://localhost:8080/#/about

​	mode: 'history',===》一般项目中用history ===》（没有锚点，打包后生成静态服务，没有启动后端静态服务，打不开页面，因为静态服务请求本地js文件加载它）
​		******http://localhost:8080/about

```js
const router = new VueRouter({
	mode:'history', // mode:'hash'
	routes
})
```



### 17.2、路由拦截

**看二十一**

**路由拦截：主要是利用vue-router提供的钩子函数beforeEach()对路由进行判断**

**拦截器：**要想统一处理所有http请求和响应，就得用上拦截器。通过配置http response inteceptor，当后端接口返回401 Unauthorized（未授权），让用户重新登录。

​				设置拦截器的目：当我们需要统一处理http请求和响应时我们通过设置拦截器处理方便很多.

查看地址：https://www.jianshu.com/p/d7a03fed7a7e







### 17.3 路由(SPA：单页面应用)、有什么缺点

​		1》 首屏加载慢：例如，有50个组件，全部打包到一个index.html页面上，东西多，首屏加载慢，									 

​						 优势：在切换的时候非常顺滑，不需要刷新页面打开另一个页面，不需要加载过程

​		2》 不利于SEO：SEO就是蜘蛛抓取，单页面应用只有一个URL，只有一个html，只会抓取一次，百度网站只能收录一个页面，如果多页面，多个html，就会抓取多个，百度网站也会收录多个页面

​		3》 不适合开发大型项目：当项目特别特别大的情况下打包到一个html里面也不合适，vue项目本身不适合做PC端，vue是来做比较小型的手机浏览器打开的页面，单页面应用，后台管理系统（不能让别人搜到的）



### 17.4 $router 和  $route区别

​		1》 $router为VueRouter的实例，相当于一个全局的路由器对象，里面含有很多属性和子对象，例如history对象。经常用的跳转链接就可以用this.$router.push，和router-link跳转一样。

​		2》 $route相当于当前正在跳转的路由对象。可以从里面获取name,path,params,query,meta等。



​		重点：用js方式跳转页面用$router，获取各种参数用$route



​		⚠️：this.$router中的this是Vue 的实例,this.$router与this.$route都是当前Vue实例的不同属性

### 17.5 Vue页面首屏加载慢是怎么回事？

​		 	一级页面取消懒加载路由模式

​			有很多原因所导致，请求，数据多，在路由这一块最主要就是：一级页面取消懒加载路由模式



### 17.6 、用过keep-alive吗？

​		1》是什么？缓存组件
​		2》场景：如果切换的值是一样的，那么数据就没要再次请求了。
​		3》会多俩个生命周期（钩子函数）

    	  加载：activated

​	 		 销毁：deactivated



## 十八、Vue中内置的组件keep-alive

```html
	<keep-alive></keep-alive>	===》放在App.vue中，包裹着<router-view></router-view>
```

### 18.1 keep-alive是什么

​	Vue内置的组件，能在组件切换的时候保存状态在内存中，防止dom重复渲染

### 18.2 keep-alive使用场景

​	把页面保存在内存中，记录输入的内容操作

### 18.3 用keep-alive会多俩个生命周期函数

​	1. activated

      在 keep-alive 组件激活时调用
      该钩子函数在服务器端渲染期间不被调用

​	2. deactivated

      在 keep-alive 组件停用时调用
      该钩子在服务器端渲染期间不被调用

被包含在keep-alive中创建的组件，会多出两个生命周期的钩子，activated与deactivated，只有组件被keep-alive包裹时，这两个生命周期函数才会被调用，如果作为正常组件使用，是不会被调用的

使用keep-alive会将数据保留在内存中，如果要在每次进入页面的时候获取最新的数据，需要在activated阶段获取数据，承担原来created钩子函数中获取数据的任务。



### 18.4 有的页面需要保存，有的不需要

方法一：

​		字符串或正则表达式。只有名称匹配的组件会被缓存。

```html
 	  <keep-alive include='组件的name'></keep-alive>

例子：
		<keep-alive include="Home">
			<router-view></router-view>
		</keep-alive>
```

​		字符串或正则表达式。任何名称匹配的组件都不会被缓存。

```html
	<keep-alive exclude='组件的name'></keep-alive>
```

​		默认：根据组件的name，export default {name : '这个名称' }

```html
	<keep-alive exclude='News,City'></keep-alive>
```



方法二：更加常用

```html
App.vue：

<keep-alive>
		<router-view v-if="$route.meta.keepAlive">
			<!-- 这里是被缓存的视图组件，比如 Home -->
		</router-view>
	</keep-alive>

	<router-view v-if="!$route.meta.keepAlive">
		<!-- 这里是不被缓存的视图组件，比如 Text -->
	</router-view>
```
```js
// router中index.js:路由配置  

	{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/city',
    name: 'City',
    component: City,
    meta: {
      keepAlive: false // 不需要被缓存
    }
```



### 18.5 同一个页面中有的部分需要被缓存，有得部分不需要被缓存（城市列表页案例）

利用City.vue向Home.vue页面传值：

```js
			this.$router.push({
					path:'/',
					query:{
						city:backCity
					}
				})
```

Home.vue页面接收值并在**activated生命周期中**判断：

```js
		activated(){
			if(this.cityName != this.$route.query.city){ //⚠️：这里是$route接收query的值
				this.httpData();
			}
		},
		deactivated(){
			console.log('keep-alive销毁')
		}
```



## 十九、路由嵌套

子路由：children:[

​					  {
​			   	     path: 'tuijian',    ⚠️：不加"/"
  			  	    name: 'Tuijian',
   			  	   component: ()=> import('../components/home/tuijian')
   				   },

​				]

```js
router中的index.js路由配置：

{
	    path: '/home',
	    name: 'Home',
	    component: Home,
	    children:[
	      {
	        path: 'tuijian', ⚠️：不加"/"
	        name: 'Tuijian',
	        component: ()=> import('../components/home/Tuijian')
	      },
	      {
	        path: 'guanzhu',	⚠️：不加"/"
	        name: 'Guanzhu',
	        component: ()=> import('../components/home/Guanzhu')
	      }
	    ]
	}
```

```html
Home.vue页面实现跳转：

		<router-link :to="{
			path:'/home/tuijian', ⚠️：前面加/
		}">推荐</router-link>
		<router-link :to="{
			path:'/home/guanzhu' ⚠️：前面加/
		}">关注</router-link>
		
		或者这么写：
		
    <router-link to='/home/tuijian'>推荐</router-link>  ⚠️：前面加/
    <router-link to='/home/guanzhu'>关注</router-link>  ⚠️：前面加/

		<router-view></router-view>
```

⚠️：Tuijian.vue、Guanzhu.vue写在了components组件的home文件夹下，但是在Home.vue页面上没有引入组件，只是实现跳转





## 二十、路径传值 

vue中传值方法：

​						路径传值  ==》 用的比较少，新手用的比较多，使用路由url，query

​						组件传值   ==》用的很多，老手用的比较多   

注意：路径传值一定要把对象转换成字符串，路径接收值再把字符串转换成对象							

3.1 传

```html
声明式：传	
<router-link :to='{
		path:'跳转的路径',
		query:{
			key:value
		}
	}'>
</router-link>
```

```js
编程式：传
this.$router.push({
    path:'/',
    query:{
      key:value
    }
})
```

3.2 接

```js
	this.$route.query
```



## 二十一、路由拦截（Vue导航守卫）

场景：做拦截==》检测用户是否登录，如果登录，就next()，如果没有登录，跳转到对应的登录页面。

使用率：局部守卫(用的最多) > 组件内守卫 > 全局守卫



**路由拦截：主要是利用vue-router提供的钩子函数beforeEach()对路由进行判断**

**拦截器：**要想统一处理所有http请求和响应，就得用上 axios 的拦截器。通过配置http response inteceptor，当后端接口返回401 Unauthorized（未授权），让用户重新登录。

查看地址：https://www.jianshu.com/p/d7a03fed7a7e



### 21.1 全局守卫

全局守卫：在哪加都行，一般放到main.js，因为main.js是全局js文件，在哪里都会执行

```js
router.beforeEach((to,from,next)=>{})
router.afterEach((to,from,next)=>{})

⚠️：to：进入到哪个路由（当前状态），from：从哪个路由离开（上一次的状态），next：函数，决定是否展示你要看到的路由页面===》可以在控制台打印一下，to，from看看，是path,query,name,params,meta等一系列的东西
```

```js
main.js文件：

router.beforeEach((to,from,next)=>{

  if(to.path == '/login' || to.path == '/register'){
    next();
  }else{
    alert('您还没有登录，请先登录');
    next('/login');
  }

})
```



### 21.2 局部守卫（路由独享守卫）

局部守卫：在router/index.js里面写

```js
beforeEnter:(to,from,next)=>{}
```

```js
router中index.js：
{
		path: '/city',
		name: 'City',
		component: City,
		meta: {
			keepAlive: false
		},
		beforeEnter: (to, from, next) => {
			if(to.path=='/City'){
				next()
			}else{
				next('/login')
			}
		}
	}
```



### 21.3组件内守卫

```
	beforeRouteEnter(to, from,next){
		// 在渲染该组件的对应路由被confirm前调用
		// 不！能！获取组件实例`this`
		// 因为当守卫执行前，组件实例还没有被创建
	}
	beforeRouteUpdate(to,from,next){
		// 在当前路由改变，但是该组件被复用时调用
		// 举例来说，对于一个带有动态参数的路径/foo/:id,在/foo/1和/foo/2之间跳转的时候，
		// 由于会渲染同样的Foo组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用
		// 可以访问组件实例`this`
	}
	beforeRouteLeave(to,from,next){
		// 导航离开该组件的对应路由时调用
		// 可以访问组件实例`this`
	}
```



```js
在Guanzhu.vue组件内：

export default {
    beforeRouteEnter(to, from, next) {
      if (false) {
        next('/login');
      } else {
        next()
      }
    }
  }
```





to:即将要进入的目标路由对象；

from：当前导航即将要离开的路由对象；

next：调用该方法后，才能进入下一钩子函数（afterEach）。



​			next() 直接进入to 所指路由

​			next(false) 中断当前路由

​			next('/login') 跳转指定路由

​			next('error') 跳转错误路由



## 二十二、Vue插件

vue中的插件：vue-xxx，百度、谷歌、github、npm上搜，最好在npm、github上面搜

swiper插件有专门在vue中使用的swiper（swiper内置css有问题，自己可以引用CND中的link放到public的index.html中，也可以新建一个css文件swiper.css，把代码复制粘贴，放到src的assets中。在06demo2中有新建好了的）

jQuery是dom，Vue 是数据驱动，非常不建议在Vue中使用jQuery或则zepto，Vue就用Vue

### 22.1 先下载

​	cnpm install swiper vue-awesome-swiper --save

### 22.2 引入

```js
	import xxx from 'xxx'
	Vue.use(xxx);
```

注意⚠️：单页面用，就引入到单页面中，多页面用就放到main.js中

### 22.3 配置

```
	<xxx></xxx>
```



### 22.4 Swiper插件

​			   看下面项目细节26.3.14 Swiper插件

### 22.5 better-scroll滚动插件

​				看下面项目细节，26.3.13 better-scroll滚动插件

### 22.6  ly-tab选项卡插件

​				看下面项目功能 26.2.2 首页顶部ly-tab选项卡插件

### 22.7 分享插件

​				看下面项目细节26.3.15 分享功能

### 22.8 Vue UI 框架

​				看下面项目细节26.3.4vue常用的UI框架



## 二十三、vue中获取dom对象ref

```
<h1 ref='随便一个名称'></h1>

this.$refs 获取到对应的dom对象
```

```vue
<template>
	<h1 ref='随便一个名称'></h1>
</template>

<script>
	mouted(){
 	 this.$refs.名称 ===》 获取到对应的dom对象
	}
</script>
```
Vue是数据驱动，某些情况下要获取到dom就使用ref

### 【面试题】

在Vue中想要获取到某一个dom用谁？

ref以及refs，两个是配套使用的

## 二十四、Vue调试工具

24.1 解压包

24.2 谷歌浏览器===》更多===》扩展程序

24.3 点击【加载已解压扩展程序】===》选择文件 | 直接拖进去

注意：谷歌浏览器的开发者工具要打开别关





## 二十五、Vuex

注意：

​		1》vuex尽量在store中index.js本身上面去修改，不要单独的在Home.vue等页面或则组件去操作或则修改，有点违背vuex的原理：**集中式存储管理**，本身变，调用的都会变，而不是调用的单个组件或则页面变，导致其他地方的数据都变，这是违背原理的

​		2》vuex超级重要，与router一样重要

​		3》vuex在什么情况下使用？

​				在组件传值麻烦的情况下使用，**共享一些数据**的情况下用

### 25.1 是什么：状态管理模式

​	它采用“集中式存储管理”应用的“所有”组件的状态。

### 25.2 核心概念

​	state   	        ===>   存放数据的                            : 类似于组件中的data
​	getters	 	  ===>   计算属性                                : 类似于组件中的computed
​	mutations     ===>   放入方法 （只能放同步）     : 类似于组件中的methods
​	actions          ===>    放入方法（同步异步都可以）    
​	modules       ===>    模块



### 25.3 state数据使用

​			state共享属性

​			state调用：两种方式

​								this.$store.state.xxx
​								mapState

```js
	方法一：a> this.$store.state    ⚠️：在main.js中不用this.$store用store.state
	方法二：b> import {mapState} from 'vuex';
						export default{
							computed:{
								...mapState(['arr','str'])
							}
						}

				 视图： {{ 	arr    }}
```



### 25.4 getters 计算属性

getters调用：两种方式

​						this.$store.getters.xxx
​						mapGetters

```js
	方法一： a> this.$store.getters
	方法一： b> import {mapState,mapGetters} from 'vuex';
						  export default{
							  computed:{
								 ...mapState(['arr','str'])
								 ...mapGetters(['changeCityName'])
								}
							}

				 视图： {{ 	changeCityName    }}
```



### 25.5 mutations

**1> 调用：两种方式**

​					this.$store.commit('xxx',传递的值)
​					mapMutations

```js
	方法一：
  		  created(){
					this.$store.commit('btn',传递的值)
				}

	方法二：
  import {mapMutations} from 'vuex'
	export default {
	  	name: "Home",
	  	methods:{
	  		...mapMutations(['btn','add','reduce'])
	  	}
	};
	视图： <button @click='btn'> 修改了 </button> 
```



**2> mutations可以传递多个参数**

​	mutations(参数1，参数2)

​			参数1：state  （无论传不传值，参数1已经固定是state）

​			参数2:   传入过来的值/（mutations只能传1个值，要想传多个，将参数2设置为对象）

```javascript
export default{
	btn(state,obj){
		console.log(state,obj);
		console.log(obj.index,obj.index);
	}
}
```



**3> mutations-types.js文件**

​	目录结构：

​					store

​								index.js                      ===》入口

​								state.js                       ===》数据｜属性

​								getters.js                    ===》计算属性

​								mutations.js              ===》方法

​								mutations-types.js    ===》方法名称

​	公司里面为了方便管理，会多一个mutations-types.js文件，专门用来存放方法名称

```javascript
mutations-types.js：
export const REDUCE = 'REDUCE'
export const ADD = 'ADD'
```

```javascript
mutations.js:
import {ADD,REDUCE} from './mutations-types'
export default {
	[REDUCE]( state ){
		if( state.num < 1 ) return;
		state.num--;
	},
	[ADD]( state ){
		state.num++;
	}
}


actions.js:
import {ADD,REDUCE} from './mutations-types';
export default {
	totalNum( {commit} ,obj ){
		if( obj =="+" ){
			commit(ADD);
		}else{
			commit(REDUCE);
		}
	}
}
```





### 25.6 actions

​	1》 actions是提交mutations的，并且是异步的，很容易调试

​		   actions 参数一：{commit}，参数二：只能传1个值，要想传多个，将参数2设置为对象

```javascript
actions({commit,getters,state},接收的参数){
	commit('提交mutations的方法名称',接收的参数)   ====> commit提交 mutation
  	getters.getters的属性
  	state.state的属性
}
```

​	2》vuex中：mutations与actions的区别？

​						共同点：都是放入函数的

​						区别：

​								    mutation 必须是同步函数
​									actions  是异步的

​									在项目中如果有异步的操作，那么actions调试起来要比mutations好的多

​									调试：我们利用vue tools调试工具调试，调试有异步的情况下，mutations调试起来很费劲，视图层比数据层慢一步，数据层不知道自己是否该更行了

​								（mutations无法捕捉到异步，而actions可以捕捉到异步）

​						 使用：
 								   actions是用来提交mutations

​									（具体的功能写到mutations，使用写到actions，commit调用mutations里面的某个方法，用来提交，这样子可以解决异步问题，不用考虑异步不异步，都是actions在使用）

​										

​						补充：异步同步

​									同步：JS===》单线程：一步一步的执行，先执行一步再执行一步 ===> 1 2 3 4 5 6 7 8 9 ...

​									异步：谁先执行完，就先执行谁===》4 2 3 5 9 7 ....

​									promise：是让异步变为同步





### 25.7 modules

最大的作用：提供了命名空间，细分，让大型项目不那么乱，好维护，易维护

（由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex 允许我们将 store 分割成**模块（module）**。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割）

使用modules的目录结构：

​		store

​					index.js

​					modules

​								shopcar

​										state.js

​										getters.js

​										mutations.js

​										mutations-types.js

​										actions.js

​								order

​										state.js

​										getters.js

​										mutations.js

​										mutations-types.js

​										actions.js

​								xxxx

​										state.js

​										getters.js

​										mutations.js

​										mutations-types.js

​										actions.js



store：index.js:

```javascript
//购物车的仓库
import cart from './modules/cart.js'

export default new Vuex.Store({
  	
  	modules:{
  		cart
  	}

});
```

moudles: cart.js

```javascript
export default{
	state:{
    a:123
  },
	getters:{},
	mutations:{},
	actions:{}
}
```

ShopCar.vue页面调用:

```javascript
import {mapState} from 'vuex'

export default{
  computed:{
    ...mapState({
      	aaa:state=>state.cart.aaa ⚠️方法一：箭头函数(state) => {return state.car.aaa}
    															⚠️方法二： this.$store.state.menu.menu
    }),
  	...mapMutations({
 				 initUser:mutations=>mutations.user.initUser  
		})
    ⚠️：这里写成 ...mapMutations(['initUser'])也行
  }
}
```





### 25.8 抽离

在store文件夹下单独建立state.js、getters.js、mutations.js...单独抽离出来

```js
state.js:

export default{
  str:'张三',
  arr:['a','b','c','d']
}
```



在index.js中导入

```javascript
import state from './state'
import getters from './getters'
import mutations from './mutations'

export default new Vuex.Store({
	states,
  getters,
  mutations
})
```



### 25.9 不抽离

store中index.js:

```js
store中index.js:

export default new Vuex.Store({
  state: {
  		str:'小秦1111',
  		arr:['a','b','c'],
  		orderNumber:'xxx',
  		cityName:'北京市'
  },
  getters:{
  		changeCityName( state ){   ⚠️：这里直接将state作为参数传进来
  			return state.cityName.replace('市','');   ⚠️：这里直接使用state
  		}
  },
  mutations: {
  		btn( state ){   ⚠️：这里直接将state作为参数传进来
  			state.str = '!!!!!!!!'  ⚠️：这里直接使用state
  		}s
  },
  actions: {},
  modules: {},
});
```





### 【面试题】

#### 【面试题1】vuex中有几个属性？

#### 【面试题2】vuex中：mutations与actions的区别？

​						共同点：都是放入函数的

​						区别：

​								    mutation 必须是同步函数
​									actions  是异步的

​									在项目中如果有异步的操作，那么actions调试起来要比mutations好的多

​									调试：我们利用vue tools调试工具调试，调试有异步的情况下，mutations调试起来很费劲，视图层比数据层慢一步，数据层不知道自己是否该更行了

​								（mutations无法捕捉到异步，而actions可以捕捉到异步）

​						 使用：
 								   actions是用来提交mutations

​										

​						补充：异步同步

​									同步：JS===》单线程：一步一步的执行，先执行一步再执行一步 ===> 1 2 3 4 5 6 7 8 9 ...

​									异步：谁先执行完，就先执行谁===》4 2 3 5 9 7 ....

​									promise：是让异步变为同步









## 二十六、Vue小米商城项目

### 26.1 项目搭建

 前台url：localhost:8080 

#### 26.1.1 后端搭建

​		一、全局安装：

　　		npm install express-generator -g

​		二、进入项目目录（vue-project）===》生成server项目后台文件夹

​				express --view=ejs server

​		三、启动项目

​				3.1 cd 项目目录中
​				3.2 npm install
​				3.3 npm run start 



​		1》启动页面不能关闭

​		2》后台url：localhost:3000  

​			  运行的页面是：serve ===》views ===》index.ejs  

​	  		写接口：routes ===》index.js 接口

```js
routes ===》index.js：

router.get('/list', (req, res, next) => {
	res.send({ // ⚠️：send换成json也行
		a: 1
	})
})


⚠️：路径传值：通过localhost:3000/list访问
		后端这里修改一次就要重新启动一次，不然会报错404
```

#### 26.1.2 前台搭建

##### **1、前台目录搭建**

public

​		favicon.ico  : 网页图标 
​		index.html   : 入口的html文件

src    ： 项目前台文件 

​		components : 页面的组件(.vue)⚠️：所有的组件及页面，首字母大写

​				common | 底部tabbar

​					Tabbar.vue

​		home   | 首页的所有组件⚠️：所有的组件及页面，首字母大写

views :  页面(.vue) ⚠️：一级页面都别做懒加载

​		Home.vue
​		List.vue
​		Shopcart.vue
​		My.vue

assets：放资源

​		img

​		js	

​		css

​		iconfont


server ： 项目后台文件

​		server ==> routes ==>index.js  :  写接口

```js
	router.get('/list', function(req, res, next) {
	  	res.send({
	  		a:1
	  	})
	});
```



##### **2、main.js引入文件**

​		引入自适应flexible.js

​		引入axios

​		引入common.css

​		引入字体图标iconfont.css===》iconfont.css中data:app...前面不需要加../fonts

​		引入插件



### 26.2 项目功能

#### 26.2.1 首页tabber

**1》细节小点**

​				a》tabber组件有些页面有，有些页面没有，所以一定不能在App.vue中写，放到components中的common

​				b》一级页面都别做懒加载

​				c》页面跳转：一级页面不能返回，所以只能用replace



**2》tabbar使用replace、push页面跳转双击报错：Avoided redundant navigation to current location: "/home".**

​		错误说明：

​							在vue项目中，如果使用`$router.push` `$router.replace`跳转到一个相同的路由，就会遇到Avoided redundant navigation to current location: "/home"错误。		

​		原因分析：

​							在`vue-router`在`3.1.0`版本之后，`push`和`replace`方法会返回一个promise对象，如果跳转到相同的路由，就报`promise uncaught`异常

​		解决方法：		

​							方法一：使用catch捕获异常

​											在使用push的时候，需要使用catch来处理可能出现的异常

```javascript
							this.$router.push('/login').catch(err => {
                	retrun err
              })
```

​							方法二：修改push方法

​											在`router/index.js`导入`VueRouter`的时候，进行全局的处理

```javascript
							const originalPush = VueRouter.prototype.push
							// 重写了原型上的push方法，统一的处理了错误信息
							VueRouter.prototype.push = function push(location) {
  								return originalPush.call(this, location).catch(err => err)
							}
```



**3》tabbar点击图片路径变化**

​		a》`v-for`循环中不能加this，自带this，`{{this.$route.path}} `应写成`$route.path`不应加`this`和{{}}

​		b》template中img三元表达式写法	`<img :src="$route.path.includes(item.path) ? item.selected : item.active">`

​		c》includes('搜索内容',搜索的位置) ：返回布尔值，表示是否找到了参数字符串、数组，支持第二个参数，表示开始搜索的位置。===> ES6新增

​		d》`<img :src="">`一定要加`:`代表`v-bind`单项绑定，一定要绑定上才能使用数据

​		e》放到`<template>`中的路径是正常的assets中文件的路径，

​		 	 放到`data`中的路径是public下文件夹的路径，所以img文件夹要复制一份存放到public中

```js
		<ul>
			<li v-for='(item,index) in tabbarList' :key='index' @click='switchTab(item.path)'>
				<img :src="$route.path.includes(item.path) ? item.selected : item.active"> 
				<span>{{item.title}}</span>
			</li>
		</ul>
```



**4》一进入首页，home首页的图标不亮是路由问题**

​	 在router/index.js中`path:'/'`路径设置为重定向，跳转至home页面

```javascript
{
	path:'/',
	redirect:'/home'
}
```



#### 26.2.2 首页顶部ly-tab选项卡插件

1》顶部选项卡插件：ly-tab

​		地址：https://github.com/ScoutYin/ly-tab

2》@change事件，有item，index值，具体看文档

3》点击选项卡切换 ===》主要应用：根据后端传递过来的数据 v-if = ' ture｜false ' 来判断，true显示，false不显示，

​																点击不同的选项卡，修改newData值，将newData的值渲染到页面上



#### 26.2.2 首页懒加载

地址：http://mint-ui.github.io/docs/#/zh-cn2/lazyload





#### 26.2.3 首页动画切换

​	a>首页动画过渡有bug

​	只能一进入页面有动画，切换选项卡页面没有进入退出动画，只有首页的recommend板块有动画

​	原因：改版问题，`<transition-group>`中的:key不能写成v-for循环中的index，改成item.id即可

​	注意：要做成小米的首页选项卡切换，需要自己写动画，网上可以找代码



#### 26.2.4 搜索页本地存储

用到的方法：

​					1》v-model="searchList" ===>双向绑定，将搜索框搜索的值传递到控制台

​					2》new Set( ) ===> 数组去重，它类似于数组，但是成员的值都是唯一的，没有重复的值，以前用filter

​					3》Array from() ===> 把像数组的对象转化为数组

​				

注意：如果我的页面，搜索页都要有搜索记录，那么就用到vuex => state，而不再用到本地存储



#### 26.2.5 搜索页传值给搜索结果页

```javascript
1》Search.vue 通过路径传值给 Search-list.vue 
				this.$router.push({
					path:'/searchList',
					query:{
						key:this.inputValue
					}
				})


2》 Search-list.vue通过$route接收
		this.$route.query.key

3》Search-list.vue父组件向子组件SearchHeader.vue组件传值 
		<SearchHeader :queryKey="queryKey"></SearchHeader>

4》SearchHeader.vue子组件接收值并渲染
		data() {
			return {
				// 接收Search-list页面传递过来的值
				inputValue: this.queryKey,
			}
		},
```





#### 26.2.6 搜索结果页条件筛选

看===》项目组件components中的SearchCondition.vue



#### 26.2.7 搜索页细节总结

1》搜索页删除历史搜索记录，用UI框架来做

2》搜索键盘事件，在vue中用事件的按键修饰符做，更简洁，@keyup.enter = 'goSearch'

3》搜索用的比较多可以抽离成公共的

4》搜索页如果没有数据显示，`v-if='后台传递过来的数据.length'`



#### 26.2.7 搜索页bug

**Bug1：在搜索列表页重复搜索会报错**

​		原因：路由重复会报错，在传值那里，如果传递的值相等，就没有必要再传了

​		解决方法：

```javascript
				if(this.inputValue != this.$route.query.key){
					// 跳转页面并传值
					this.$router.push({
						path: '/searchList',
						query: {
							key: this.inputValue,
						}
					})
				}
```



**Bug2:在搜索列表页中，在顶部搜索其他内容，搜索不到**

​		设置watch监听路由变化，路由变了就会重新执行，路由不变就不会执行

```javascript
	watch:{
		$route(){
			路径传值
			this.queryKey = this.$route.query.key;
			调用接口数据
			this.getData();
		}
	}
```





#### 26.2.8 分类页

##### 		1> 页面滑动

​				h5中滑动插件：iscroll

​				vue中滑动插件：better-scroll  ——在github上搜索

​		 注意：

​					a>滑动要求父元素要有一个子元素，且子元素高度大于父元素才可以滑动	

​					b>better-scroll 点击有坑，添加点击事件必须在options设置选项中添加click:true

​					c>better-scroll 滑动事件有坑，添加滑动事件必须在options设置选项中添加probeType:3

```javascript
				new Bscroll(dom对象,{ 
          click：true,
          probeType:3
        })
```

##### 		2> 分类页 数据渲染 循环 嵌套了三层



##### 		3> 点击左边右边滑动到响应位置

​			思路：左侧点击传入index，右侧将距离顶部的距离放在一个数组中，点击左侧，右侧scrollTo(x,y,time,easing)滑动到相应位置

​						右侧距离顶部的距离：获取到每个ul的dom元素，并通过Array.from()转换成真正的数组，拿到clientHeight，并字符串累加的方式累加到allHight数组中，allHight承载所有高度值

​			注意：获取dom是在axios请求后，$.nextTick中获取的

​						better-scroll添加点击事件必须在options设置选项中添加click:true



##### 		4>右侧滑动，左侧相应的标题变成橘色

​			思路：

​			a>给右侧添加滑动事件，获取到滑动的y值，

​				this.rightBscroll.on('scroll',(pos)=>{
​		  			this.scrollY = Math.abs( pos.y );
​				})

​			b>给li添加:class='{active:index==changeIndex }'，

​			c>添加计算属性：	

  			computed:{
  				changeIndex(){
  					return this.allHeight.findIndex((item,index)=>{
  						return this.scrollY >= item && this.scrollY < this.allHeight[index+1];
  					})
  				}
  			  },

​			⚠️：findIndex() 返回第一个符合条件的数组成员的位置,如果所有成员都不符合条件，则返回`-1`



#### 26.2.9 商品详情页

##### 			1> 根据传递id值跳转至详情页

##### 			2>分享功能

​			看下面项目细节26.3.15

##### 			3>swiper插件

​			看下面项目细节26.3.14

##### 			4>better-scroll插件

​			看下面项目细节26.3.13

##### 			5>顶部透明渐变滑动

​			获取页面滚动的Y轴距离，让opacity的值取等于  Y轴滚动的距离 除以 一个数，这个值是随着Y周的滚动而变动，并将这个值付给opacity，opacity的取值范围在[0,1]

​	

​			公式：

​					opacity =  Y轴滚动的距离 / 一个数

​					opacity = opacity > 1 ? 1 : opacity

```javascript
// 页面滚动事件
this.BscrollDetail.on('scroll',(pos)=>{
    
    let posY = Math.abs( pos.y ) 
    let opacity =  posY / 180;   
    opacity = opacity>1 ? 1 : opacity;
    
    if( posY>=50 ){
      this.isHeader = true;
      this.styleOpacity = {
        background:"#fff",
        color:'#000',
        opacity:opacity
      }
      this.iStyle={
        background:'#fff'
      }
    }else{
      this.isHeader = false;
      this.styleOpacity = {
        opacity:1
      }
      this.iStyle={
        background:'#ccc',	
      }
    }
  })
```



#### 26.2.10 登录注册功能

##### 1. 前端

###### 		1>用户名和密码登录

​				**a>向后端发送post请求**

​					注意：axios的post请求传递参数是data，get请求参数是params

​				**b>发送前正则判断用户名和密码是否符合要求，减轻后端请求压力**

```javascript
	 // 判断的规则
			data(){
			return {
				rules:{
					userName:{
						rule:/\S/,
						msg:'用户名|手机号不能为空'
					},
					userPwd:{
						rule:/^\w{6,12}$/,
						msg:'密码不能为空，并且要求6-12位字符'
					}
				}
			}
        
		// 判断的方法
    validata(key){
				let bool = true;
				
				if(!this.rules[key].rule.test(this[key])){
						Toast(this.rules[key].msg)
				}else{
					bool = false
				}
				
				return bool 
			}
        
     // 发送axios请求前判断
        if(this.validata('userName')) return;
				if(this.validata('userPwd')) return;
```

​				**c>后端数据库查询用户名｜手机号是否存在，不存在=》返回用户名不存在，存在=》数据库中查询用户名与密码是否匹配**

​				**d>登录成功后===> 第一步：vuex保存用户信息、保存到本地存储     第二步：跳转至我的页面**

​						**第一步：vuex保存用户信息、保存到本地存储**	

​			vuex在modules中新建user.js，

​			设置默认state共享数据：登录状态false，token值，用户信息，

​			定义login()方法：用户名密码登录成功后后端返回的用户数据通过login方法存储到state，

​			定义initUser()方法：本地存储，在 App.vue 或 main.js 中调用，一进入项目无论进入哪个页面，在本地存储读取用户信息

​			定义outLogin()方法：退出登录，删除本地存储，登录状态false、token为null，用户信息设置为空对象	





###### 		2>手机验证码登录

​				**手机验证登录是注册与登录一体化的**

​			a> 输入手机号码点击下一步，正则验证手机号码格式，如果正确把手机号码传递给LoginCode.vue页，并跳转LoginCode.vue		

​			b>一进入 LoginCode.vue页面，axios请求，将输入的手机号传递给后端，后端对接手机验证码（SDK）

​				设置重新发送按钮倒计时样式 ===》setIterval ===》使用了定时器，一定要清楚定时器clearTimeout()===》button按钮禁用`:disabled=disabled`，`disabled`可以作为变量可以在data数据中定义为`false\true`

​				点击重新发送，重复b步骤

​			c>点击登录，判断用户输入的验证码是否与后端传递过来的验证码一致，验证码一致，将手机号码传递给后端，后端查询是否有该条用户信息，没有=》新增并返回用户信息，有=》返回用户信息

​			d>用户登录成功后，第一步：存储用户信息到vuex，存储本地存储   第二部：跳转到my.vue页面，与用户名和密码登录登录成功后一样



​			注意：

​				a> 表单中，`disabled=disabled` 禁用，但是加上`v-bind\：`单项绑定后`:disabled=disabled`，`disabled`可以作为变量可以在data数据中定义为`false\true`

​				b>:class样式逻辑，`:class="{color:isColor}"` 

​												data:`isColor: false,`

​												 css:`	.color {color: blue;}`

​				c>后端向前端返回验证码，直接返回是不安全的，公司里面会做加密



###### 3>进入页面是否验证登录状态===>token

在axios中设置`headers:{token:true}`，token要进行封装，在axios二次封装中进行封装，token:true实际上在封装中将从后端拿到的存储在vuex中的当前用户token的值赋值给token



封装token：

```javascript
二次封装的axios的js中：common/request.js
import store from '@/store';
import router from '@/router';

$axios(options = {}) {	
  common: {
		method: 'GET',
		params:{},
		data:{},
		headers:{}
	},
    
 	options.headers = options.headers || this.common.headers;
  
	// token设置为ture执行	
  if(options.headers.token){
    
   // ⚠️ 封装token：
    options.headers.token = store.state.user.token;
    
    if(!options.headers.token){
      router.push('/login')
    }
    
}

```





##### 2. 后端

​	1》将数据库查询用户名｜手机号、用户名｜手机号与密码是否匹配、新增用户信息，分别封装，因为多次用到，在server===》db===》UserSql.js

###### 	**2》腾讯云对接手机验证码（SDK）**

​			老张用的 腾讯云=》短信=》SDK =》使用方法看腾讯云的SDK文档:https://github.com/qcloudsms/qcloudsms_js

​			下载：npm install qcloudsms_js

​			引入：var QcloudSms = require("qcloudsms_js");

​			配置：	要设置appid、appKey、短信签名、短信模版、需要发送的手机号、群发短信还是单发短信、国际短信韩式国内短信、发送的验证 [vue笔记.md](vue笔记.md) 码格式





#####  3.token值（非常重要）

​	 **1> token值理解：**一个用户登录，token值会一直记录，直到退出登录token值会自然取消，token值一直都是跟用户进行绑定的，token值过期时间是后端做的，后端要生成过期时间，token也是后端生成的

```
      1.后端生成

      2.避开同源策略

      3.避免一些攻击

      4.token是无状态在多个服务间共享（eg：可以在各种各样的终端共享它）

      5.token是存储到后端服务器里面的，是一个永久身份令牌

      6.token也可以加密和解密

      7.也可以设置有效期

      8.token一般是用户id+时间戳+口令组成
```

​	**2>token作用：**确定用户是否登录，确定用户是哪一个用户

​	**3>如何生成token值：**

​										a>原则：每个公司token的生成规则是不同的：token一般是用户id+时间戳+口令组成

​														每个用户token值不能重复

​														在新增用户时候就应该生成token

​										b>jsonwebtoken插件：nodejs系统自带，JSON Web Token（缩写 JWT）是目前最流行的跨域认证解决方案

​														下载：后端下载 npm install jsonwebtoken

​														引入：

```javascript
                      					//引入插件
                        			  let jwt = require('jsonwebtoken');   
```
​														配置:

```javascript
															let userName = option.userName;
															//用户信息
                              let payload = {name:userName};
                              //口令==》品牌
                              let secret = 'xiaoluxian';
                              let token = jwt.sign(payload, secret,{ expiresIn: '1day' });
```

**4>使用token：**			

​										a>后端：新增用户数据在数据库中就应该生成token

​											前端：将后端传递过来的token值存储到vuex，本地存储

​											注意：

​															1》登录成功后，后端返回前端的只有token值，是不会有用户id，username，userpwd的	

​															2》 确定用户登录未登录是登录状态loginStatus:true|false,

​																   确定是哪个用户｜确定用户身份是token

​										b>前端将token值传递给后端（eg：登录成功后请求该用户订单，购物车...信息，**实现当前用户当前信息**），后端拿到token要解码


```javascript
								//引入token包
                var jwt = require('jsonwebtoken');

              	// 拿到前端传过来的token
                let token = req.headers.token;
                // 解码
                let phone = jwt.decode(token);									
```
​	

​	**5>cookie与token的区别**

cookie和localstorage差不多，都是本地存储的一个东西，只是存储的地方不同，token是后端生成的码，来验证用户的，cookie是一个库里面可以存任何数据，token是某一条数据，相当于说token是cookie的一个子类



cookie是浏览器支持的一种本地存储机制。一般由服务端设置生成，在响应请求时被自动存储在浏览器中，cookie是为了辨别用户身份的，我们知道HTTP本身是无状态的协议，服务端不会记得是谁向它发来的请求。但在某些情况下我们需要记住用户在未登录的状态下浏览了什么，比如淘宝。这时候就需要借助我们的Cookie了。



#### 【面试题】你们对接SDK用的哪一家？

​	阿里云、腾讯云、头条、百度...很多都有，百年奥莱用的腾讯云，必须要有企业资质

​		

#### 26.2.11 购物车

​	购物车数据、订单数据、地址都需要存储到vuex中

​	**1>购物车vuex ==>cart.js**

​	**2>非后端请求业务逻辑**

​		a> 计算总价和总数量

​				放到vuex中getters计算属性中，不能放到方法中，因为考虑到性能，放到方法中会影响到单选和全选

​		b>单选，全选

​				放到Mutations方法中

​				单选，在拿到后端的商品数据时，将数据放入vuex中存储到state的list中，新增checked:true属性

​			

​	**3>进入购物车页面，渲染当前用户的购物车信息**

​		前端：

​					a>向后端传token值，`headers:{token:true}`,注意是headers，要加s ===》确定请求的是当前用户的购物车数据

​					b>拿到后端返回的当前用户的购物车信息后，循环数据，给每个数据对象添加checked:true属性===》点击单选按钮业务逻辑，选中true，不选中false

​		后端：

​					a>解码token

```javascript
            //引入token包
            var jwt = require('jsonwebtoken');


            // 拿到前端传过来的token
            let token = req.headers.token;
            // 解码
            let phone = jwt.decode(token);
```

​					b>数据库查询当前请求的用户id

​					c>数据库查询商品id

​		

**4> 添加购物车**

​	a> 使用到的插件：Element UI ===> Input Number计数器		

​			**Element UI组件**：下载，全局引入，配置

​			购物车中添加购物车商品有使用

​			bug：

​						当我们在列表中使用InputNumber 这个组件的时候，即想要计数器的值value,又想给方法传递参数						进行操作的时候,就用到了这个$event,官网文档并么有详细介绍

```html
					<el-input-number v-model="item.goods_num" @change="handleChange($event,我们想要传递的值)" :min="1" label="数量加减"></el-input-number>
```

```javascript
         handleChange(value单项绑定的值,我们想要传递的值){
             console.log(value,index)
         }
```

​	 b>点击加减按钮

​		前端：向后端传递：token，商品id，商品数量

​		后端：解码token，查询user表中用户id，查询cart表中商品id及用户id，修改商品数量

**5>加入购物车**（详情页）

​	 前端：向后端传递：token，商品id，商品数量

 	后端：解码token，

​				查询用户id，

​				查询商品表中商品名称，价格，图片，

​				查询购物车表中当前用户id及商品id，判断用户之前是否添加过该商品===》如果有数据，修改数量===》如果没有数据，添加一条数据

**6> 删除购物车商品**

​		前端：

​					a>点击删除购物车的某条数据，删除数据库的信息，同时删除视图层的数据

​						具体操作：使用actions先向后端发送删除axios请求，后端返回删除成功的信息msg，actions提交mutations删除方法，进行视图层的删除

​					b>前端发送token，购物车具体某条信息id

```javascript
                             	mutations:{
                                // 删除
                                deleteItem(state,goodsId){
                                  state.list = state.list.filter(v=>{
                                    return v.id != goodsId
                                  })
                                },
                              },
                                
                                
															actions:{
                                deleteItemFn({commit},goodsId){
                                  http.$axios({
                                    url:'/api/deleteCart',
                                    method:'POST',
                                    headers:{
                                      token:true
                                    },
                                    data:{
                                      id:goodsId
                                    }
                                  }).then(v=>{
                                    if(v.success){
                                      //删除list数组中的商品对象数据
                                      commit('deleteItem',goodsId)  ====》提交mutations方法，删除视图层
                                      Toast(v.msg);
                                    }
                                  })
                                }
                              }
```



#### 	26.2.12 地址管理

​		购物车数据、订单数据、地址都需要存储到vuex中

​		**1>地址管理数据放到vuex ==>path.js**

​		**2>查询地址管理：进入地址管理页面渲染地址数据**

​			前端：

​						a>过程：传token，拿到后端传递过来的数据，通过vuex中的Mutations的初始化方法存储后端返回的数据，再赋值给state中的list数据

​						b>手机号隐藏中间4位，正则学过，截取中间四位换成*替换

​						c>[默认]地址这里，用v-if不用v-show，因为不需要切换

​			后端：接收token，查用户id，查当前用户的地址信息，返回给前端

​		**3>增加地址**

​			a> 扩展运算符...解构数组、对象，都应该放在数组、对象中再...解构

​					{...obj}

​					[...arr]

```javascript
				http.$axios({
				url:'/api/addAddress',
				method:'POST',
				headers:{
					token:true
				},
				data:{
					...this.pathObj ⚠️：发送数据请求这里可以用扩展运算符
				}
```
​			b> vant UI 组件

​				下载-引用-配置

​				三级联动选择插件

​				单选插件

​		**4> 修改地址**

​			a>路径传值一定要把对象转换成字符串，路径接收值再把字符串转换成对象			

​			b>业务逻辑

​				点击新增地址/某一条地址信息===>跳转/add-path页面===>根据是否有路径传送信息来判断是增加地址还是修改地址===>点击保存地址，新增/修改地址会发送不同的请求，在data中存储一个变量来控制===>修改默认地址

​			c>filter()数组方法，过滤数组，要加return会返回一个新数组，

​			d>扩展运算符...合并数组，拆数组[...数组1,...数组2]



​		**5> 默认地址**

​			后端：

​					无论修改/新增地址，接收到前端传递过来的值，判断默认值是否为1，如果为1，将之前数据库中默认值为1的修改为0，在将当前地址默认值设置为1，如果不为1，直接将当前地址默认值设置为1

​		    前端：默认放在第一行

​				

​		**6>删除地址**

​			a>阻止冒泡：@click.stop='事件名称'

```javascript
				<li v-for="(item,index) in list " :key='index' @click="toAddPath(index)"> ⚠️：有事件
					<div>
						<span @click.stop="delRemove(item)">删除</span > ⚠️：有事件，会冒泡哦
					</div>
				</li>
```

​			b>业务逻辑

​			点击删除，发送请求先删除数据库===>再删除视图层

​			删除视图层方法与购物车删除是一致的		

```javascript
// 向后端发送删除地址请求
	delRemove(item){
				http.$axios({
					url:'/api/deleteAddress',
					method:'POST',
					headers:{
						token:true,
					},
					data:{
						id:item.id
					}
				}).then(v=>{
					if(v.success){
						this.delAddress(item.id) ⚠️：删除视图层方法：调用vuex的delAddress方法
					}
				})
			}


//	vuex这种Mutations：删除视图层

		delAddress(state,id){
			state.list = state.list.filter(item=>{
				return item.id != id 
			})
		}
```







#### 	26.2.13 订单管理

前端：

web移动端前端支付流程：点击去结算发送请求，告诉后端哪个用户下单、下单什么商品=》后端生成一个订单号返回给前端=》前端存储订单号（里面有订单状态0未支付，1支付成功，2支付失败）=》跳转确认订单，从vuex中读取订单号==》点击去支付，发送请求，传递订单号、token、header设置为‘content-type’：‘application/x-www-form-urlencoded’==》后端会唤醒第三方支付，第三方支付会返回给后端支付页面的URL路径，后端把URL路径传递给前端，前端拿到路径window.open(res.url)，这个链接是支付宝给后端后端传递给我们，支付页面（扫码也一样，打开一个页面扫码）===》支付成功后，跳转页面（指定页面，后端填链接，前端可以把跳转的页面url传递给后端），后端要修改支付的状态值

注意前端发送订单给后端，content-type是一个表单的形式，前端需要cnpm install qs下载，引入qs，传递的数据是：data:qs.stringify({orderId：订单号})

qs就是把参数做一个转换



后端：

后端做沙箱：1.支付宝开放平台=》研发服务=》沙箱应用=》填写密钥（下载支付宝开放平台开发助手=》工具中可以点击 生成密钥）

​					2.后端配置：appId、支付宝公钥、应用私钥

db文件夹下：alipay.js					

```
const AlipaySdk = require('alipay-sdk').default; // 引入 SDK
const alipaySdk =  new  AlipaySdk({
  appId: '2021000117615613', // 开放平台上创建应用时生成的 appId
  signType: 'RSA2', // 签名算法,默认 RSA2
  gateway: 'https://openapi.alipaydev.com/gateway.do', // 支付宝网关地址 ，沙箱环境下使用时需要修改
  //支付宝公钥
  alipayPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAspl4t/OIOQK4xfJ/WAQX+jeXCZ3KQsAVLVeL2m2ukza9OA1wtbGzjT6Zqn1zpGKWPgCxHcs/UZvcsBWjxaG6oAV7ULPyAjowt74kb5/5293GkN2bein3TAsrkg3PvCd4JwKjBACsIwbHBIx6E0B0+H6z2XsIeJkd2oTCHIlx59djAMzisF9+JxQgjPn6SnA5pttgyL+O4bYezwP3qnzPa60wiN1qEBbUE8SgJSyaT1PAAwlOdBkxx3ZlJ3tC0ppAowrmIYTgOWE13PI+AYQkRoecKCWekknxaHo4NCDx2LYi2wk0XzTC6J9aiOt49iEynP8k8SAGAl0ykbImR7CxBwIDAQAB', // 支付宝公钥，需要对结果验签时候必填
  //应用私钥
  privateKey: 'MIIEpAIBAAKCAQEAlKemLqcQzhNpGgTzjQo8x5XikzFD9ggYPko5klgNYXCZVsEK9mXCbmX8a1VAMJDscDPLCLCWhW080rNhDStBFc0bXasEC7yEu1gBwf9aVqszpTrneIbUjtKYWoT0UpWtR2P17vwlf8nsQhjWUPp29VOAZZABXqRr6zTi/ZJYkwjvCpkG+R4HZYKvTwYn5/i93zHP4HBEfzrq6aqlwJmNdOQIq1GfFa613zbRDMdzmeUiNTLM88rzuFUMMAIjcn3TQU8aj+LMC78GlgbObXGYz1DpIVMuhq9TCp9jH64K+0cG/9+phsD+rbUqT5g/i1tCXJF7cMxH5RovFyi1F7zaIQIDAQABAoIBAEimanwwX/Em4V26/8B1OWEdan8fO6SZLif7JInWCKwPWJFihNYIw24q36MhJd7WZQcs+NRFYTrSOUCMNCk4c3WRKQetFawatQ/OIgXKoz7qKrJcyFVKJ8WpPJY4liNqTSYvvzjN+BGtAI8JDmzDC7I33e9E4rZ7StbHoQvmIu2wVoVJWKmzx0rvNy5PD33suxOWa7f7mM9PBsJJ6McIprv0Z4Gcv95YvmjgL8J++AGyrx4qeB2BeXSAEg5k9Nx2Kje/Ff+nXnfgrnceN/fT93eUH8w301BBin72pR3+vIYPohPpZj3SB5KcKE9F8t/OZdssUHXzLW6LRcjQW13+bQECgYEA4Cbb90dfC0qW6b9QwAGIN0EN3rCo5a8/6xw5thQTCnlHx7r59Xm8dK5NdauGvxVz/n4mB7qE3eVXsG8Y0WL1DRV4S9fNdKERWI0W63/p6PdejXOJVkDl/R15p+eJvQTZRqAKPkasoObqmx4ETg+SrGTEebYcFRcGnNG5wkIpjxECgYEAqca3x0uotYHnUZ9K5V7dWON9VKc8av5/5vl3yRXZvfj4vf5NwXNm82qlfk2DR+HpZmZZrrVVJuOP/TQaWJhtDstM1qyH6J6AlPquNZKUuoyqjFYF4+CfkUbLA00FIvqr7xqIXAvcV4l9LJNZ6ioD9W3L6BxAMWJur6jvIICIuhECgYEAw2zdxn+xO7TyUiT8kApF6naLUyYOewIJ5j+biUWDPFR04ov/tadHSStWWUsMlbhsgusU2RQjFxsHEsophxSRtbCMSwOBGzf6WYvY+cVx+C0DgKvEhzDZ045JLLxPeD6r+Ek75QPVKgtpa4gGFNC6/hZ0vfCqFzEWEM9A9z6b4SECgYAmQSeB2ZNvKpEjvB/VJRX9BG1mGLStayEIu2d5QNoqSyJJNTbyAv3MlVgq6G5PUSEVOLS2gBdqxtXX+NiC4/2W2so6iO+qw6Q3bXC5k4i9rBp1uqBjI2bxBiGSYdVpd1AsdS8KhoWkl89DrwQQll0D/TR33X29Yu+L1yXijfPA8QKBgQDdbLO7ZOWOgB9zb80+N+OOJxgC5g4gum2dg/WvMO0riwH06/8C4QRdbOsHu8NiCALXzB1BUQyWnRPS4+QGY/gaZ7jhrL8bUkD5RFM7/cxKLhJTqjLoMcLoG4egYovJQGwAEBKu5LDBP+hnlqoDUGLhhJkPM9vVA92mPM00jqdaxQ==', // 应用私钥字符串
});
module.exports = alipaySdk;
```

在routes中的index.js中引入：

```
//支付支付
const alipaySdk = require('../db/alipay.js');
const AlipayFormData = require('alipay-sdk/lib/form').default;
//解决后端请求支付宝，跨域问题
const cors = require('cors');
router.use( cors() );
router.use(express.urlencoded({ extended:true }) );
```

​					3.后端对接第三方支付接口

```
//支付宝支付
router.post('/api/payment',function(req,res,next){
	//订单号
	let orderId = req.body.orderId;
	//支付宝对接格式
	const formData = new AlipayFormData();
	formData.setMethod('get');
	//支付成功，返回的页面
	formData.addField('notifyUrl', 'http://xuexiluxian.cn');
	formData.addField('bizContent', {
	  outTradeNo: orderId,//订单号
	  productCode: 'FAST_INSTANT_TRADE_PAY',//写死的
	  totalAmount: '0.01',//金额
	  subject: '一个衣服',//商品的标题
	  body: '一个神奇衣服',//商品的描述
	});
	//api中没有的，但是需要加
	formData.addField('returnUrl', 'https://opendocs.alipay.com');
	//如果需要支付，跳转到支付页面===>打开第三方
	const result = alipaySdk.exec(
	  'alipay.trade.page.pay',
	  {},
	  { formData: formData },
	);
	//result是支付宝给后端返回的
	result.then((resp)=>{
		//后端给我们自己的前端返回的
		res.send({
			code:0,
			data:{
				success:true,
				msg:"支付成功",
				result:resp
			}
		})
	})

})

```



#### 	26.2.14 支付

mui+html5plus支付是做App端的：前端唤醒第三方

vue中的移动端支付用沙箱：沙箱后端做

vue中也可以接入mui+html5Plus=》很多公司也会这么做，vue中集成mui+html5Plus：



web移动端前端支付流程：点击去结算发送请求，告诉后端哪个用户下单、下单什么商品=》后端生成一个订单号返回给前端=》前端存储订单号（里面有订单状态0未支付，1支付成功，2支付失败）=》跳转确认订单，从vuex中读取订单号==》点击去支付，发送请求，传递订单号、token、header设置为‘content-type’：‘application/x-www-form-urlencoded’==》后端会唤醒第三方支付，第三方支付会返回给后端支付页面的URL路径，后端把URL路径传递给前端，前端拿到路径window.open(res.url)，这个链接是支付宝给后端后端传递给我们，支付页面（扫码也一样，打开一个页面扫码）===》支付成功后，跳转页面（指定页面，后端填链接，前端可以把跳转的页面url传递给后端），后端要修改支付的状态值

























































### 26.3 项目细节

#### 26.3.1 样式穿透

原因：`<style scoped>` 加了scoped是局部的样式，而引入的插件放在了main.js中是全局样式，局部组件是改变不了全局组件的，所以存在样式穿透

```css
less使用 /deep/
	顶级父元素 /deep/ .el-button {
	    height: 60px;
	}


scss使用 ::v-deep
	顶级父元素 ::v-deep .el-button {
	    height: 60px;
	}


stylus使用 >>>
	顶级父元素 >>> .custon-components{
	    height: 60px;
	}
```



#### 26.3.2 插槽slot

VUE官方文档的解释：Vue 实现了一套内容分发的 API，将 `<slot>`元素作为承载分发内容的出口。

个人理解：插槽实质是对子组件的扩展，通过`<slot>`插槽向组件内部**指定位置**传递内容。

**1》使用场景**：有些东西类似，有些东西又有点区别，（比如说结构一样，某一个数据的色样式不一样：背景颜色不一样）但是区别不大的情况下用插槽，没必要用组件传值，而且组件传值需要定义数据然后传再传过去

**2》插槽与组件传值的区别**：插槽与组件传值差不多，但是插槽更加方便性，可以改变很多东西

​	**slot 与 props 的区别**：通过props属性，父组件可以向子组件传递属性、方法，可是父组件不能通过属性传递带标签的内容、甚至是组件，而插槽可以

```html
<!-- 这是父组件哦-->
<div class="father">
  <h1>Father的标题</h1>
  <Child>
    <button>我是一个按钮</button>  <!-- 带标签的内容-->
    <Child2></Child2>             <!-- 组件-->
  </Child>
</div>
```



**3》插槽的使用**：插槽可以把整体弄一个插槽，也可以把某一个组件单独弄一个插槽

​			**a》匿名插槽（单个插槽、默认插槽）**:匿名插槽就是没有设置name属性的插槽。
​					可以放置在组件的任意位置。
​					一个组件中只能有一个该类插槽。
​					作为找不到匹配的内容片段时的备用插槽。
​					匿名插槽只能作为没有slot属性的元素的插槽。

```html
父组件传值子组件：

父组件：
<div class="parent">
 <h1>父组件</h1>
 <child>
     <p slot="body">我是主体</p>
     <p>我是其他内容</p>
     <p slot="footer">我是尾巴</p>
 </child>
 </div>

子组件：
<div class="child">
    <h1>子组件</h1>
     <slot name="head">头部默认值</slot>
     <slot name="body">主体默认值</slot>
     <slot>这是个匿名插槽(没有name属性)，这串字符是匿名插槽的默认值。</slot>
 </div>


运行结果：
					父组件
					子组件
					头部默认值 （head的默认值被渲染：默认值只会在没有提供内容的时候被渲染。）
					我是主体 （body的默认值被覆盖）
   				我是其他内容 （名插槽的默认值被覆盖）
          
注意：
				<p slot="footer">我是尾巴</p> <!--被丢弃了，因为子组件中没有name="footer"的插槽与之匹配。-->

				如果子组件中的匿名插槽不存在，则<p>我是其他内容</p>也会被丢弃。
```





​			 **b》具名插槽**：意思就是具有名字的插槽，名字通过属性name来定义。
​									  一个组件中可以有很多具名插槽，出现在不同的位置。

```html
父组件传值子组件：

父组件：
<base-layout>
  <template v-slot:header>
    <h1>我是头header</h1>
  </template>

  <p>我是main的内容111</p>
  <p>我也是main的内容222</p>

  <template v-slot:footer>
    <p>我是footer</p>
  </template>
</base-layout>

	我们可以在一个 <template>元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供插槽名称：
    
子组件：
<!-- <base-layout>子组件-->
<div class="container">
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>	
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
</div>
    
    
注意：

	任何没有被包裹在带有 v-slot 的 template 中的内容都会被视为默认插槽的内容。
    
	一个不带 name 的 slot 插槽会带有隐含的名字 default 。如果你希望更明确一些，可以在一个` <template>`中包裹默认插槽的内容：

	注意 v-slot 只能添加在 	`<template> `上 (只有一种例外情况)
    
    
父组件：
    <base-layout>
      <template v-slot:header>
        <h1>我是头header</h1>
      </template>

      <template v-slot:default>
        <p>我是main的内容111</p>
        <p>我也是main的内容222</p>
      </template>

      <template v-slot:footer>
        <p>我是footer</p>
      </template>
    </base-layout>

    两种写法的渲染效果是一样的：

    <div class="container">
      <header>
        <h1>我是头header</h1>
      </header>
      <main>
        <p>我是main的内容111</p>
        <p>我也是main的内容222</p>
      </main>
      <footer>
        <p>我是footer</p>
      </footer>
		</div>
```

​					

​				**c》作用域插槽**

​					**子组件向父组件传值（通过插槽传值）**：为了让 childUser 在父级的插槽内容中可用，需要把 childUser 从 <Child> 子级作用域传递到 <Father>父级作用域。

​					**做法**：就是将 childUser 作为 <slot> 元素的一个属性绑定上去，绑定在 <slot> 元素上的 属性childData被称为**插槽 prop**。

​					现在在父级作用域中，我们可以使用带值的 v-slot 来定义 插槽 prop 的名字：

```html
 子组件向父组件传值：

			<!--子组件-->
				<template>
            <div>
              <h1>hey，我是组件Child的标题</h1>
              <slot v-bind:childData="childUser"></slot>
            </div>
          </template>

          <script>
          export default {
            data() {
               return{
                  childUser:{Name:"Tom",Age:23}
              }
          }
          </script>



					<!-- 这是父组件哦-->
          <div>
            <h1>hey，我是父组件Father的标题</h1>
            <Child>
              <template v-slot:default="slotProps"> ⚠️： [ 所有插槽 prop 的对象 ] 命名为 slotProps，也可以自定义
                {{ slotProps.childData.Name}}
                {{ slotProps.childData.Age}}
              </template>
            </Child>
          </div>



					因为在上述情况下，被提供的内容只有默认插槽，组件的标签可以被当作插槽的模板来使用。这样我们就可以把 v-slot 直接用在组件上：

					<!-- 这是父组件哦-->
          <div>
              <h1>hey，我是父组件Father的标题</h1>
              <Child v-slot="slotProps">   |   <Child v-slot:default="slotProps">
                {{ slotProps.childData.Name }}
                {{ slotProps.childData.Age}}
              </Child>
          </div>				
```



**4》解构插槽**

​		作用域插槽的内部工作原理是将你的插槽内容包括在一个传入单个参数的函数里，所以，这意味着 v-slot 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。

```xml
  <Child  v-slot="{ childData}">
    {{ childData.Name }}
  </Child>
```

​	这样可以使模板更简洁，尤其是在该插槽提供了多个 prop 的时候。它同样开启了 prop 重命名等其它可能，例如将 childData重命名为 person：

```xml
  <Child   v-slot="{ childData: person }">
    {{ person.Name }}
  </Child  >
```

​	你甚至可以定义默认内容，用于插槽 prop 是 undefined 的情形：

```xml
  <Child   v-slot="{ childData= { Name: 'Guest' } }">
    {{ childData.Name }}
  </Child >
```





**5》插槽注意事项：**

​		a>但是默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确：

```html
    <!-- 无效，会导致警告 -->
    <Child  v-slot="slotProps">
      {{ slotProps.childData.Name }}
      <template v-slot:other="otherSlotProps">
        slotProps is NOT available here
      </template>
    </Child >
```

​		b>只要出现多个插槽，请始终为所有的插槽使用完整的基于 <template> 的语法：

```html
    <Child >
      <template v-slot:default="slotProps">
        {{ slotProps.childData.Name }}
      </template>

      <template v-slot:other="otherSlotProps">
        ...
      </template>
    </Child>
```



**6》v-slot、slot、slot-scope**

slot、slot-scope已经被废弃。推荐使用vue2.6.0中的v-slot。

​		**a》· slot 的使用(匿名插槽&具名插槽)**

```jsx
父组件
<div class="parent">
 <p>父组件</p>
 <child>
  <p slot="body">我是主体</p>
  <p>我是其他内容</p>
 </child>
 </div>

子组件：
<div class="child">
 <p>子组件</p>
 <slot name="body">具名插槽的默认内容。</slot>
 <slot>这是个匿名插槽(没有name属性)，这串字符是匿名插槽的默认值。</slot>
 </div>
  

运行效果：

				父组件
 				子组件
 				我是主体
 				我是其他内容
```

​			**b》· v-slot 的使用**

​							`v-slot`指令自 Vue 2.6.0 起被引入，提供更好的支持 slot 和 slot-scope 的 API 替代方案。

​							在一个 `<template>`元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称。

​							匿名插槽&具名插槽&作用域插槽看上面的例子

​							跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把 v-slot: 替换为字符 #。

​							例如 v-slot:header 可以被重写为 #header，和其它指令一样，该缩写只在其有参数的时候才可用。

​							如果你希望使用缩写的话，你必须始终以明确插槽名取而代之，default不可以省略：

```xml
<Child  #default="{ childData}">
  {{ childData.Name }}
</Child >
```

​			 **c》· slot-scope的使用**

```jsx
<div class="child">
    <div>
       <slot name="default" :msg="msg"> </slot>
       <p>这里是child 组件</p>
    </div>
 </div>
```

```xml
<child >
    <div slot="default" slot-scope="childData">//作用域插槽的用法（slot-scope）
          {{ childData.msg }}
     </div>
</child >
```



#### 【面试题】

面试会问插槽，但几率不大，公司会用





#### 26.3.3 Vue-cli 4.x 设置代理 (解决跨域)

前台是：http://localhost:8080

后台是：http://localhost:3000

前台8080请求后台3000是属于跨域问题，就像淘宝请求百度，会报错：Access to XMLHttpRequest at 'http://localhost:3000/api/index_list/data' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

解决方法：设置代理

```javascript
1》 根目录新建一个vue.config.js

2》 配置
    module.exports = {
      devServer: {
      proxy: {
        '/api': {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
        }
      }
      }
    }
3》重启项目
```
注意：修改配置文件一定要重新启动



#### 26.3.4 Vue常用的UI框架

element ui ===>pc    ===> 饿了么团队出的
mint ui    ===>移动     ===> 饿了么团队出的

vant    ui ===>移动

下载===》引入 ===》配置

引入有全局，局部，局部引用公司用的多，全局引入是在全局范围内有效，适合多个地方使用



#### 26.3.5 vue中vue.config.js的通用配置

地址https://blog.csdn.net/qq_43574079/article/details/108821914

配置路径快捷方式

```javascript
let path = require('path');
module.exports = {
	configureWebpack: (config) => {
		config.resolve = {
			extensions: ['.js', '.json', '.vue'],
			alias: {
				'@': path.resolve(__dirname, './src'),
       	'public': path.resolve(__dirname, './public'),
				'components': path.resolve(__dirname, './src/components'),
				'common': path.resolve(__dirname, './src/common'),
				'api': path.resolve(__dirname, './src/api'),
				'views': path.resolve(__dirname, './src/views'),
				'data': path.resolve(__dirname, './src/data')
			}
		}
	}
}
```



#### 26.3.6 axios二次封装

​		src中新建common文件夹 ===》 新建request.js文件 ，用来二次封装axios

​		request.js文件：

​									把main.js中引入axios直接放到request.js中，不用再给Vue原型添加axios方法

```javascript
// 引入加载插件
import {Indicator} from 'mint-ui';
// 引入axios
import axios from 'axios';

export default {
	common:{
		method:'GET',
	},
	$axios(options={}){
		options.method = options.method || this.common.method;
		Indicator.open('加载中...');
		return axios(options).then((v)=>{ ⚠️：$axios方法中要返回axios，然后再在axios中返回Promise对象
			let data = v.data.data;
			return new Promise((res,rej)=>{ ⚠️：要返回Promise对象才可以使用.then()方法，axios就是返回Promise对象，所以才可以.then()方法
				if(v.data.code != 0){
					return rej();
				}
				setTimeout(()=>{
					Indicator.close();
				},500)
				res(data) ⚠️：promise中res(data)响应成功后执行的，可以传递参数，.then(v=>{}) v接收data参数
			})
		})
	}
}

```

​		Home.vue:首页引入二次封装的axios

```js
   	import http from '@/common/request';

		methods: {
			// 请求数据
			httpData() {
				http.$axios({ ⚠️：这里不再是this.axios，现在axios封装在http.$axios方法中
					url: '/api/index_list/1/data' 
				})
				.then(res => {
					this.items = res.topBar;
					this.newData= res.data;
				})
			},
			//切换到的列表
			homeData(item, index) {
				this.addData(index + 1);
			},
			//对应展示不同列表的数据
			addData(index) {
				http.$axios({
					url: '/api/index_list/' + index + '/data'
				})
				.then(res => {
					this.newData = res.data;
				})
			},
		}
```



```javascript
// 引入加载插件
import { Indicator } from 'mint-ui';
// 引入axios
import axios from 'axios';

import store from '@/store';
import router from '@/router';

export default {
	common: {
		method: 'GET',
		params:{},
		data:{},
		headers:{}
	},
	$axios(options = {}) {
		options.method = options.method || this.common.method;
		options.params = options.params || this.common.params;
		options.data = options.data || this.common.data;
		options.headers = options.headers || this.common.headers;
		
		// 请求前
		Indicator.open('加载中...');
		
		// token设置为ture执行
		if(options.headers.token){
			options.headers.token = store.state.user.token
			if(!options.headers.token){
				router.push('/login')
			}
		}
		
		return axios(options).then((v) => {
			let data = v.data.data;
			return new Promise((res,rej) => {
				if (v.data.code != 0) {
					return rej();
				}
				setTimeout(() => {
					Indicator.close();
				}, 10)
				res(data)
			})
		})

	}
}

```



#### 26.3.7 template模版使用



#### 26.3.8 后台构建数据（写接口）

在server===》routes===》index.js

注意：a》code：0代表访问成功

​			b》修改后一定重启服务

​			c》请求跨域问题：设置代理

​			e》请求地址格式：

​						/api/index_list/1/data/1

​						/api/index_list/2/data/1

​						/api/index_list/2/data/2

```javascript
router.get('/api/index_list/1/data', function(req, res, next) {
	res.send({
		code: 0,
		data: {
			topBar: [{
					label: '推荐'
				},
				{
					label: '手机'
				},
				{
					label: '智能'
				},
				{
					label: '电视'
				},
				{
					label: '家电'
				},
				{
					label: '笔记本'
				}
			],
			data: [{
				type: 'swiperList',
				data: [{
						id: 1,
						imgUrl: './img/1.jpeg'
					},
					{
						id: 1,
						imgUrl: './img/2.jpeg'
					}
				]
			}, {
				type: 'iconList',
				data: [{
						id: 1,
						imgUrl: './img/icon.png'
					},
					{
						id: 2,
						imgUrl: './img/icon.png'
					},
					{
						id: 3,
						imgUrl: './img/icon.png'
					},
					{
						id: 4,
						imgUrl: './img/icon.png'
					},
					{
						id: 1,
						imgUrl: './img/icon.png'
					},
					{
						id: 5,
						imgUrl: './img/icon.png'
					},
					{
						id: 6,
						imgUrl: './img/icon.png'
					},
					{
						id: 7,
						imgUrl: './img/icon.png'
					},
					{
						id: 8,
						imgUrl: './img/icon.png'
					},
					{
						id: 9,
						imgUrl: './img/icon.png'
					},
					{
						id: 10,
						imgUrl: './img/icon.png'
					}
				]
			}, {
				type: 'recommendList',
				data: [{
						id: 1,
						imgUrl: './img/red.jpeg',
						name: 'Note 9 5G',
						content: '天玑 800U处理器，5000mAh电池',
						price: '1299',
					},
					{
						id: 2,
						imgUrl: './img/red.jpeg',
						name: '小米 9 5G',
						content: '虾米 800U处理器，5000mAh电池',
						price: '1299',
					}
				]
			}]

		}
	})
})
// 首页手机数据
router.get('/api/index_list/2/data', (req, res, next) => {
	res.send({
		code: 0,
		data: {
			data: [{
				type: 'card',
				data: [{
					id: 1,
					imgUrl: './img/red.jpeg',
					name: 'HUAWEI手机',
					content: '华为 800U处理器，5000mAh电池',
					price: '6999',
				}, {
					id: 2,
					imgUrl: './img/red.jpeg',
					name: 'APPLE手机',
					content: '苹果 800U处理器，5000mAh电池',
					price: '9999',
				}]

			}]
		}
	})
})
// 首页智能数据
router.get('/api/index_list/3/data/1', (req, res, next) => {
	res.send({
		code: 0,
		data: '没有数据'
	})
})
```



#### 26.3.9 搭建数据库mysql

先在数据库中新建库，表，字段 ===> 在server文件夹下新建db文件夹 ===> 在db文件夹下新建sql.js文件 ===> 再在server目录下 cnpm install mysql -S 下载数据库

```javascript
sql.js:
const mysql = require('mysql');
let connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'vue',
});

module.exports  = connection;


router===>index.js: 引入
let connection = require('../db/sql.js');
```







#### 26.3.10 动画-vue内置transition组件

**1》 单个物体动画**（单元素｜单组件过渡）

```html
	<transition
		enter-active-class='引入的动画的class名称'
		leave-active-class='离开的动画class名称'
	>
    
		</transition>
```

注意：层级不能过多，层级多了动画不起效果，里面父元素只能有一个（大div包裹），可以改为`<template></template>`，template不能加:key

​			哪个做动画就给谁加



**2》多物体动画**（列表过渡）

```html
		<transition-group
			enter-active-class='animate__animated animate__bounceInLeft'
			leave-active-class='animate__animated animate__bounceOutLeft'
		>	

			<div></div>
			<div></div>

		</transition-group>	
```

注意：子元素可以有很多，亲儿子需要:key，但嵌套层级也不能过多，每个子元素只能有一个父元素，可以改为`<template></template>`，template不能加:key

​		   哪个做动画就给谁加



**3》trasition与trasition-group区别点**

`	<trasition-group>`不同于 `<transition>`，

​		1、它会以一个真实元素呈现：默认为一个 `<span>`标签	
​		2、你也可以通过 tag  更换为其他元素。==>tag='div'
​		3、内部元素(子元素)总是需要提供唯一的 key 值。



**4》与animate.css搭配使用**

下载：

​			npm install animate.css --save

引入：全局/局部（官网上面引入有很多坑）

​			import 'animate.css';

配置：在具体的动画类名中，前面还要加animate__animated

```
			enter-active-class='animate__animated animate__bounceInLeft'
			leave-active-class='animate__animated animate__bounceOutLeft
```

**修改动画持续时间，延迟时间，循环次数：只需在要执行动画的div设置style：**

`  <div class="detail-sheet" v-show="isSheet" style="animation-duration: 300ms;animation-delay: 0s;">`

```html
<transition enter-active-class='animate__animated animate__fadeInUp'
            leave-active-class='animate__animated animate__fadeOutDown'>
  <div class="detail-sheet" v-show="isSheet" style="animation-duration: 300ms;animation-delay: 0s;">
    <div class="detail-share">分享</div>
    <div></div>
    <div class="cancel" @click="close">取消</div>
  </div>
</transition>
```



#### 26.3.10 ES6数组对象方法

​			1》new Set ===>去重

​			2》Array.from ===>把类似数组的对象转换成数组

​			3》Object.values ===> 返回数组，遍历对象值

​			4》Object.keys===> 返回数组，遍历对象属性名

​			5》findIndex()===> 返回第一个符合条件的数组成员的位置,如果所有成员都不符合条件，则返回-1

​			

#### 26.3.11 mysql升序、降序规则

​		用 desc 表示按倒序排序(即：从大到小排序) ---降序排列

​		用 asc   表示按正序排序(即：从小到大排序)---升序排列

​		

#### 26.3.12 $nextTick

1》 是什么：

​		vue中的nextTick主要用于处理数据动态变化后，DOM还未及时更新的问题，用nextTick就可以获取数据更新后最新DOM的变化

​		在下次 DOM 更新循环结束之后执行延迟回调。获取更新后的 DOM
2》 使用场景：
​	例如：请求数据后，要执行better-scroll插件，但是这时候，视图层的dom还没有彻底循环加载完，执行插件就会不会有效果，所以要用nextTick，等待dom都更新完毕再去执行。

#### 【面试题】

你用过$nextTick吗？在什么情况下用？



#### 26.3.13 better-scroll滚动插件

1》h5中滑动插件：iscroll

​	  vue中滑动插件：better-scroll  ——在github上搜索

​		 注意：

​					a>滑动要求父元素要有一个子元素，且子元素高度大于父元素才可以滑动	

​					b>better-scroll 点击有坑，添加点击事件必须在options设置选项中添加click:true

​					c>better-scroll 滑动事件有坑，添加滑动事件必须在options设置选项中添加probeType:3

```javascript
				new Bscroll(dom对象,{ 
          click：true,
          probeType:3
        })
```



2》better-scroll的下载及使用

地址：https://github.com/ustbhuangyi/better-scroll

在vue中使用文档地址：https://zhuanlan.zhihu.com/p/27407024

Better-scroll api 文档地址：https://blog.csdn.net/weixin_42614080/article/details/103600664

下载：npm install better-scroll -S

引入：  import BScroll from 'better-scroll'

配置：new Bscroll ( dom元素, options配置对象{} )

​			 给父盒子加ref="名称"

​			js中在this.$nextTick中实例化 new Bscroll(this.$refs.wrapper, {})⚠️注意：要在axios请求完毕中写

```vue
<template>
  <div class="wrapper" ref="wrapper"> 注意⚠️：height:100%;width:100%;overflow:hidden;
    <ul class="content">
      <li>...</li>
      <li>...</li>
      ...
    </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    mounted() {⚠️注意：要在axios请求完毕中写,mounted中写不行
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {})
      })
    }
  }
</script>
```

3》better-scroll 默认去掉click事件

```javascript
new Bscroll(this.$refs.left, {
	click:true, // 默认去掉click事件
  probeType:3 //默认为probeType为0，不触发scroll事件
})	

默认为probeType为0，不触发scroll事件
probeType:3
```



4》实例化的Bscroll.refresh() 强制 scroll 重新计算，当 better-scroll 中的元素发生变化的时候调用此方法



#### 26.3.14 Swiper滚动插件

​	Swiper网站中，在vue中使用教程，地址：https://github.com/surmon-china/vue-awesome-swiper

​	样式配置文件依然是Swiper中的API

​	注意分页器有一个bug，不出现，原因：版本问题，解决方式：在项目终端输入`npm install swiper vue-awesome-swiper@3 -S`加@3版本号

​	下载：`npm install swiper vue-awesome-swiper@3 -S`

​	引入：全局引入main.js

```javascript
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
Vue.use(VueAwesomeSwiper);
```
​	配置：

```html
<swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide><img :src="goodsData.goods_imgUrl" alt=""></swiper-slide>
    <swiper-slide><img :src="goodsData.goods_imgUrl" alt=""></swiper-slide>
    <swiper-slide><img :src="goodsData.goods_imgUrl" alt=""></swiper-slide>
    <swiper-slide><img :src="goodsData.goods_imgUrl" alt=""></swiper-slide>
    <swiper-slide><img :src="goodsData.goods_imgUrl" alt=""></swiper-slide>
    <swiper-slide><img :src="goodsData.goods_imgUrl" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>
```

```javascript
		data() {
			return {
				goodsData: {},
				swiperOptions: {
					pagination: {  // 分页器配置
						el: '.swiper-pagination',
						type: 'fraction',
					},
				}
			}
		},
```



#### 26.3.15 分享功能

功能描述：点击分享弹出分享框和蒙层，可以利用Mint UI 弹出框，也可以自己做弹出框，要用到`<trasition>`与animate.cs动画相结合，最后分享跳转借助vue分享插件，

方法一：使用vant UI分享页，调用官方sdk，跳转链接自己写

方法二：

vue分享插件：

​					地址：https://github.com/pzZZZZ/vue-share

​					下载：npm i vue-shares

​					引入：import share from 'vue-shares' （引入的是组件，可以在node_modules中搜索看他的源码，可以看出是一个子组件）

​					配置：

```vue
<template>
	<Share :shareSites='shareSites' :shareWechatQrcodeTitle='shareWechatQrcodeTitle'></Share>
	⚠️：这里的:shareSites是父组件向子组件传值
</template>

<script>
  data() {
        return {
          shareSites:['qzone', 'qq', 'weibo','wechat',''],
          shareWechatQrcodeTitle:'菡玲菡玲的微信',
        }
  },
  components: {
        Share
  },
</script>
```



#### 26.3.16 style传值

```html
以下三种写法：
<header :style="styleOpacity"></header>
<header :style="'height:'+itemHeight+';'" ></header>
<header :style="{height:itemHeight,逗号}"></header>
```

```javascript
data() {
			return {
				styleOpacity: {
          color:'red',
          background:'#fff'
        },
		}
},
```



#### 26.3.17 watch监听

监听路由的变化：路由变了重新执行，路由不变，就不会执行


监听一个数据的变化：监听一个属性值


```javascript
watch:{
	$route(to,from){ // 监听路由变化
    	//to当前状态
			//from上一次状态
	},
	data中的数据(参数1，参数2){ // 监听数据变化
   	  //参数1当前值
			//参数2上一次值
	}
}


```

```vue
监听属性值发生了变化：
	<template>
    <button @click="btn">按钮</button>
  </template>		
		
	<script>
			data() {
        return {
          btnData:123
        }
		},
		
		methods:{
				btn(){
				this.btnData = 456
			}
		}
		
		watch:{
			btnData(参数1，参数2){ // 注意⚠️：监听data属性值也有参数，当前变化值，上一次的值
				console.log('这是btnData发生变化了')
			}
		},
	</script>

监听路由发生了变化
<script>
	watch:{
		$route(){
			//路径传值发生变化，重新调用接口
			this.$route.query.key;
			//调用接口数据
			this.getData();
		}
	}
</script>
```

#### 【面试题】

面试题1：watch与computed及methods的区别？

面试题2：computed与methods的区别？

​				computed有一个缓存

​				methods即使与他无关的发生变化，它也会重复执行

​				watch是做监听的，更好的去监听到每一个值发生变化并且watch可以获取到当前状态及上一次状态



#### 26.3.18 手机验证码登录SDK

看上面 26.2.10 1.前端 2>手机验证码登录，及【面试题】

#### 26.3.19 token值

看上面 26.2.10 1.前端 3>进入页面是否验证登录状态

​			26.2.10 3.token值



#### 26.3.20  Input Number计数器 插件

**Element UI组件**：下载，全局引入，配置

购物车中添加购物车商品有使用

bug：

当我们在列表中使用InputNumber 这个组件的时候，即想要计数器的值value,又想给方法传递参数进行操作的时候,就用到了这个$event,官网文档并么有详细介绍

```html
<el-input-number v-model="item.goods_num" @change="handleChange($event,我们想要传递的值)" :min="1" label="数量加减"></el-input-number>
```

```javascript
 handleChange(value单项绑定的值,我们想要传递的值){
		 console.log(value,index)
 }
```

#### 26.3.21 Vant UI 插件

​				vant UI 组件

​				下载-引用-配置

​				三级联动选择插件







### 26.4 项目bug总结

#### 1》Swiper插件分页器没有出来	

​		原因；版本问题

​		解决方法：在项目终端从新下载`npm install swiper vue-awesome-swiper@3 -S`



#### 2》首页动画过渡有bug

​	只能一进入页面有动画，切换选项卡页面没有进入退出动画，只有首页的recommend板块有动画

​	原因：改版问题，`<transition-group>`中的:key不能写成v-for循环中的index，改成item.id即可

​	注意：要做成小米的首页选项卡切换，需要自己写动画，网上可以找代码

​	

#### 3》在搜索列表页重复搜索会报错

​		原因：路由重复会报错，在传值那里，如果传递的值相等，就没有必要再传了

​		解决方法：

```javascript
				if(this.inputValue != this.$route.query.key){
					// 跳转页面并传值
					this.$router.push({
						path: '/searchList',
						query: {
							key: this.inputValue,
						}
					})
				}
```



#### 4》在搜索列表页中，在顶部搜索其他内容，搜索不到

​		设置watch监听路由变化，路由变了就会重新执行，路由不变就不会执行

```javascript
	watch:{
		$route(){
			路径传值
			this.queryKey = this.$route.query.key;
			调用接口数据
			this.getData();
		}
	}
```



#### 5》解决better-scroll因为图片没有下载完导致滚动条高度不够，无法浏览全部内容的问题



原因是:

​						better-scroll初始化是在dom加载后执行，此时图片没有下载完成，导致滚动条高度计算不准确。	

问题核心：

​						图片的异步加载，且速度慢，导致页面高度没有及时更新；

解决思路：

​						利用`<img>`标签的complete属性进行判断，当img图片全部加载完毕后再对scroll重新计算，更新Better-Scroll；			

​						**complete 属性可返回浏览器是否已完成对图像的加载。如果加载完成，则返回 true，否则返回 fasle。**



分为两步：

​					1.一般情况，会用到动态图片的地方，主要是在正文的内容，需要设置一个ref，然后程序获得ref中所有的图片属性。使用getElementsByTagName

​					2.写一个interval循环，判断图片是否全部加载完毕；



地址链接：https://www.jianshu.com/p/b3564054328d





#### 6》vue Cannot read property ‘0‘ of undefined“ 问题及解决方案

后端传递过来前端拿到图片，取的路径中有多级（多级取值），有[0]，页面中有图片，界面正常显示，我们也能正常取到值，但是控制台会报错

解决方法：

​					加个v-if判断，没有值就不取，如下：

​						做个判断v-if，有才加载图片，没有不加载

```javascript
					<div><img v-if="goodsData.imgUrl" :src="goodsData.imgUrl[0].img"></div>
```












## 补充：

1》vue中自己解决了，300ms延迟问题

2》main.js是项目的入口文件

3》eslint报错：如果报这个错误 Mixed spaces and tabs  ，在package.json中加

	package.josn
	
		"eslintConfig": {
		    "root": true,
		    "env": {
		      "node": true
		    },
		    "extends": [
		      "plugin:vue/essential",
		      "eslint:recommended"
		    ],
		    "parserOptions": {
		      "parser": "babel-eslint"
		    },
		    "rules": {
		      "no-console": "off",
		      "no-debugger": "off",
		      "no-mixed-spaces-and-tabs": "off"
		    }
		}
4》vue的代码校验尽量别按，不然空不空格都会报错

5》如果在sublime、vscode写vue的时候没有高光，可以安装vue-cli的插件

6》npm run build项目打包命令







