# Vue.js

补充小注释：

1. 前端代码规范：缩进两个空格

2. vscode：设置回车为缩进两个空格，setting-Editor Code Style-tab size 改为2

3. 设置一段html代码为快捷键：setting-Editor Code Style-选Vue Default 为html

4. 语法糖=》就代表简写的意思

   

data：对象/函数。组件中data必须是函数

vue生命周期不会销毁，组件的生命周期会销毁

mustach语法（模版语法）：语法中可以写表达式

## 一、vuejs基础

### 指令

**把data数据放到html中显示相关指令：**

v-once：数据只渲染一次，之后数据改变，dom不会改变，失去数据响应式功能。

v-html：解析html标签 `<div v-html='data数据，数据格式为html标签 '>`

v-text：与模版语法相似，都是将数据显示在界面中

v-pre：不解释模版语法，而是将{{}}原封不动显示出来

v-cloak：斗篷。作用原理：在vue解析之前，div中有一个v-cloak属性，在vue解析之后，v-cloak属性消失，同时利用css，属性选择器，[v-cloak]:{ display: none }



### v-model

input中v-model绑定的值都是字符串



## 二、组件

### 组件基础

1. **组件命名规则**

   ​	组件命名为大写驼峰，在template中使用是小写加-短横线的方式

2. **组件数据存放**

*  组件数据存放在组件自己内部的data函数中，并且data函数return返回一个对象

* data在组件中必须是一个函数：

  ​	原因：1. 不是函数就会报错

  ​				2. 让每个组件返回一个新对象，如果是同一个对象，组件在多次使用后会互相影响

* vue实例中/vue根组件中，data可以是对象也可以是函数，但是在组件中data必须是函数

3. **所有组件都继承vue的原型**

   因此，在组件中可以调用this.$router、this.$refs等属性和方法

   往vue原型中放入方法：

   ​	Vue.prototype.方法名 = function(){}

### 组件通信

#### 父传子

**1. 传递的值为只读属性：**父组件传递给子组件的值是只读属性，不可以修改。因为父组件在多个地方都会用到，其中一个子组件要是修改了属性，就会影响到其他组件

**2. 驼峰标识：**vue.js/vue cli中，父传子，属性值驼峰命名要使用 “-” 分割

**3. 父注册子组件：**

```js
import 子组件名字 from '子组件路径.vue文件'
componets:{
	子组件名字
}	
```

**4.子接收：**

​			    props（properties属性的缩写）：

​							  方式一：数组。数组中的字符串就是传递时的名称

```js
					props:['xxx','str']
```

​							  方式二：对象，对象可以设置传递时的类型，也可以设置默认值等

​											   **注意：**对象和数组default默认值必须是从一个工厂函数中获取

​												**支持验证的数据类型：**

​												                                   `String`、`Number`、`Boolean`、`Array`、`Object`、`Date`、`Function`、`Symbol`

```js
 props:{
     	// 1.直接写数据类型，不写默认值等
     	value1:String
        
        // 2.多个数据类型
        value2:[String,Number]
     
     	// 3.带默认值、必须值。数据类型为：字符串形式
        value2:{
          type:String,
          default:默认值,
          required:true|false // 是否为必填项
          validator：Function⚠️：自定义验证函数会将该 prop 的值作为唯一的参数代入。在非生产环境下，如果该函数返回一个 false 的值 (也就是验证失败)，一个控制台警告将会被抛出
        }
     
        // 4.数据类型为：函数或数组
        value3：{
         	type:Array/Object
            default:function(){
                return []/{}
            }  
        }
     
     	// 5.当我们有自定义构造函数时，验证也支持自定义的类型

      }
```

![image-20210901160809648](C:\Users\PC\AppData\Roaming\Typora\typora-user-images\image-20210901160809648.png)

#### 子传父

​		**子传父:** 自定义事件emit 

```js
		this.$emit('自定义事件名称',值);
```

​		**父接受:** v-on绑定自定义事件，通过定义methods方法接受

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



### 父子组件访问

**$children：**获取所有子组件的集合。得到的是数组形式。

​                     `this.$children[i].子组件的属性和方法`

​				  	缺点：不常用，因为需要根据数组索引指定子组件，子组件增加或减少，索引也会变化

**$refs 与 ref配合使用：**获取指定的dom对象。也可获取子组件对象。 

​										`<组件 ref='值'>` `this.$refs.ref中的值.子组件中的属性和方法`

​										使用的非常多

**$parent：**获取父组件。

​					`this.$parent.父组件的属性/方法`

​					用的很少，因为组件之间不再独立，复用性不强，耦合性太强

**$root：**获取根组件，就是vue实例。使用的很少，因为vue实例中内容很少



## 三、slot

组件插槽的作用：

* 组件的插槽也是为了让我们封装的组件更加具有扩展性。

* 让使用者可以决定组件内部的一些内容到底展示什么。

插槽的思路：如何封装合适呢？抽取共性，保留不同

* 最好的封装方式就是将共性抽取到组件中，将不同暴露为插槽。

* 一旦我们预留了插槽，就可以让使用者根据自己的需求，决定插槽中插入什么内容。是搜索框，还是文字，还是菜单。由调用者自己来决定。

  

#### 插槽的基本使用

插槽的基本使用 `<slot></slot>`




#### 插槽的默认值

插槽的默认值 `<slot>这里为匿名插槽的默认值</slot>`



#### 编译作用域

父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。



#### 匿名插槽

* 不具备备name属性的插槽。一个不带 `name` 的 `<slot>` 出口会带有隐含的名字“default”。
* 如果有多个值, 同时放入到组件进行替换时, 一起作为替换元素



#### 具名插槽

1. 具有name属性的插槽
2. slot属性的这种方法在vue3中已经被遗弃。2.6及以上的版本取而代之是v-slot `<template v-slot:定义的名字>`
3. v-slot中 `<template> `元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 v-slot 的 `<template>` 中的内容都会被视为默认插槽的内容。
4. 注意 `v-slot` 只能添加在 `<template>` 上。只有一种情况除外：被提供的内容只有默认插槽，组件的标签可以被当作插槽的模板来使用。这样我们就可以把 v-slot 直接用在组件上
5. v-slot的缩写=》#，`v-slot:插槽名`=`#:插槽名`。注意只有具名插槽可以使用简写，匿名插槽只有在写default时候才可以用，否则不可以用

```HTML
父组件：
	<div id="app">
      <!--方法一：slot属性，已经被遗弃-->
      <cpn>
          <span slot="center">标题</span>
      </cpn> ===> 已经被遗弃
        
      <cpn>
          <button slot="left">返回</button>
      </cpn> ===> 已经被遗弃
        
      <!--方法二：v-slot-->
 	  <cpn>
           <template v-slot:left>标题左</template> 
           <template v-slot:default  ===》 空 >匿名插槽</template> 
           <template v-slot:right>标题右</template> 
      </cpn>
        
    </div>

子组件：
    <template id="cpn">
      <div>
        <slot></slot> ===> 放匿名插槽的
        <slot name="left"><span>左边</span></slot>
        <slot name="center"><span>中间</span></slot>
        <slot name="right"><span>右边</span></slot>
      </div>
    </template>
```



#### 作用域插槽

1. **什么叫作用域插槽：**有时让插槽内容能够访问子组件中才有的数据是很有用的

   ​	也可以如下理解：

   ​								  在父组件使用我们的子组件时，从子组件中拿到数据

   ​								  父组件替换插槽的标签，但是内容由子组件来提供。

   ​									**子组件向父组件传值（通过插槽传值）**：为了让 childUser 在父级的插槽内容中可用，需要把 childUser 从 <Child> 子级作用域传递到 <Father>父级作用域。

   ​							   	**做法**：就是将 childUser 作为 <slot> 元素的一个属性绑定上去，绑定在 <slot> 元素上的 属性childData被称为**插槽 prop**。

   ​		       自己理解：父组件插槽内容想要拿到子组件数据

   ​						      	子组件向父组件传值（通过插槽传值），将子组件作用域下的数据传递到父组件作用域下

   

2.  **插槽prop写法：**

   子组件：绑定在 `<slot v-bind='绑定父组件想要访问的变量'>` 元素上的 attribute 被称为**插槽 prop**

   父组件通过v-slot来访问 `<tempalte v-slot:插槽名='自定义插槽 prop 的对象命名'>`

```html
父组件：
<!--匿名作用域插槽-->
<template v-slot:default='slotProp01'>
	{{slotProp01.user.firstName}}
</template>

<!--具名作用域插槽-->
<template v-slot:value='slotProp02'>
	{{slotProp02.user.lastName}}
</template>


子组件:
<slot v-bind:user='user绑定父组件想要访问的变量==》称为插槽prop'>
	{{user.firstName}}
</slot>

```

*  当被提供的内容*只有*默认插槽时，组件的标签才可以被当作插槽的模板来使用

  ```HTML
  <current-user v-slot="slotProps"/v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </current-user>
  ```

* 注意默认插槽的缩写语法**不能**和具名插槽混用，因为它会导致作用域不明确。只要出现多个插槽，请始终为*所有的*插槽使用完整的基于 `<template>` 的语法

  

3. **解构插槽Prop**

   * 作用域插槽的内部工作原理是将你的插槽内容包裹在一个拥有单个参数的函数里：

   ```html
   function (slotProps) {
     // 插槽内容
   }
   ```

   * 这意味着 `v-slot` 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。所以在支持的环境下 ([单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)或[现代浏览器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#浏览器兼容))，你也可以使用 [ES2015 解构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#解构对象)来传入具体的插槽 prop，如下：

   ```html
   <current-user v-slot="{ user }">
     {{ user.firstName }}
   </current-user>
   ```

   * 这样可以使模板更简洁，尤其是在该插槽提供了多个 prop 的时候。它同样开启了 prop 重命名等其它可能，例如将 `user` 重命名为 `person`：

   ```html
   <current-user v-slot="{ user: person }">
     {{ person.firstName }}
   </current-user>
   ```

   * 你甚至可以定义后备内容，用于插槽 prop 是 undefined 的情形：

   ```html
   <current-user v-slot="{ user = { firstName: 'Guest' } }">
     {{ user.firstName }}
   </current-user>
   ```



#### 动态插槽名

> 2.6.0 新增

[动态指令参数](https://cn.vuejs.org/v2/guide/syntax.html#动态参数)也可以用在 `v-slot` 上，来定义动态的插槽名：

```
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
</base-layout>
```



## 四、前端模块化

1. 自己实现模块化雏形

   ```js
   a.js文件
   var moduleA = (function(){})()
   b.js文件
   var moduleB = (function(){})()
   ```

2. 常见的模块化规范：CommonJS、AMD、CMD，也有ES6的Modules。

   CmmonJS 是nodejs、webpack

3. 模块化有两个核心。导入导出

4. 在模块化开发中，一个js文件就是一个模块

5. 模块有自己的作用域



## 五、webpack

1. webpack前端模块化打包工具

2. 更加强调模块化

3. npm、node、webpack三者关系（看图）。npm（node packages manager）工具只是为了更方便管理node环境下的包

4. window键+R：输入cmd，查看版本：node -v

   ​																webpack --version查看webpack版本，”'webpaack' 不是内部或外部命令，也不是可运行的程序或批处理文件。“——说明webpack没有安装、

5. webpack有全局，有局部，在package.json scripts脚本中有webpack，这个webpack就是局部

6. 开发js文件使用模块化开发规范：commonjs、es6，直接在html中引入使用了模块化的js文件浏览器是无法识别的，通过webpack打包后到dist文件再引用就可以使用，webpack ./src/main.js ./dist/bunld.js ===》 将main.js文件打包到bundle.js文件下。然后index.html入口html中引入bundle.js文件就ok



## 六、Vue cli

### 什么是vue cli

1. vue-cli是什么

   脚手架cli：Command line interface 命令行界面 。熟称脚手架

   Vue CLI是一个官方发布 vue.js 项目脚手架

   使用 vue-cli 可以快速搭建Vue开发环境以及对应的webpack配置（vuecli脚手架的作用）

2. vuecli的依赖

   * node：Node环境要求8.9以上或者更高版本。node运行要下载很多依赖包，需要npm来下载管理。
   * webpack模板

3. vuecli的安装

   * npm install -g @vue/cli
   * 安装vuecli3脚手架，使用vuecli2模板 npm install -g @vue/cli-init

4. 查看vuecli脚手架版本

   * vue --version

### vuecli2目录结构

1. **初始化项目**

   npm init webpack 项目名称（常用）

   npm init webpack-simple 项目名称 

   注意：不要给项目名称命名中文和大写字母，可以_、-

   ​			eslint是对js代码做出规范，不规范就会报错

   ​			

   ![image-20210907092125935](C:\Users\PC\AppData\Roaming\Typora\typora-user-images\image-20210907092125935.png)

2. **目录结构**

* build文件夹：webpack相关配置

* config文件夹：webpack相关配置

  * index.js：定义一些变量
    * host主机
    * port端口
    * autoOpenBrowser：true自动打开浏览器。默认为false
  * dev.env.js：开发配置
  * prod.env,js：生产配置

* node_module文件夹

* src文件夹：源码

  * main.js
  * App.vue
  * assets文件夹：打包后会根据文件大小判定，如果文件大小小于limit直接放入dist文件夹，否则编译成64还会对文件重命名，再放入dist文件夹xia
  * components文件夹

* static文件夹：静态资源文件夹，打包后会原封不动复制到dist文件夹下

  * .gitkeep不管文件夹为不为空，都会上传到本地服务器。（git有时候文件夹为空，就不会上传到本地服务器）

* .babelrc：将js进行转换时读取配置的文件

* .editorconfig：将代码风格进行统一的配置。项目文本配置

* .gitignore：某些文件不需要上传到服务器

* eslintrc.js：代码检测配置

* .postcssrc.js：在进行css转换时所配置的一些东西

* index.html：  模版，打包后根据index.html生成dist中的index.html

* package.json：管理node_module相关包。大概版本

  * ^代表安装的版本最后一位可变，只会更高版 x.x.x

  * ~代表安装的版本最后两位可变，只会更高版 x.x.x

  * scripts脚本命令：

    * dev：webpack-dev-serve搭建本地服务器

      ​		：--open 启动服务器自动打开浏览器配置

    * build：=》npm run buile 执行原理

* package-lock.json：记录了node_module真实版本

* READE.md

![image-20210907091418307](C:\Users\PC\AppData\Roaming\Typora\typora-user-images\image-20210907091418307.png)

### vuecli3目录结构

1. **初始化项目**

   vue create 项目名称

2. **vue cli3 与vue cli2 区别**

   * vue-cli 3 是基于 webpack 4 打造，vue-cli 2 还是 webapck 3
   * vue-cli 3 的设计原则是“0配置”，移除的配置文件根目录下的，build和config等目录
   * vue-cli 3 提供了 vue ui 命令，提供了可视化配置，更加人性化
   * 移除了static文件夹，新增了public文件夹，并且index.html移动到public中
   * vuecli2类型监测 flow-type（facebook的东西）
   * vuecli3用的是TypeScript（微软microsoft）,TypeScript是es超级，与java非常的像

   

![image-20210907094201382](C:\Users\PC\AppData\Roaming\Typora\typora-user-images\image-20210907094201382.png)

​	注意：a) Progressive web App (PWA)Support先进的APP

​					与之前的APP比较 1）存储方向，比localStorage更好

​											        2）有推送功能

3. **目录结构**

* node_module
* public文件夹：public文件夹原封不动的打包到dist中
  * index.html
* src
  * assets
  * componetns
  * App.vue
  * main.js
* .browserslistrc
* .gitignnore
* babel.config.js：babel配置，es语法转换
* package-lock.json
* postcssl.config.js
* READEME.md

![image-20210907094217551](C:\Users\PC\AppData\Roaming\Typora\typora-user-images\image-20210907094217551.png)

注意：a) 后缀是...xxrc -> linux与终端中的配置有关，后缀通常是rc -> run command、

​			b) cli3会默认会在根目录下建一个.git仓库

​			c) @vue/cli-service管理了许多包

​			d）webpack中：vue-loader加载vue文件、vue-template-compiler解析vue文件（把tempalte模板解析成render函数）

4. **cli3配置方法**

   方法一：启动配置服务器vue cli

   ​				命令行输入vue ui启动本地服务器

   方法二：webpack配置

   ​				node_module->@vue->cli-server->webpack.config.js->导入/lib/server.js

   方法三：创建vue.config.js配置文件

   ​				module.exports={

   ​	

   ​				} 导出的配置会和之前的配置自动合并

### Runtime-only和Runtime-compiler

直接运行）与Runtime+compiler（运行时编译）的区别

* 如果在之后的开发中，你依然使用template，就需要选择Runtime-Compiler
* 如果你之后的开发中，使用的是.vue文件夹开发，那么可以选择Runtime-only

```js
Runtime-Compiler:
new VUe({
    el:'#app',
    components:{App},
    template:'<App>' ==》template模板会替代el挂载
})

Runtime-only:
new Vue({
    el:'#App'，
    render:h=>h(App)
})


// el:#app与$mount('#app')区别不大，在源码中el:#app会传入$mount('#app')
new Vue({
    render:h=>h(App)
}).$mount('#app')

```

**vue程序运行过程：**

vue在html中代码写成template模板===>parse（解析）ast（abstract synxt tree抽象语法树）===》编译（compile）render函数===》virtual dom ===》真是dom

![vue-html运行编译过程](d:\Desktop\我的坚果云\03 菡玲的前端笔文件夹\images\vue-html运行编译过程.png)



### render函数用法

1. 普通用法

   ```js
   render:function(createElement){
       return createElement('标签',{标签的属性},['内容'])
   }
   
   嵌套：
   render:function(createElement){
       return createElement('标签',{标签的属性},[createElement('标签'，{标签的属性}，['内容'])])
   }
   ```

2. 传入组件对象

   ```js
   render:function(createElement){
       return createElement(传入的组件)
   }
   ```


### main.js

**1.往vue原型中放入方法：**

​	Vue.prototype.方法名 = function(){}



## 七、Vue-Router

### 认识前端路由

#### **发展历程**

后端渲染（后端路由）=》前后端分离（Ajax）=》SAP单页面（前端路由）

#### **单页面富应用阶段**

* 其实SPA最主要的特点就是在前后端分离的基础上加了一层前端路由.

* 也就是前端来维护一套路由规则.

#### **前端路由的核心是什么呢？**

改变URL，但是页面不进行整体的刷新。

实现方法：

​				方法一：改变url上的hash

​				方法二：html5上的history模式

#### **url的hash**

* URL的hash也就是锚点(#), 本质上是改变window.location的href属性.
* 我们可以通过直接赋值location.hash来改变href, 但是页面不发生刷新
* location.href跳转路由会刷新页面

```js
location.hash='/foo'

===>http://localhost:8082/home#/foo
```

#### **html5的history模式**

* history接口是HTML5新增的, 它有五种模式改变URL而不刷新页面.
* history.pushState({}=》对象可以为空,''=》title可以为空,'/foo'=》跳转的路由) ===》跳转指定路由，可以返回。规则：栈存储，先进后出（后进先出）
* history.back() ===》返回上一个url
* history.replaceState({},'','/home') ===》替代当前的url，没有返回
* history.go(-1)
* history.forward = history.go(1)

![](d:\Desktop\我的坚果云\03 菡玲的前端笔文件夹\images\1vue打包后文件内容.png)



### **vue-router基础**

* vue-router是Vue.js官方的路由插件，它和vue.js是深度集成的，适合用于构建单页面应用
* vue-router是基于路由和组件的
  * 路由用于设定访问路径, 将路径和组件映射起来.
  * 在vue-router的单页面应用中, 页面的路径的改变就是组件的切换

#### 安装配置使用

​	**安装vue-router**：npm install vue-router --save => 添加到dependence中

​	**配置：**在模块化工程中使用它(因为是一个插件, 所以可以通过Vue.use()来安装路由功能)				

​				Ø第一步：导入路由对象，并且调用 Vue.use(VueRouter)

​									Vue.use(插件)：使用Vue.use时，会执行安装插件的install方法。

​                  											  不管安装什么什么插件都要在调用Vue.use(插件)方法

```js
import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.注入插件
Vue.use(VueRouter)
```

​				Ø第二步：创建路由实例，并且传入路由映射配置

```js
// 导入路由组件
import Home from '../components/Home'

// 2.定义路由
const routes = [
// 配置组件和路由的映射关系
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  }
]

// 3.创建router实例
const router = new VueRouter({
  routes
})

// 4.导出router实例
export default router
```

​				Ø第三步：在Vue实例中挂载创建的路由实例

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 将router挂载到Vue实例中
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

**使用：**

​				第一步: 创建路由组件

​				第二步: 配置路由映射: 组件和路径映射关系

​				第三步: 使用路由: 通过<router-link>和<router-view>

```html
<!--使用路由-->
<div id="app">
    <router-link to="/home">首页</router-link>
	<router-view /> // 决定渲染内容显示的位置
</div>
```

#### 路由配置参数

##### **1.路由重定向**

​	redirect。让路径默认跳到到首页

```js
const routes = [
  {
    path: '/', ==> 空格和空都可以
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  }
]
```

##### **2.mode路由模式**

​	 history、hash。默认为hash

```js
const router = new VueRouter({
  routes,
  mode: 'history'
})
```

##### 3.linkActiveClass

 	通过router实例给router-link定义class名

```js
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
```

```vue
<router-link to="/home">首页</router-link>

<style lang="scss">
.active {
  color: yellow;
}
</style>

```

##### 4.meta元数据



#### 路由懒加载

* 官方解释

  > 当打包构建应用时，Javascript 包会变得非常大，影响页面加载。

  > 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了

* 理解

  > 路由懒加载就是用到的时候再加载

  > 路由中通常会定义很多不同的页面，打包后放在一个js文件中，但是, 页面这么多放在一个js文件中, 必然    会造成这个页面非常的大，如果我们一次性从服务器请求下来这个页面, 可能需要花费一定的时间, 甚至用户的电脑上还出现了短暂**界面空白**的情况。如何避免这种情况呢? 使用路由懒加载就可以了.

* 路由懒加载做了什么?

  > 路由懒加载的主要作用就是将路由对应的组件打包成一个个的js代码块,只有在这个路由被访问到的时候, 才加载对应的组件

懒加载写法：

方式一: 结合Vue的异步组件和Webpack的代码分析

```js
const Home = resolve => { require.ensure(['../components/Home.vue'], () => { resolve(require('../components/Home.vue')) })};
```

方式二: AMD写法

```js
const About = resolve => require(['../components/About.vue'], resolve);
```

方式三: 在ES6中, 我们可以有更加简单的写法来组织Vue异步组件和Webpack的代码分割

```js
const Home = () => import('../components/Home.vue')
```

未使用懒加载打包后：

​		除了img,html其他内容都打包在bundle.js 从静态资源服务器第一次请求，过大会出现短暂的空白

![](d:\Desktop\我的坚果云\03 菡玲的前端笔文件夹\images\1vue打包后文件内容.png)

使用了懒加载：打包后除了上面三个js文件外还会多出一些js文件，是使用了懒加载的组件



#### 动态路由

**概念：**在某些情况下，一个页面的path路径可能是不确定的，比如我们进入用户界面时，希望路径：/user/aaaa或/user/bbbb，除了有前面的/user之外，后面还跟上了用户的ID，这种path和Component的匹配关系，我们称之为动态路由(也是路由传递数据的一种方式)。

**写法：**path:'/路由/:自定义参数 通常用id

```js
{
    path: '/user/:id',
    component: User
}

// 获取：
this.$route.params.id自定义参数 ===> 得到当前动态路由自定义参数的值
```



#### 路由嵌套

子路由：

```js
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'page1' ===> 子路由重定向
      },
      {
        path: 'page1',
        component: Page1
      },
      {
        path: 'page2',
        component: Page2
      }
    ]
  },
```

home页调用子路由：

```js
  <div id="home">
    <div>我是home页</div>
    <router-link to="/home/page1">子页1</router-link>
    <router-link to="/home/page2">子页2</router-link>
    <router-view />
  </div>
```



#### 路由跳转

##### 1. 声明式导航

​	通过a连接的方式实现跳转` <router-link></router-link>`

* **to属性：**指定路由跳转

  ```vue
  // 1.跳转指定路径
  <router-link to='/foo'></router-link>
   
  // 2.跳转指定路径并且传递参数
  <router-link :to='{path:"/foo",params:}'></router-link>
  ```

* **tag属性：**默认router-link是渲染成`<a></a>`标签。tag属性可以指定<router-link>之后渲染成什么组件

  ```vue
  <router-link to='/home' tag='li'></router-link> ===> dom渲染成<li></li>标签
  ```

* **active-class属性：**通过该属性给router-link定义class名

  当<router-link>对应的路由匹配成功时, 会自动给当前元素设置一个router-link-active的class, 设置active-class可以修改默认的名称。

  ```vue
  <router-link to="/home" active-class="active">首页</router-link>
  ```

  ```css
  <style lang="scss">
  // .router-link-exact-active {
  //   color: pink;
  // }
  // .router-link-active {
  //   color: pink;
  // }
  .active {
    color: skyblue;
  }
  </style>
  ```

* **replace属性：**防止来回跳转，内部使用histroy.replaceState

  

##### 2.编程式导航

​	通过js代码实现跳转

* **$router**

  为VueRouter的实例，相当于一个全局的路由器对象，里面含有很多属性和子对象，例如history对象。经常用的跳转链接就可以用this.$router.push，和router-link跳转一样。

  * **this.$router.push()**  ===》可以返回

  * **this.$router.replace()** ==》不会返回 ,它不会向 history 添加新记录，而是替换掉当前的 history 记录。===》一级页面不能返回，所以只能用replace

  * **this.$router.go(1)**     ===》返回-1 / 前进2 哪页面，go(0)就是刷新

  *  **this.$router.back()**    ===》返回上一页

    ```js
    // 字符串
    router.push('home')
    // 对象
    router.push({ path: 'home' })
    // 命名的路由,变成/user/123
    router.push({ name: 'user', params: { userId: '123' }})
    // 带查询参数，变成 /register?plan=private
    router.push({ path: 'register', query: { plan: 'private' }})
    ```

* **$route**

  相当于当前正在跳转的路由对象。可以从里面获取name,path,params,query,meta等

#### 传递参数

url：协议://主机:端口/路径?查询#片段

​		 scheme://host:port/path?query#fragment

##### 1.传递参数的类型

主要有两种方式：params和query。大量数据传的时候用query，因为传过去的是对象。

**params**

* 配置路由格式: /router/:id
* 传递的方式: 在path后面跟上对应的值
* 传递后形成的路径: /router/123, /router/abc

**query**

* 配置路由格式: /router, 也就是普通配置
* 传递的方式: 对象中使用query的key作为传递方式
* 传递后形成的路径: /router?id=123, /router?id=abc

##### 2.传递参数方式

* 方式 一：<router-link>的to属性

  ```vue
  写法一：主流写法
  <router-link to="/">Home</router-link>
  
  写法二：用法一般
  <router-link 
               :to="{
                    path:'/profile/'+123,
                    query:{
                        name:'why',
                        age:18
                        }
                    }"
  >Home</router-link>
  
  写法三：写法不多
  <router-link :to="{
                    	name:'router/index.js配置的name',
                    	params:{传递的参数}
                    }"
  >Home</router-link>
  ```

  

* 方式二：$router.push方法传

  ```js
  写法一：
  this.$router.push({
      path:'/profile'+123,
      query:{
          name:'why',
          age:18
      }
  })
  
  // 带查询参数，变成 /register?plan=private
  router.push({ path: 'register', query: { plan: 'private' }})
  
  写法二：// 字符串
  router.push('home')
  
  写法三：// 对象
  router.push({ path: 'home' })
  
  写法四：// 命名的路由,变成/user/123
  router.push({ name: 'user', params: { userId: '123' }})
  ```

##### 3.获取参数

通过$route获取参数

```js
this.$route.path 
this.$route.params
```



#### 导航守卫



#### keep-alive缓存组件















































































































































































## 注意：

1. 父传子通过属性：v-bind:不支持驼峰的props变量名，如果接受的props值一定要以驼峰的形式，那么父传子属性名要以-隔开

2. props以对象的形式接收值，如果传递的值的属性是对像或则数组，`default(){return [] / {}}` 写成这样子，不然会报错。vue2.5.7版本以上都必须这么写，不然会报错的

3. 在vue.js中，子传父，子中定义不能驼峰，可以-，父@自定义事件接受=》自定义事件不能驼峰，子组件中是-，父中也-。在cli脚手架中就可以驼峰

4. 父传子的值，只读，不能改

5. 默认子通过自定义事件传递给父组件的值都是字符串类型

⚠️：input表单中v-model绑定的都是字符串类型





















7. 插槽
   *   具名插槽现在过时了，v-slot用的比较多
   *   作用域插槽 2.5.x以下需要使用template模版，以上的模版可以不需要使用template标签，直接div标签都是可以的=》父组件拿到子组件的数据，由父组件自定义进行展示
   * v-slot现在用

