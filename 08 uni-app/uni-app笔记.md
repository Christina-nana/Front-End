# uni-app笔记

## 一、基础知识

### 1.uni-app是什么

uni-app：是一个使用vue.js开发所有前端应用的框架，开发者编写一套代码，可以发布到ios、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台



uni-app其实就是微信小程序和vue的结合：vue语法+小程序的标签和API

​	vue中使用的是html标签

​	uni-app中使用的是小程序标签（也叫组件）



uni-app：虽然说适配多端，但是也有平台差异，有些支持有些不支持，也要分开调试



### 2.vue与nvue的区别

​	nvue，就是以.nvue结尾的文件，其实比vue更好的做app，性能好很多，但是调试起来非常的麻烦



### 3.uni-app开发尺寸

​								upx尺寸：有坑，swiper中就无效

​								rpx尺寸：也是自适应的（小程序的单位是rpx)



### 4.	uni-app中绝对路径与相对路径

#### **[模板内引入静态资源](https://uniapp.dcloud.io/frame?id=模板内引入静态资源)**

绝对路径，uni-app中 /static指根目录下的static目录，在cli项目中/static指src目录下的static目录

vue中@代表src

uni-app中的@/代表整个根目录下

```html
<!-- 绝对路径，/static指根目录下的static目录，在cli项目中/static指src目录下的static目录 -->
<image class="logo" src="/static/logo.png"></image>
<image class="logo" src="@/static/logo.png"></image>
<!-- 相对路径 -->
<image class="logo" src="../../static/logo.png"></image>
```



#### [js文件引入](https://uniapp.dcloud.io/frame?id=js文件引入)

- js文件不支持使用`/`开头的方式引入

  

#### [css引入静态资源](https://uniapp.dcloud.io/frame?id=css引入静态资源)

```CSS
/* 绝对路径 */
@import url('/common/uni.css');
@import url('@/common/uni.css');
/* 相对路径 */
@import url('../../common/uni.css');
```

> `css`文件或`style标签`内引用的图片路径可以使用相对路径也可以使用绝对路径，需要注意的是，有些小程序端css文件不允许引用本地文件（请看注意事项）。

```css
/* 绝对路径 */
background-image: url(/static/logo.png);
background-image: url(@/static/logo.png);
/* 相对路径 */
background-image: url(../../static/logo.png);
```



#### **[字体图标引入](https://uniapp.dcloud.io/frame?id=字体图标)**

使用本地路径图标字体文件的引用，路径推荐使用以 ~@ 开头的绝对路径。

```css
 @font-face {
     font-family: test1-icon;
     src: url('~@/static/iconfont.ttf');
 }
```

## 二、配置开发环境

Hbuilder编辑器

新建项目-->uni-app



## 三、真机调试方式

### 1、(APP端)真机测试

#### mac操作系统下真机调试：

​											1.电脑和手机要连接同一个wifi

​											2.手机与电脑连接

​													手机<--数据线-->电脑

​											3.运行-->运行到手机或模拟器-->下载真机插件

​											4.运行-->运行到手机或模拟器-->设备运行

​														注意：第一次下载uni-app的依赖

​																	如果要运行项目，需要再运行一次

​																	***********偷偷的在手机中多了一个app

​											5.未受信任

​												设置-->通用-->设备管理-->信任

#### windows操作系统真机调试：

**安卓手机**

   											1. 电脑和手机要连接同一个wifi
   											2. 手机和电脑连接-->利用数据线
   											3. 运行-->运行手机或模拟器-->下载插件（首次）
   											4. 运行-->运行手机或模拟器-->运行设备
   	             - 第一步：下载uniapp的依赖
   	             - 第二步：停止一下设备，再点击一次
   	             - 偷偷的在手机中多了一个app

**连接ios手机**

1. 电脑和手机要连接同一个wifi

2. 手机和电脑连接-->利用数据线

3. windows的电脑要安装软件：iTools 4、itunes安装其中一个即可

4. 未受信任

   ​	设置-->通用-->设备管理-->信任

### 2、微信开发者工具

#### 	mac操作系统下的微信小程序调试：

  1.电脑和手机要连接同一个wifi

2. 运行-->运行微信小程序-->小程序开发者工具

​											错误修正：

​																1.运行-->运行到小程序-->运行配置

​																	选择路径

​																2.手动打开微信开发者工具

​																	设置==>安全设置==>服务器端口【开启】

​											2.微信开发者工具无法预览-->需要添加APPID

#### windows操作系统下的微信小程序调试

​	1.运行-->运行微信小程序-->小程序开发者工具-->选择路径：微信小程序的路径

​	2. 手动打开微信开发者工具 

​			设置==>安全设置==>服务器端口【开启】

​	3.微信开发者工具无法预览-->需要添加APPID

### 3、H5端调试

直接打开Chrome浏览器右击选择Chrome模拟器



## 四、uni-app项目目录结构

[uni-app官网目录结构连接](https://uniapp.dcloud.io/frame?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84)

1. **manifest.json**   配置文件：appid、logo...

2. **pages.json**  (与微信小程序中的配置文件一样)      配置文件：导航、tabbar、路由

3. **main.js**         vue初始化入口文件	

4. **App.vue**   	 全局配置：引入全局样式，全局监听

5. **static**     	    静态资源：图片、字体图标、也可以放全局的css文件（当然css文件也可以放到common文件中)

6. **pages**			页面

   	index
   		index.vue
   	search
   		search.vue
   	list
   		list.vue
   	my	
   		my.vue
   	search-list
   		search-list.vue

7. **components**	组件

   	index
   			Banner.vue
   			Icons.vue
   	common
   		commodity.vue

8. **common**		公共文件

   ​			全局的css文件 
   ​			api
   ​			request.js 封装request请求

9. **store**     vuex

   

**tips**

- 编译到任意平台时，`static` 目录下的文件均会被完整打包进去，且不会编译。非 `static` 目录下的文件（vue、js、css 等）只有被引用到才会被打包编译进去。
- `static` 目录下的 `js` 文件不会被编译，如果里面有 `es6` 的代码，不经过转换直接运行，在手机设备上会报错。
- `css`、`less/scss` 等资源不要放在 `static` 目录下，建议这些公用的资源放在自建的 `common` 目录下。





## 五、引入css

1 . 引入uni-app初始化css

​	引入uni-app自带的uni.css，相当于初始化css===>新建自带uni-app模版的项目===>粘贴复制过来

​	报错：引入tff，因为css中字体有用到，没有引入就会报错

2 . 引入字体图标css

​	 引入的字体图标css中不再加路径，而是直接删掉以前要加路径的

​	 iconfont.ttf文件放到static中，在顶部的导航区域用到放大镜、消息等字体图标需要引入ttf的路径

3 . 全局css ===》common.css中放：

```css
/*全局css文件*/

/*默认字体颜色*/
.f-color{
	color: #636263;
}

/* 选中的字体颜色 */
.f-active-color{
	color: #49BDFB;
}

/* 主题背景颜色 */
.bg-color{
	background-color: #42B7FB;
}
```

4 . 在app.vue中引入所有的公共css

```vue
<style>
	/*每个页面公共css */
	@import './common/common.css';
	@import './common/uni.css';
	@import './common/iconfont.css';
</style>
```



## 六、底部tabBar

​	配置：pages.json中配置tabBar：路径图片、pages中配置页面

```javascript
	"tabBar": {
		"color": "#636263",
		"selectedColor": "#636263",
		"list": [{
				"pagePath": "pages/index/index",
				"text": "首页",
				"iconPath": "static/tabbar/index.png",
				"selectedIconPath": "static/tabbar/indexSelected.png"
			},
			{
				"pagePath": "pages/list/list",
				"text": "分类",
				"iconPath": "static/tabbar/list.png",
				"selectedIconPath": "static/tabbar/listSelected.png"
			},
			{
				"pagePath": "pages/shopcart/shopcart",
				"text": "购物车",
				"iconPath": "static/tabbar/shop.png",
				"selectedIconPath": "static/tabbar/shopSelected.png"
			},
			{
				"pagePath": "pages/my/my",
				"text": "我的",
				"iconPath": "static/tabbar/my.png",
				"selectedIconPath": "static/tabbar/mySelected.png"
			}
		]
	}
```



## 七、uni-app打包部署到服务器

[uni-app打包部署到服务器连接](https://wangxiaoting.blog.csdn.net/article/details/107176967?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link&utm_relevant_index=5)





































# 

#  

# 

#  

# 



# 百年奥莱笔记

## 一、项目开发前分析

### 1.产品经理：设置产品 【产品原型图】

### 2.研发部门和产品经理开会

   功能模块

​				定则：张三：负责 首页，列表页，搜索页，我的页面

​							李四：sdk

### **3.页面模块分析**

一、首页index

1. 顶部滑动导航
   封装：否

2. 头图
	名称：banner
	封装：是
3. 宫格
	名称：icons
	封装：是
4. 卡片
	名称：card 
	封装：是
	公用：否 ===》⚠️：还需要判断是整个项目公用还是只是首页使用
5. 品牌
	名称：brand
	封装：是
6. 热销
	名称：hot
	封装：是
7. 店铺
	名称：shop
	封装：是
8. 为您推荐

二、搜索search

	1. 最近搜索
		封装：否
	2. 热门搜索
		封装：否

三、搜索列表search-list

	1. 商品的筛选
	
		封装：否

四、商品详情details

	1. 头图滑动
		名称：swiper
		封装：是
	2. 内容
		名称：content
		封装：是
	3. 看了又看  【调用->商品展示列表】
		封装：是
	4. 加入购物车
		名称：addCart 
		封装：是

五、购物车 shopCart 数据：vuex

	***检测是否登录⚠️
	1. 商品内容
	2. 结算

六、分类 list
	
七、我的 my 

	***检测是否登录⚠️

八、登录

九、支付

十、公用的组件：

	1. 单独的商品展示  ： commodity
	
		图片、文字
	
	2. 商品展示列表：  commodityList
	
		内部调用===》单独的商品展示


### 4.目录结构

```
manifest.json   配置文件：appid、logo...

pages.json      配置文件：导航、tabbar、路由

main.js         vue初始化入口文件	

App.vue   		  全局配置：样式，全局监听

static     	    静态资源：图片、字体图标

pages			页面
	index
		index.vue
	search
		search.vue
	list
		list.vue
	my	
		my.vue
	search-list
		search-list.vue
		
components		组件
	
	index
		Banner.vue
		Icons.vue
	common
		commodity.vue

common		
			公共文件：全局的css文件 
			api
					request.js 封装request请求
					
store vuex
```

### 5.注意点

​	uni-app其实就是vue与微信小程序的结合体

​	nvue其实比vue更好的做app，性能好很多，但是调试起来非常的麻烦

​	uni-app中尺寸：	

​								upx尺寸：有坑，swiper中就无效

​								rpx尺寸：也是自适应的

​	uni-app：虽然说适配多端，但是也有平台差异，有些支持有些不支持，也要分开调试

​	uni-app中@/就代表整个根目录下

## 二、项目知识点

### 1.引入css

1 . 引入uni-app初始化css

​	引入uni-app自带的uni.css，相当于初始化css===>新建自带uni-app模版的项目===>粘贴复制过来

​	报错：引入tff，因为css中字体有用到，没有引入就会报错

2 . 引入字体图标css

​	 引入的字体图标css中不再加路径，而是直接删掉以前要加路径的

​	 iconfont.ttf文件放到static中，在顶部的导航区域用到放大镜、消息等字体图标需要引入ttf的路径

3 . 全局css ===》common.css中放：

```css
/*全局css文件*/

/*默认字体颜色*/
.f-color{
	color: #636263;
}

/* 选中的字体颜色 */
.f-active-color{
	color: #49BDFB;
}

/* 主题背景颜色 */
.bg-color{
	background-color: #42B7FB;
}
```

4 . 在app.vue中引入所有的公共css

```vue
<style>
	/*每个页面公共css */
	@import './common/common.css';
	@import './common/uni.css';
	@import './common/iconfont.css';
</style>
```



### 2.底部tabBar

​	配置：pages.json中配置tabBar：路径图片、pages中配置页面

```javascript
	"tabBar": {
		"color": "#636263",
		"selectedColor": "#636263",
		"list": [{
				"pagePath": "pages/index/index",
				"text": "首页",
				"iconPath": "static/tabbar/index.png",
				"selectedIconPath": "static/tabbar/indexSelected.png"
			},
			{
				"pagePath": "pages/list/list",
				"text": "分类",
				"iconPath": "static/tabbar/list.png",
				"selectedIconPath": "static/tabbar/listSelected.png"
			},
			{
				"pagePath": "pages/shopcart/shopcart",
				"text": "购物车",
				"iconPath": "static/tabbar/shop.png",
				"selectedIconPath": "static/tabbar/shopSelected.png"
			},
			{
				"pagePath": "pages/my/my",
				"text": "我的",
				"iconPath": "static/tabbar/my.png",
				"selectedIconPath": "static/tabbar/mySelected.png"
			}
		]
	}
```

### 首页

#### 3.顶部导航：pages.json中配置、小程序与App差异化头部配置

**首页顶部需要在pages.json中配置**

1》uni-app官网中有app-plus下的`titleNView顶部导航栏` `button按钮`的配置如下：⚠️注意配置中的属性嵌套关系，button可以配字体图标

注意字体图标引入的文件是.ttf文件

```javascript
		"style": {
				"navigationBarTitleText": "百年奥莱",
				"navigationBarBackgroundColor": "#FFFFFF",
				"app-plus": {
					"titleNView":{
						"buttons": [{⚠️：button
							"float": "left",
							"fontSrc": "./static/iconfont.ttf",⚠️：字体图标ttf文件路径
							"text": "\ue637",⚠️：字体图标
							"fontSize":"48rpx"
						}, {
							"float": "right",
							"fontSrc": "./static/iconfont.ttf",⚠️：字体图标引入ttf文件路径
							"text": "\ue764"⚠️：字体图标
						}]
					}
				}
			}
```

2》app-plus在app中和H5生效，各种小程序不生效，如需定制小程序的头部需要这样做：

​		pages.json中加入： "navigationStyle":"custom"

​		page/index/index.vue中写入:

```html
<!-- #ifdef MP-WEIXIN -->
  <view>
   ....你的小程序头部...
  </view>
 <!-- #endif -->
```



#### 4. 首页swiper组件

1》

​	封装

​	uni-app中@/就代表整个根目录下

​	uni-app中有组件`<swiper></swiper>`直接用

​	调整图片宽高：给swiper也加上

```css
	swiper,
	.swiper-img{
		width: 100%;
		height: 400rpx;
	}
```

##### 2》swiper的坑总结：

​    1 组件名称swiper.vue 或者 Swiper.vue , 在传递数据的时候有可能图片就不见了。

​    2 改变图片的大小咱们要用rpx的单位，upx无效。

​    3 本身swiper是有150px的默认高度，app中需要改变默认高度需要加入:

​       swiper{

​           width:100%;

​           height:400rpx;  

​       }

#### 5. 文字封装开发

1. 在components/common目录中创建了Card.vue组件文件 ===> **作为整个项目的公共组件，不是首页独享**

2. 在pages/index/index.vue中引入Card组件 

   ​	**`<Card cardTitle='猜你喜欢'></Card>`**

3. Card组件是卡片完成效果为复用的文字 ===> **card组件中使用了匿名插槽（来作为标示）**

```vue
<template>
	<view class='card'>
		<view>-</view>
    
		<slot> ⚠️插槽
			<view class='card-name'>{{cardTitle}}</view>
		</slot>
    
		<view>-</view>
	</view>
</template>

<script>
export default {
	props:{
		cardTitle:String
	}
}
</script>
```

#### 6. 商品列表和单个商品组件封装

**1》多行文本溢出**

```css
	display: -webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2; 
	overflow: hidden;
	text-overflow:ellipsis;
```

​      word-break: break-all; ===> 不熟悉使用，查一查

**单行文本溢出**

```css
    overflow:hidden;   		 ===》溢出隐藏
	white-space: nowrap;     ===》文本不进行换行
	text-overflow: ellipsis; ===》文本溢出包含元素时发生的事情
```

**2》css设置删除线**

​     `text-decoration: line-through;`

**3》规定段落中的文本不进行换行：**

```css
p
  {
  white-space: nowrap
  }
```

**4》**

​		 CommodityList.vue 组件为：商品列表组件

​	 	Commodity.vue  组件为：单个商品组件

​        创建文件：在components/common中创建CommodityList.vue和Commodity.vue

​        CommodityList.vue组件中引入Commodity.vue，CommodityList.vue组件传入数据给Commodity.vue作为展示。



#### 7.热销爆品组件修改单个商品组件值

1. component/index下创建Hot.vue组件

2. pages/index/index.vue引入Hot.vue组件

3. **Hot组件内容为单个商品模块，引入了Commodity.vue组件**（封装）。传递参数调整图片宽度和高度，Hot组件代码如下：

   ```vue
   传值：
   <Commodity :dataList='hotList' itemW='250rpx' bigH='220rpx'></Commodity>
   
   接收值组件传递过来值：
   	<view class='commodity-item' 
   			v-for="(item,index) in dataList"
   			:key='index'
   			:style="'width:'+itemWidth+';'"｜:style="{width:itemWidth,逗号}" ⚠️两种写法
   		>
   			<image 
   			 class='commodity-img' 
   			 :src="item.imgUrl"
   			 mode=""
   			 :style="'height:'+itemHeight+';'" ｜ :style="{height:itemHeight,逗号}"⚠️两种写法
   			></image>
       
   <script>
   	props:{
   		dataList:Array,
   		itemW:{
   			type:String,
   			default:"375rpx"
   		},
   		bigH:{
   			type:String,
   			default:"375rpx"
   		}
   	}
    </script>
   ```

   

#### 8.`<scroll-view>滚动组件`

1》横向滚动：需要给scroll-view加宽

**scroll-view**需要加入宽**width:100%;white-space: nowrap;不换行**，其内容需要加入样式**display: inline-block;**===>就是让所有元素显示到`<scroll-view>`一行中，也可以给个大的子盒子包住，里面的子元素不换行

​	竖向滚动：需要给scroll-view加高

2》CSS white-space 属性：规定段落中的文本不进行换行：

```css
p{
  white-space: nowrap
}
```

3》隐藏scroll-view滚动条需要在App.vue中添加样式：添加到common.css中即可

```css
::-webkit-scrollbar {  
    display: none;  
    width: 0 !important;  
    height: 0 !important;  
    -webkit-appearance: none;  
    background: transparent;  
}
```



#### 9.隐藏滚动条配置

**1》隐藏全局滚动条**

​	  需要在pages.json的"app-plus"下设置一个属性，"scrollIndicator":"none"

​		app-plus:{

​			"scrollIndicator":"none" ===>滚动条显示策略，设置为 "none" 时不显示滚动条

​		}

​	

**2》隐藏scroll-view滚动条**

​	 需要在App.vue中添加样式：添加到common.css中即可

```css
::-webkit-scrollbar {  
    display: none;  
    width: 0 !important;  
    height: 0 !important;  
    -webkit-appearance: none;  
    background: transparent;  
}
```



#### 10.顶部滑块功能开发（***）

**1》第一步：实现点击跳转到相应的swiper区域｜滑动swiper区域顶部滑块滑动到相应位置**

```vue
1.2 顶部滑块数据：
topBar:[
					{name:'推荐'},
					{name:'运动户外'},
					{name:'服饰内衣'},
					{name:'鞋靴箱包'},
					{name:'美妆个护'},
					{name:'家居数码'},
					{name:'食品母婴'}
				]
			
			
      
1.3 顶部滑块样式布局：⚠️：scroll-view滚动
<scroll-view scroll-x="true" class='scroll-content'>
			<view
				class='scroll-item'
				v-for='(item,index) in topBar'
				:key='index'
				@tap='changeTab(index)'
			>
				<text :class='topBarIndex===index? "f-active-color":"f-color"'>{{item.name}}</text>
			</view>
</scroll-view>
		
		
		
1.4 内容滑动部分：⚠️：swiper
<swiper  @change='onChangeTab' :current="topBarIndex">
			<swiper-item 
				v-for='(item,index) in topBar'
				:key='index'
			>
				<view>{{item.name}}</view>
			</swiper-item>
</swiper>
		
		
		
1.5 方法定义点击滑动跳转：
changeTab(index){
  if(this.topBarIndex === index){
  	return ;
  }
  this.topBarIndex = index;
  },
onChangeTab(e){
	this.changeTab(e.detail.current);
}
```



**2》第二步：顶栏滑动跟随**

a> 顶部滑动跟随需要在scroll-view中添加scroll-into-view属性，其中代表滚动到哪个块中，匹配为子元素的id，也就是子元素需要加入id值，但是id值不可以为数字开头，那么代码如下：

```vue
<scroll-view :scroll-into-view='scrollIntoIndex'>

<view :id="'top'+index" > </view>

</scroll-view>
```

b> 在changeTab方法中写入this.scrollIntoIndex = 'top'+index;



##### **3》改变内容块高度**

由于swiper的默认高度为150rpx，所以要根据内容高度实现swiper不同的高度

**方法一：**使用getSystemInfo获取系统信息，这里要注意ios、安卓、各种小程序表现形式不一样（目前已经修复了）。swiper中的内容嵌套scroll-view滚动，要注意scroll-view也要给高度，可以给100%，也可给跟swiper一样的高度

```javascript
//onready代码如下:
uni.getSystemInfo({
  success: (res) => {
    this.clentHeight = res.windowHeight（可使用窗口高度） - uni.upx2px(80)顶部滑动栏的高度rpx转换成px-【this.getClientHeight();】⚠️目前已经修复了这个bug可以不用写兼容方法，但是兼容方法的思想要有
  }
})
//封装兼容方法
getClientHeight(){
  const res = uni.getSystemInfoSync();
  const system = res.platform;
  if( system ==='ios' ){
    return 44+res.statusBarHeight;
  }else if( system==='android' ){
    return 48+res.statusBarHeight;
  }else{
    return 0;
  }
}

⚠️：这里的兼容也可以写两套方法，使用下面这个区分
  <!-- #ifdef MP-WEIXIN -->

  <!-- #endif -->
```

**方法二：**获取swiper内容每个组件元素的高度值的合，然后赋值到内容块中（style=’height’），其实就是赋值给swiper，具体代码如下：特别注意需要在`onReady`中写入

```javascript
onReady(){ // 监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
      let view = uni.createSelectorQuery().select(".home-data");
           view.boundingClientRect(data => {
            this.clentHeight = data.height;
     }).exec();
}
```

```html
<swiper  @change='onChangeTab' :current="topBarIndex" :style="'height:'+clentHeight+'px;'">
  <swiper-item v-for='(item,index) in newTopBar':key='index'>
  <view class='home-data'> ⚠️：包裹所有组件
    <block v-for='(k,i) in item.data' :key='i'>
      <IndexSwiper v-if='k.type==="swiperList"' :dataList='k.data'></IndexSwiper>⚠️：组件一
			<template v-if='k.type==="recommendList"' >⚠️：组件二
  			<Recommend :dataList='k.data'></Recommend>
				<Card cardTitle='猜你喜欢'></Card>
			</template>
			<CommodityList v-if='k.type==="commodityList"' :dataList='k.data'></CommodityList>⚠️：组件三
		</block>
	</view>
	</swiper-item>
</swiper>
```



#### 11.`template`和`block`标签

uni-app官网解释：

`template`和`block`标签：

`	uni-app` 支持在 template 模板中嵌套 `<template/>` 和 `<block/>`，用来进行 [列表渲染](https://uniapp.dcloud.io/vue-basics?id=列表渲染) 和 [条件渲染](https://uniapp.dcloud.io/vue-basics?id=条件渲染)。

`	<template/>` 和 `<block/>` 并不是一个组件，它们仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。

`<block/>` 在不同的平台表现存在一定差异，推荐统一使用 `<template/>`。

百度一下：

​	1>  微信小程序 block 标签是不会被渲染出来的，block只接收控制属性： wx：if  || wx:for

​	2> 作用：它的作用就是充当一个容器，类似于 <view></view>

​	3> 例子：当我们使用 一个 判断条件  决定 是否显示或者隐藏  多个标签时，通常我们会在外部包裹一个容器，这样方便于我们进行判断，但是在外层的容器`<view>`标签就只是一个单纯的容器，没有其他作用，并且它会被渲染出来，消耗性能,而 block 则可以起到同样的作用，并且不会被渲染出来

#### 12.rpx转换成px

 uni.upx2px(要转换的的rpx数值)

 

#### 13.uni-app生命周期

​	页面的生命周期、组件的生命周期、应用的生命周期是不同的

​	页面的生命周期：

​								请求数据：onLoad(){}

​								等待dom层渲染完毕：onReady()

​    组件的生命周期:

​								请求数据：created(){}

​								等待dom层渲染完毕：mounted()

#### 14. Card卡片数据

​		uni-app中Card卡片数据渲染只能放到下边，放到上面就不会出来

```html
<template v-if="k.type=='recommendList'">
  <Recommend  :datalist='k.data'></Recommend>
  <Card cardTitle='猜你喜欢' ></Card> ⚠️：应该放到下边CommodityList组件上面，但是渲染不出来，所以放到上面与Recommend组件一起渲染，用template来绑在一起
</template>

<CommodityList v-if="k.type=='commodityList'" :datalist='k.data'></CommodityList>
```



#### 15.发送请求

看uni-app文档：

⚠️需要注意的是：success回调函数要写成箭头函数，不然this指向有问题

```javascript
uni.request({
  url: 'http://192.168.31.18:3000/api/index_list/data',
  success: (res) => {
  this.topBar = res.data.data.topBar;
  this.newTopBar = this.initData(res.data.data)
  }
})
```



#### 16.滑动不同板块展示不同数据

```javascript
//请求数据为：
addData(){
				//拿到索引
				let index = this.topBarIndex;
				//拿到id
				let id = this.topBar[index].id;
				//请求不同的数据
				uni.request({
					url:'http://192.168.8.6:3000/api/index_list/'+id+'/data/1',
					success: (res) => {
						let data = res.data.data;
						this.newTopBar[index].data= [...this.newTopBar[index].data,...data];
					}
				})
			}

```



#### 17.修正重复请求数据

1》 原有问题：只要滑动或者点击都会请求一次数据。

2》 修正逻辑：默认一个first值，滑动到某一个板块把当前的值修改成last,然后每次滑动都判断，如果值为first就加载数据，那么其实值为last了已经，所以就不重复请求数据了。

3》 具体解决方法代码如下：

```javascript
changeTab(index){
				//每一次滑动==》赋值first
				if( this.newTopBar[this.topBarIndex].load  ==='first'){
					this.addData();
				}
			},
addData(callback){
//当请求结束后，重新赋值
				this.newTopBar[index].load='last';
},
initData(res){
let obj = {
	data:[],
	load:"first"
}
}

```

#### 18.上拉加载更多数据

1》 给scroll-view添加触底事件

​		<scroll-view @scrolltolower='loadMore(index)'>

2》 template中添加滑动显示文字的容器

```html
<view class='load-text f-color'>
   {{item.loadText}}
</view>
```

3 》触底方法定义代码：

```javascript
loadMore(index){
    this.newTopBar[index].loadText = '加载中...';
    //请求完数据 ，文字提示信息又换成【上拉加载更多...】
    this.addData(()=>{ 	⚠️addData为请求函数，中间为回调函数
      	this.newTopBar[index].loadText = '上拉加载更多...';
    })
}
```

4 》加载不同数据的page算法代码：

​      `let page = Math.ceil(this.newTopBar[index].data.length / 5) + 1; `

#### 19.request封装

1》对于uni.request封装有利于后期的维护。

2》 在common目录中新建api目录，在api目录中新建request.js文件

```javascript
export default{
	common:{
		baseUrl:"http://192.168.8.6:3000/api",
		data:{},
		header:{
			"Content-Type":"application/json",
			"Content-Type":"application/x-www-form-urlencoded"
		},
		method:"GET",
		dataType:"json"
	},
	request( options={} ){
		
		uni.showLoading({
		    title: '加载中'
		});
		
		options.url = this.common.baseUrl + options.url;
		options.data = 	options.data || this.common.data;
		options.header = options.header || this.common.header;
		options.method = options.method || this.common.method;
		options.dataType = 	options.dataType || this.common.dataType;
		return new Promise((res,rej)=>{
			uni.request({
				...options,
				success: (result) => {
					if(result.statusCode != 200){
						return rej();
					}
					setTimeout(function () {
					    uni.hideLoading();
					}, 2000);⚠️：国际上一般都设置为2秒
					let data = result.data.data;
					res(data);
				}
			})
		})
	}
}

```

3》调用方式

```javascript
$http.request({
	url:'/index_list/'+id+'/data/'+page+''
}).then((res)=>{
	this.newTopBar[index].data = [...this.newTopBar[index].data,...res];
}).catch(()=>{
	uni.showToast({
		title:'请求失败',
		icon:'none'
	})
})

```



### 搜索页

#### 1. 点击首页标题栏放大镜跳转

1》监听原生标题栏按钮点击事件，参数为Object ===》uni-app页面生命周期

```javascript
onNavigationBarButtonTap : function (e) { 
	console.log(e);    // e的返回格式为json对象：{"text":"测试","index":0}
}
```

2》跳转代码

```javascript
onNavigationBarButtonTap(e){
  if(e.float=='left'){
    uni.navigateTo({
      url:'../search/search' ⚠️：页面跳转后面不要加vue加了就没有办法跳转了
    })
  }
},
```



#### 2.配置page.json搜索框和搜索按钮

在page.json的app-plus中的导航栏`titleNView`中配置`searchInput` `buttons`

```javascript
"searchInput": { // 原生导航栏搜索框配置
  "autoFocus": true,
  "align": "left",
  "placeholder": "nike",
  "borderRadius": "15px",
  "backgroundColor": "#F7F7F7",
  "placeholderColor": "#B3B3B3",
  "disabled": false
},
"buttons": [{
  "text": "搜索",
  "float": "right",
  "fontSize": "16px",
  "color":"#636263",
  "width":"60px"
  }]
}
```



#### 3.横线封装成组件

1>搜索框下面的横线因为多个页面中用到，所以封装成公共组件

2>⚠️：组件命名可能与uni-app的一些命名冲突===》导致组件不显示===》Line就与uni-app组件名字冲突



#### 4.【知识点】 监听标题栏搜索框事件=》页面生命周期

以下都是页面生命周期：

1》监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。

​	onNavigationBarSearchInputConfirmed

2》监听原生标题栏搜索输入框输入内容变化事件

​	onNavigationBarSearchInputChanged

3》监听原生标题栏搜索输入框点击事件

​	onNavigationBarSearchInputClicked

4》监听原生标题栏按钮点击事件

​	onNavigationBarButtonTap



#### 5.点击标题栏目搜索跳转搜索列表页｜隐藏软键盘｜搜索关键词判断｜点击软键盘搜索跳转

```javascript
	export default {
		data() {
			return {
				searchKey:''
			}
		},
		
		// ⚠️监听原生标题栏按钮点击事件
		onNavigationBarButtonTap(){
			this.search()
		},
		
		// ⚠️监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
		onNavigationBarSearchInputConfirmed(){
			this.search()
		},
		
		// ⚠️监听原生标题栏搜索输入框输入内容变化事件
		onNavigationBarSearchInputChanged(e){
			this.searchKey = e.text
		},

		methods: {
			search(){
				if(this.searchKey == ""){
					uni.showToast({  ⚠️：uni-app的提示弹框
						title:'搜索内容不能唯空',
						icon:"none"
					})
				}else{
					uni.navigateTo({⚠️：页面跳转事件，非tabBar的页面跳转
						url:'../search-list/search-list'
					})
          // ⚠️收起软键盘
					uni.hideKeyboard()
				}
			}
		}
```



#### 6.记录搜索词

1》利用本地存储，uni-app有自己的本地存储方法，文档地址：https://uniapp.dcloud.io/api/storage/storage?id=setstorage

```javascript
// 页面的生命周期
onLoad(){
// 获取本地存储
uni.getStorage({
		key:'searchData',
    success:(res)=>{
     this.searchData = JSON.parse(res.data) ⚠️：读取本地存储的数据要转换成对象
    }
	})
},
// 搜索过的词记录
addSearch(){
  if(this.searchData.indexOf(this.searchKey)>0){ ⚠️：indexOf查找有没有重复
	  this.searchData.splice(this.searchData.indexOf(this.searchKey),1)⚠️：splice删除重复的
  }
	this.searchData.unshift(this.searchKey)⚠️：unshift向数组中追加数据
// 设置本地存储
  uni.setStorage({ 
    key:'searchData',
    data:JSON.stringify(this.searchData) ⚠️：本地存储进去的是字符串
  })
}
```

2》清除搜索词===>删除本地存储

```javascript
		//清除搜索记录
		clearHistory(){
			uni.showModal({ ⚠️：uni-app的模态框
				title:"重要提示",
				content:'是否要清除搜索记录',
				cancelText:'取消',
				confirmText:"确定",
				success: (res) => {
					if(res.confirm){
						uni.removeStorage({⚠️：清除本地存储
							key:"searchData"
						})
						this.searchData=[];
					}
				}
			})
		}
```

#### 7.搜索词传值

1》通过路由传递搜索框的值

```javascript
				// 传值
				uni.navigateTo({
					url:'../search-list/search-list?searchKey='+this.searchKey+''
				})

				// 接收值
        onLoad(option){
          this.searchKey = option.searchKey   ⚠️//获取到路由传递的值
        }
```

2》修改search-list.vue导航栏搜索框的值===》利用： uni-app在App端动态修改原生导航栏 ===》文档地址：https://ask.dcloud.net.cn/article/35374

```javascript
		onLoad(option){
			⚠️// 1.获取到路由传递的值
			this.searchKey = option.searchKey
			
			⚠️// 2.uni-app在App端动态修改原生导航栏
          // #ifdef APP-PLUS
          var webView = this.$mp.page.$getAppWebview();  
          // 设置 searchInput的 text  
          webView.setTitleNViewSearchInputText(this.searchKey)  
          // #endif
		},
```



#### 8.搜索条件排序

1》搜索条件 升序asc：降序desc

```javascript
		computed:{
			orderBy(){
				//拿到当前对象
				let obj = this.shopList.data[this.shopList.currentIndex];
				let val = obj.status === "1" ? "asc" : "desc" ;
				return {
					[obj.key]:val
				}
			}
		},
      
  
```

2》在shopList.vue组件中发送请求===>组件的生命周期mounted(){}

```javascript
   //请求数据方法
			getData(){
				$http.request({
					url:"/goods/search",
					data:{
						name:this.keyword,
						...this.orderBy
					}
				}).then((res)=>{
					this.dataList = res;
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				})
			},
```



#### 	9.Any代表任何类型



#### 	10.后端

​	1》cnpm instll mysql安装数据库 ==〉在serve目录下

​	2》在server文件下新建db文件夹，再在db文件夹下新建sql.js 连接数据库

```javascript
sql.js
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root123',
  database : 'aolai'
});
module.exports = connection;
```

3》server下的router中的index.js引入数据库

```javascript
var connection = require('../db/sql.js');
```



### 分类页

#### 1.点击搜索框跳转

1》导航栏搜索框在在page.json中配置

2》监听原生标题栏搜索输入框点击事件===>实现跳转

```javascript
		// 监听原生标题栏搜索输入框点击事件
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url:'../search/search'
			})
		}
```

#### 2.`scroll-view`组件

竖向滚动需要给scroll-view加高，高为可视区域的高度===》uni.getSystemInfo获取

```vue
<!-- 左侧区域 -->
<scroll-view class='list-left' scroll-y="true" :style="{'height':clientHieght+'px'}">⚠️
  <view v-for="i in 50" class="left-item">
    <view>{{i}}</view>
  </view>
</scroll-view>

<!-- 右侧区域 -->
<scroll-view class='list-right'scroll-y="true" :style="{'height':clientHieght+'px'}">⚠️
  <view v-for="i in 50" class="right-item">
    <view>{{i}}</view>
  </view>
</scroll-view>


onReady(){
  uni.getSystemInfo({⚠️：uni.getSystemInfo获取
    success:(e)=>{
   	 this.clientHieght=e.windowHeight
    }
  })
},
```



#### 3.点击左侧导航栏右侧展示相应数据

点击左侧，将该数据的id传递过去，根据id判断右边展示数据













### 详情页

#### 1.滚动透明渐变导航栏

page.json中配置：app-plus=》titleNView=》"type":"transparent"，导航栏样式。"default"-默认样式；"transparent"-滚动透明渐变；"float"-悬浮导航栏。

```
		"app-plus": {
					"titleNView": {
						"type":"transparent",
						"buttons": [{
								"type": "menu"
							},
							{
								"type": "share"
							}
						]
					}

				}
```



#### 2.导航栏分享按钮｜菜单按钮

在page.json：

```javascript
      "style" : {
				"navigationBarTitleText": "商品详情",
				"app-plus":{
					"titleNView":{
						"type":"transparent",
						"buttons":[
							{
								"type":"menu" ⚠️：菜单按钮
							},
							{
								"type":"share"⚠️：分享按钮
							}
						]
					}
				}
			}
```



#### 3. 底部固定定位导致内容部分下边隐藏

给整个页面的view最大的盒子一个padding-botom



#### 4.uni-app动画

文档地址：https://uniapp.dcloud.io/api/ui/animation?id=animation

```vue
<!--底部弹出层-->
<view class="pop" v-show='isShow' @touchmove.stop.prevent=''>
  <!--蒙层-->
  <view class='pop-mask' @tap='hidePop'></view>
  <!--内容块-->
  <view class='pop-box' :animation="animationData"></view>
</view>
		
		
	data(){
		return{
			animationData: {},
		}
	}
  methods: {
			showPop() {
				// 创建动画实例
				var animation = uni.createAnimation({
					duration: 200
				})
				animation.translateY(600).step();
				this.animationData = animation.export();
				this.isShow = true;
				setTimeout(() => {
					animation.translateY(0).step();
					this.animationData = animation.export();
				}, 200)
			},
			hidePop() {
				// 创建动画实例
				var animation = uni.createAnimation({
					duration: 200
				})
				animation.translateY(600).step();
				this.animationData = animation.export();
				this.isShow = true;
				setTimeout(() => {
					animation.translateY(0).step();
					this.isShow = false;
				}, 200)
			}
		}
```



#### 5.解决bug

##### 		1》蒙层出现后后面内容区块还能滑动

​				在蒙层上添加阻止默认行为 @touchmove.stop.prevent=''

##### 		2》蒙层出现后点击返回按钮还能返回

​				a>页面生命周期：onBackPress

​				onBackPress监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack表示来源是 uni.navigateBack ；详细说明及使用：[onBackPress 详解](http://ask.dcloud.net.cn/article/35120)。支付宝小程序只有真机能触发，只能监听非navigateBack引起的返回，不可阻止默认行为。

​				b>解决方法：处理返回逻辑，在 onBackPress 中，判定当前遮罩是否处于显示状态。如果显示，则关闭遮罩并返回 true。

```javascript
	onBackPress(){
			if(this.isShow){
				this.isShow = false;
				return true
			}
		},
```



#### 6.加减数量使用uni的组件uni-number-box

1》通过创建hello uni-app项目，把components中的uni-number-box组件拿过来，放到当前项目的conponents中uni文件夹===》页面引入组件

2》bug：点击加号或减号，蒙层后面的页面滚动

​		原因：在uni-number-box.vue中加减点击时间的默认行为

​		解决方法：给加减点击啊时间中加上阻止默认行为

```vue
<view @click.stop.prevent="_calcValue('minus')" class="uni-numbox__minus uni-cursor-point">
<view @click.stop.prevent="_calcValue('plus')" class="uni-numbox__plus uni-cursor-point" >
```



#### 7. 分享

1》通过任何一个地方点击url都能显示正常的数据 ===》做跨域，

​	方式一：前端修正代理

​	方式二：后端来做===》一般项目中后端来做===》express设置允许跨域访问

```javascript
在server=》router=》index.js下设置：

router.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
```

2》在项目上线之前要在manifest.json进行App SDK配置，进行分享配置

3》uni-app===>API===>第三方服务：分享uni.share

```javascript
//监听原生标题栏按钮点击事件，参数为Object
onNavigationBarButtonTap(e){
  if(e.type == 'share'){
    uni.share({
      provider:'weixin',⚠️：必填
      "type":0,
      title:this.goodsContent.name,
      scene:'WXSceneSession',
      href:'http://172.20.10.3:8080/#/pages/details/details?id='+this.goodsContent.id+'',
      imgUrl:this.goodsContent.imgUrl,
      success:()=>{
        uni.showTabBar({
          title:"分享成功"
        })
      },
      fail: function (err) {
        console.log("fail:" + JSON.stringify(err));
      }
    })
  }
},
```



### 购物车

#### 1.顶部自定义导航栏

1》在page.json中配置自定义导航：**将app-plus中的"titleNView"设置false,或者将style中navigationStyle设为custom**

```javascript
		{
			"path": "pages/shopcart/shopcart",
			"style": {
				"app-plus":{
					// 自定义导航
					"titleNView":false,
					// 取消滚动条
					"scrollIndicator":"none"
				}
			}
		},
```

2》使用uni-nav-bar组件

​		在hello uni-app中的components中找到uni-nav-bar组件复制粘贴，注意同时还要引入uni-nav-bar所引入的组件uni-status-bar、uni-icons ===》在购物车页面中使用===》官网上有使用方法：地址：https://ext.dcloud.net.cn/plugin?id=52

```html
		<!--自定义导航栏-->
		<uniNavBar 
               title='购物车' 
               :rightText='isNavBar ? "完成" : "编辑"' 
               statusBar='true' 
               fixed='true' 
               @clickRight=' isNavBar= !isNavBar'>
		</uniNavBar>

    data(){
      return{
        isNavBar:false
      }
    }
```

#### 2.使用vuex管理状态购物车

新建store 

​					index.js

​					modules 

​									cart.js

在main.js中引入store



#### 3.购物车无状态判断

​	template包裹判断如果vuex中的list的length>0有数据，否则无数据



#### 4.全选或者全不选

1》两个数组，一个承载数据的数组list，一个空数组selectedList，全选就把list数据的每一项id存储到selectedList中，根据selecteList长度是否与list长度相等判断是否全选，全选：把list里面的id都给selectList，不全选：把selectedList清空

store=》modules=》cart.js：

```javascript
export default {
	state: {
		list: [{
				checked: false,
				id: 1,
				name: "打客服的和非恶搞认为微软业务打客服的和非恶搞认为微软业务",
				color: "颜色：返回对方的过分的",
				imgUrl: "../../static/img/Children2.jpg",
				pprice: "27",
				num: 1
			},
			{
				checked: false,
				id: 2,
				name: "打客服的和非恶搞认为微软业务打客服的和非恶搞认为微软业务",
				color: "颜色：返回对方的过分的",
				imgUrl: "../../static/img/Children2.jpg",
				pprice: "27",
				num: 1
			}
		],
		selectedList:[]
	},
	getters:{
		//判断是否  全选
		checkedAll(state){
			return state.list.length === state.selectedList.length
		}
	},
	mutations:{
		//全选
		checkAll(state){
			state.selectedList = state.list.map(v=>{
				v.checked = true;
				return v.id
			})
		},
		//全不选
		unCheckAll(state){
			state.list.forEach(v=>{
				v.checked = false
			})
			state.selectedList = []
		}
	},
	actions:{
		checkedAllFn({commit,getters}){
			getters.checkedAll ? commit("unCheckAll") : commit("checkAll")
		}
	}
}

```

在购物车页面：shopCart.vue

```html
全选按钮：
<label class="radio foot-radio" @tap='checkedAllFn'>
	<radio value="" color='#FF3333' :checked="checkedAll" /><text>全选</text>
</label>

单选按钮：
<label class="radio">
	<radio value="" color="#FF3333" :checked="item.checked"/><text></text>
</label>

```

```javascript
	import {mapState,mapActions,mapGetters} from 'vuex'
	export default {
		computed: {
			...mapState({
				list: state => state.cart.list
			}),
			...mapGetters(['checkedAll'])
		},
		methods:{
			...mapActions(['checkedAllFn'])
		}
	}
```



#### 5.单选功能

把当前点击的商品id与selectedList中的值做对比，如果selectedList已经存在就代表他之前是选中状态, checked=false,并且在selectedList删除，如果之前没有选中,checked=true , 把当前的id添加到selectedList

store=》modules=》cart.js：

```javascript
		mutations:{
      // 单选
      selectedItem(state,index){
        let id = state.list[index].id
        let i = state.selectedList.indexOf(id)
        //如果selectedList已经存在就代表他之前是选中状态, checked=false,并且在selectedList删除
         if(i > -1){
           state.list[index].checked = false
           // 之前选中了删除
           return state.selectedList.splice(i,1)
         }
         //如果之前没有选中,checked=true , 把当前的id添加到selectedList
         state.list[index].checked = true
         state.selectedList.push(id)
      }
		}
```

购物车页面：

```html
<label class="radio" @tap='selectedItem(index)'>
	<radio value="" color="#FF3333" :checked="item.checked"/><text></text>
</label>
```

```javascript
	import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
	export default{
			methods:{
			...mapActions(['checkedAllFn']),
			...mapMutations(['selectedItem'])
		}
	}
```

#### 6.合计和结算数量

根据selectedList数组中的id在对应的list中查找

store=》modules=》cart.js：

```javascript
	getters:{
		//合计+结算数量
		totalCount(state){
			let total = {
				pprice:0,
				num:0
			}
			state.list.forEach(v=>{
				//是否选中
				if(state.selectedList.indexOf(v.id) > -1){
					//合计
					total.pprice += v.pprice*v.num;
					//结算数量
					total.num = state.selectedList.length;
				}
			})
			return total;
		}
	},
```

购物车页面：

```html
<view class='foot-total'>
  <view class='foot-count'>合计：<text class='f-active-color'>¥{{totalCount.pprice}}</text></view>
  <view class='foot-num'>结算({{totalCount.num}})</view>
</view>
```



#### 7.编辑完成和数量功能

1》点击编辑数量会变成数量加减框=》引入uni-number-box组件 =》value值代表数量加减框的值=》change输入框值改变时触发的事件,参数为输入框当前的 value，记住如果有两个参数第一个参数一定要写$event

```html
							<template v-if='!isNavBar'>
								<view>*{{item.num}}</view>
							</template>
							
							<template v-else>
								<uniNumberBox 
									:value='item.num'
									:min="1"
									@change='changeNumber($event,index)'
								>
								</uniNumberBox>
							</template>

```

```javascript
			changeNumber(value,index){
				this.list[index].num = value
			}
```



#### 8.商品删除功能

1》定义在vuex中

2》store=》modules=》cart.js：

```javascript
//mutationsa中：
		//删除
		delGoods(state){
			state.list = state.list.filter(v=>{
				return state.selectedList.indexOf(v.id) == -1
			})
		}
		
///actions中：
		// 提交删除
		delGoodsFn({commit}){
      
			commit('unCheckAll');
			commit('delGoods')
      
			uni.showToast({
				title:'删除成功',
				icon:"none"
			})
		}
```

购物车页面：

```html
	<view class='foot-num' @tap='delGoodsFn'>删除</view>
```



#### 9.加入购物车

从详情页点击商品添加至购物车





### 我的页面

### 我的地址

#### 1.新建页面

my-config 设置页面

​					my-config.vue

my-path-list 地址列表

​					my-path-list.vue

my-add-path 新增地址｜修改地址 ===》共用一个页面

​					my-add-path.vue



#### 2.选择地址三级联动

1> 使用的组件名：mpvue-picker  中的 mpvue-citypicker

​	  地址： mpvue-picker :https://ext.dcloud.net.cn/plugin?id=115. 

​		  	      mpvue-citypicker: https://github.com/MPComponent/mpvue-citypicker

​	   在hello uni-app中引入：mpvue-citypicker组件

2> my-add-path.vue页面代码如下：

```vue
<template>
		<view class='path-item'>
			<view>所在地址</view>
			<view @tap='showCityPicker'>{{cityName}} > </view>
			<mpvueCityPicker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault" @onConfirm="onConfirm">
			</mpvueCityPicker>
		</view>
</template>
		
<script>
		import mpvueCityPicker from '../../components/uni/mpvue-citypicker/mpvueCityPicker.vue'
  		data() {
			return {
				cityName: "请选择",
				pickerValueDefault: [0, 0, 1]
			}
		},
		components: {
			mpvueCityPicker
		},
		methods: {
			showCityPicker() {
				this.$refs.mpvueCityPicker.show();
			},
			//citypicker 组件点击确定时回调
			onConfirm(e) {
				this.cityName = e.label
			},
			// 点击弹出三级联动
			showCityPicker() {
				this.$refs.mpvueCityPicker.show();
			}
		}
</script>
```



#### 3.新增地址

1》新增地址要unshift到vuex中

modules =》path.js仓库：

```javascript
export default {
	state:{
		list:[
			{
				name:"张三",
				tel:"18511773322",
				city:"北京市海淀区",
				details:'2号楼',
				isDefault:false
			},
			{
				name:"李四",
				tel:"18511773322",
				city:"北京市海淀区",
				details:'2号楼',
				isDefault:true
			}
		]
	},
	mutations:{
		createPath(state,obj){
			state.list.unshift(obj)
		}
	},
	actions:{
		createPathFn({commit},obj){
			commit('createPath',obj)
		}
	}
}
```

2》点击保存返回

```javascript
// 返回上一页
uni.navigateBack({
  delta:1
})
```

3》my-path-list.vue地址列表页的数据是从vuex中获取过来的



#### 4.修改地址

1》点击地址列表某一条地址，跳转到my-add-path.vue

⚠️：路径传值一定要转换成字符串

```javascript
my-path-list.vue：

			//修改地址
			toAddPath(index){
				
				let pathObj = JSON.stringify({⚠️：路径传值一定要转换成字符串
					index:index,
					item:this.list[index]
				})
				
				uni.navigateTo({
					url: "../my-add-path/my-add-path?data="+pathObj+""
				})
			
			}
```

2》my-add-path.vue页面判读是否接受到了onload(){}值，有值，是修改地址，没有值是新增地址 ===》**修改导航栏标题uni.setNavigationBarTitle({title:'修改地址'})**

```javascript
		onLoad(e) {
			if (e.data) {
				uni.setNavigationBarTitle({⚠️：修改导航栏标题
					title: '修改地址'
				});
				let result = JSON.parse(e.data);
				this.pathObj = result.item;
				this.i = result.index
				this.isStatus = true;
			}
		},
```

3》点击保存判断是修改地址还是新增地址

```javascript
	// 导航栏按钮点击保存生命周期
	onNavigationBarButtonTap() {
		// 修改地址
		if (this.isStatus) {
			// 向vuex中修改数据
			this.updatePathFn({
				index: this.i,
				item: this.pathObj
			})
			// 返回上一页
			uni.navigateBack({
				delta: 1
			})
		} else {
			// 新增地址
			this.createPathFn(this.pathObj)
			// 返回上一页
			uni.navigateBack({
				delta: 1
			})
		}
	},
```

4》修改vuex中的数据

```javascript
	mutations:{
		// 新增路径
		createPath(state,obj){
			state.list.unshift(obj)
		},
		// 修改路径
		updatePath(state,{index,item}){
			for( let k in item){
				state.list[index][k] = item[k]
			}
		}
	},
	actions:{
		// 新增路径
		createPathFn({commit},obj){
			commit('createPath',obj)
		},
		// 修改路径
		updatePathFn({commit},obj){
			commit('updatePath',obj)
		},
	}
```

#### 5.默认地址选择

1》在vuex新增清空所有默认地址为false的方法，在点击保存修改地址和新增地址的时候做判断，如果当前操作设置了默认地址，就调用清空方法

```javascript
mutations: {
		// 清空之前的默认地址
		removePath(state) {
			state.list.forEach(v => {
				if (v.isDefault) {
					v.isDefault = false
				}
			})
		}
	},
	actions: {
		// 新增路径
		createPathFn({commit}, obj) {
			if (obj.isDefault) {
				commit('removePath')
			}
			commit('createPath', obj)
		},
		// 修改路径
		updatePathFn({commit}, obj) {
			if (obj.item.isDefault) {
				commit('removePath')
			}
			commit('updatePath', obj)
		},
	}
```

2》修改单选按钮checked的值===〉利用radio-group的change事件

```html
<radio-group name="" @change="radioChange">
  <label class="radio">
    <radio color="#FF3333" :checked="pathObj.isDefault"/><text></text>
  </label>
</radio-group>
```

```javascript
	methods: {
		radioChange(){
			this.pathObj.isDefault = !this.pathObj.isDefault;
		}
	}
```

### 我的订单

1》把单个订单中的商品信息可以封装成一个组件

​		componets 

​							order

​										order-list.vue

### 确认订单

1》点击购物车页面的结算跳转至确认订单页面confirm-order.vue

2》进入确认订单页面从vuex中拿到默认地址数据，如果没有默认地址显示请选择地址

3》点击地址跳转到地址列表页==》传递一个值给地址列表页作为区分是修改地址还是选择地址

4》点击地址列表页地址，返回该地址作为收货地址

vuex中：path.js

```javascript
	getters:{
    // 返回默认地址
		defaultPath(state){
			return state.list.filter(v=>v.isDefault)
		}
	},
```

confirm-order.vue:

```html
		<!--地址-->
		<view class='order-map' @tap='goPathList'>
			<template v-if='path'>
				<view class='map-title'>
					<view class='map-name'>收件人：{{path.name}}</view>
					<view>{{path.tel}}</view>
				</view>
				<view class='map-city'>收货地址：{{path.city}} {{path.details}}</view>
			</template>
			<template v-else>
				<view class='map-title'>
					<view class='map-name'>请选择地址</view>
				</view>
			</template>
		</view>
```

```javascript
	export default {
		data() {
			return {
				path: false
			}
		},

		onLoad() {
			this.path = this.defaultPath[0]
			// 接收自定义事件传递的参数
			uni.$on('selectPathItem',(data)=>{⚠️：uni.$on
				this.path = data.item
			})
		},
		onUnlodad(){
			// 移除自定义事件监听器
			uni.$off('selectPathItem',()=>{)⚠️：uni.$off$emit
				console.log('移除了selectPathItem');
			})
		},
		computed: {
			...mapGetters(['defaultPath'])
		},
		methods: {
			//跳转到地址管理页面
			goPathList() {
				uni.navigateTo({
					url: '../my-path-list/my-path-list?type=selectedPath'
				})
			}
		}
	}
```

地址列表页：my-path-list.vue

```vue

<view v-for='(item,index) in list' :key='index' @tap='toAddPath(index)'>
  <view class='path-item' @tap='goConfirmOrder(item)'>	
    <view class='item-main'>
      <view class='item-name'>{{item.name}}</view>
      <view>{{item.tel}}</view>
    </view>
    <view class='item-main'>
      <view class='active' v-if='item.isDefault'>默认</view>
      <view>{{item.city}} {{item.details}}</view>
    </view>
  </view>
</view>


<script>
  onLoad(e){
    // 接收确认订单页点击地址传递的参数
    if(e.type==='selectedPath'){
      this.isSelectedPath = true
    }
  },
    methods:{
      goConfirmOrder(item){
        // 自定义事件传值
        uni.$emit('selectPathItem',{item})⚠️：uni.$emit
        if(this.isSelectedPath){
          // 返回上一页
          uni.navigateBack({
            delta:1
          })
          this.isSelectedPath = false;
        }
      }
    }
</script>
```



#### 2.uni-app页面通讯(传值)

文档地址：https://uniapp.dcloud.io/api/window/communication

uni.$emit:触发全局的自定义事件，附加参数都会传给监听器回调函数。

uni.$on：监听全局的自定义事件，事件由 `uni.$emit` 触发，回调函数会接收事件触发函数的传入参数。

uni.$off：移除全局自定义事件监听器。

```javascript
		//接收
		onLoad() {
			// 接收自定义事件传递的参数
			uni.$on('selectPathItem',(data)=>{⚠️：uni.$on
				this.path = data.item
			})
		},
      
     
    // 移除
		onUnlodad(){
			// 移除自定义事件监听器
			uni.$off('selectPathItem',()=>{)⚠️：uni.$off$emit
				console.log('移除了selectPathItem');
			})
		},
      
      
      
   //  另一个页面传递：
   methods:{
      goConfirmOrder(item){
        // 自定义事件传值
        uni.$emit('selectPathItem',{item})⚠️：uni.$emit
        if(this.isSelectedPath){
          // 返回上一页
          uni.navigateBack({
            delta:1
          })
          this.isSelectedPath = false;
        }
      }
    }
```



### 确认支付

#### 1.自定义导航栏

像购物车页面头部一样

1》配置page.json：

```javascript
"app-plus": {
  // 自定义导航
  "titleNView": false,
  // 取消滚动条
  "scrollIndicator": "none"
}
```

2》引入uni-nav-bar组件

```html
		<!-- 自定义导航栏 -->
		<uniNavBar 
					title='确认支付' 
					left-text='关闭' 
					fixed="true" 
					statusBar="true" 
					@clickLeft='goBack'
		>

		</uniNavBar>
```

#### 2.单选按钮扩大点击范围

```html
<label for=""> ⚠️：嵌套label
  <view class="pay-item">
    <image class='pay-img' src="../../static/img/wxf.png" mode=""></image>
    <view>
      <view>微信支付</view>
      <view class='pay-txt'>推荐微信用户使用</view>
    </view>
    <label class="radio">⚠️：单选按钮
      <radio value="" color='#FF3333'/><text></text>
    </label>
  </view>
</label>
```

### 登录注册

#### 1.登录注册页面布局

​		swiper上下滑动选择登录还是注册

​		把其他方式登录封装成组件components  login	login-other.vue

#### 2.账号密码登录表单验证

```javascript
<script>
	export default {
		data() {
			return {
				//用户输入的内容
				userName:"",
				userPwd:"",
				//验证的规格
				rules:{
					userName:{
						rule:/\S/,
						msg:"账号不能为空"
					},
					userPwd:{
						rule:/^[0-9a-zA-z]{6,16}$/,
						msg:"密码应该为6-16位字符"
					}
				}
			}
		},
		methods: {
			//点击登录
			submit(){
				if(  !this.validate('userName')  ) return;
				if(  !this.validate("userPwd") )   return;
				
				uni.showLoading({ ⚠️加载中的动画
					title:"登录中..."
				})
				
				setTimeout(()=>{⚠️：定时器2秒后关闭
					uni.hideLoading();⚠️：关闭加载中的动画
					uni.navigateBack({⚠️：返回上一页
						delta:1
					})
				},2000)
				
			},
			//⚠️判断验证是否符合要求
			validate(key){ 
				let bool = true;
				if(  !this.rules[key].rule.test(this[key]) ){
					uni.showToast({
						title:this.rules[key].msg,
						icon:"none"
					})
					bool=false;
					return false;
				}
				return bool;
			}
		}
	}
</script>
```

#### 3.输入手机号页面

1》进入login-tel.vue页面，手机号input输入框自动定位focus='true'，input类型number，出现数字9宫格

​	⚠️：uni-app中的input与原生中的有很多不一样，uni-app中以文档为准

```html
<input type="number" focus='true'⚠️：自动定位 v-model="userTel" value="" placeholder="请输入11位手机号" />
```

2》点击下一步表单验证手机号码

```javascript
		data() {
			return {
				userTel:'',
				rules:{
					'userTel':{
						rule:/^1[3456789]\d{9}$/,
						msg:"请输入11位手机号"
					}
				}
			}
		},
		
			// 点击下一步
			goNextCode(){
				if(!this.validate('userTel')) return;
			},
        
			//判断验证是否符合要求
			validate(key){
				let bool = true;
				if(!this.rules[key].rule.text(this[key])){
					uni.showToast({
						title:this.rules[key].msg,
						icon:"none"
					})
					return false
				}
				return bool
			}
		}
```



#### 4.短信验证码倒计时按钮

1》button使用的是uni-app button组件

```html
<button plain='true' size='mini' :disabled="disabled" @tap='sendCode'>{{codeMsg}}</button>
```

2》倒计时代码：使用定时器

```javascript
data() {
  return {
    //显示到文本
    codeMsg:"",
    //按钮是否禁用
    disabled:true,
    //倒计时到时间
    codeNum:10,
  }
},
onReady(){
  this.sendCode()
},
methods: {
    //点击验证码发送
    sendCode() {
      this.disabled = true;
      let timer = setInterval(()=>{
        this.codeNum--;
        this.codeMsg = '重新发送('+this.codeNum+')'
        if(this.codeNum<=0){
          this.disabled = false;
          this.codeMsg='重新发送';
          this.codeNum =10;
          clearInterval(timer)
        }
      },1000)
    },
}
```



### --------以下内容与后端连接-------

### 账号密码登录

#### 1.登录前端后端功能

​		=》login.vue页面点击登录发送用户名和密码请求

```javascript
			// 点击登录
			submit() {
				if (!this.validate("userName")) return
				if (!this.validate("userPwd")) return
				uni.showLoading({
					title: '加载中...',
				})

				$http.request({
					url: "/login",
					method: "POST",
					data: {
						userName: this.userName,
						userPwd: this.userPwd
					}
				}).then((res) => {
					// 将用户信息存储到vuex中
					this.login(res.data.data)
					
					uni.showToast({
						title: res.data.data.msg,
						icon: "none"
					})

					uni.hideLoading();
					
					uni.navigateBack({
						delta: 1
					})

				}).catch(() => {
					uni.showToast({
						title: '请求失败',
						icon: 'none'
					})
				})
			},
```

#### 2.存储用户信息

​		=》登录成功将用户信息保存到vuex中的modules-user.js库

#### 3.用户信息持久化存储

​		1》my.vue页面判断显示用户头像名称===》本地存储用户信息

​		2》一打开项目，获取本地存储的用户信息===〉在app.vue中配置

```javascript
//在app.vue中配置

onLaunch: function() {
		this.$store.commit('initUser')
		console.log('App Launch')
	},
```

```javascript
//vuex中的modules-user.js:

export default {
	state: {
		//登录状态
		loginStatus:false,
		//token
		token:null,
		//用户信息(昵称/头像)
		userInfo:{}
	},
	getters: {
	
	},
	mutations: {
		//一旦进入了app,就需要执行这个方法,把用户信息读出来
		initUser(state){
			let userInfo = uni.getStorageSync('userInfo');
			if( userInfo ){
				userInfo = JSON.parse( userInfo );
				state.userInfo = userInfo;
				state.loginStatus = true;
				state.token = userInfo.token;
			}
		},
		//登录后保存用户信息
		login(state,userInfo){
			state.userInfo = userInfo;
			state.loginStatus = true;
			state.token = userInfo.token;
			//持久化存储 ===>把对象转换成字符串
			uni.setStorageSync('userInfo',JSON.stringify(userInfo));
		},
		//退出登录
		loginOut(state){
			state.loginStatus = false;
			state.userInfo = {};
			state.token = null;
			//删除本地存储的信息
			uni.removeStorageSync('userInfo');
		}
	},
	actions: {

	}
}

```

#### 4.退出登录

​		===》清除本地存储用户信息

```javascript
			// 退出登录
			outLogin(){
				uni.showToast({
					title:"退出成功",
					icon:"none"
				})
				this.loginOut();
				uni.switchTab({
					url:"../index/index"
				})
			}
```



### Tabbar事件拦截

⚠️**：Tabbar事件拦截是进入页面之前看有没有登录，相当于路由拦截，注意与token值判断登录的区别**

进入到购物车，我的页面先判断用户有没有登录，没有登录先登录

#### 1.自定义Tabbar

​	1》uni-app中tabber组件是不能做事件拦截的，必须要自己自定义tabber组件做事件拦截，

​		componetns===》common===》将Tabbar封装成全局公共组件

​	2》**uni.navgiateTo**保留当前页跳转到某个页面，所以tabber的跳转不能用uni.navgiateTo，tabbar一级页面不能返回，如果用了，进入到tabber的页面左上角就有一个返回箭头===》需要用到**uni.redirectTo**关闭当前页，进入到某个页面

​	3》在退出登录这里用===》**uni.reLaunch()**关闭所有页面，打开到应用内的某个页面===》不然跳转到首页有返回箭头，不能用uni.redirectTo因为只关闭了当前页面，我的页面还没关闭

```javascript
			// 退出登录
			outLogin(){
				uni.showToast({
					title:"退出成功",
					icon:"none"
				})
				this.loginOut();
				// 关闭所有页面跳转
				uni.reLaunch({
					url:"../index/index"
				})
			}
```



#### 2.Tabbar事件拦截

1》设置权限跳转==>全局main.js中

```javascript
// 权限跳转
Vue.prototype.navigateTo = (options)=>{
	if( !store.state.user.loginStatus ){
		uni.showToast({
			title:"请先登录",
			icon:"none"
		})
		return	uni.navigateTo({
				url:"/pages/login/login"
			})
	}
	uni.navigateTo(options)
}
```

2》tabbar跳转到我的页面、购物车页面进行登录权限拦截

```javascript
		navigatorTo(e){
			if(  e==='shopcart'  ||  e==='my' ){
				this.navigateTo({
          // 如果点击的是购物车和我的页面需要做登录拦截
					url:`../../pages/${e}/${e}`,
					animationType:"fade-in",
					animationDuration:0
				})
			}else{
				uni.redirectTo({
					url:`../../pages/${e}/${e}`
				})
			}
		}
```



### 手机号注册

#### 1》接入短信验证码的SDK

​		1.腾讯云对接手机验证码（SDK）

​			老张用的 腾讯云=》短信=》SDK =》使用方法看腾讯云的SDK文档:https://github.com/qcloudsms/qcloudsms_js

​			下载：npm install qcloudsms_js

​			引入：var QcloudSms = require("qcloudsms_js");

​			配置：	要设置appid、appKey、短信签名、短信模版、需要发送的手机号、群发短信还是单发短信、国际短信韩式国内短信、发送的验证 [vue笔记.md](vue笔记.md) 码格式	



**2》注册逻辑**

输入手机号发送请求===〉验证该手机号码是否注册过===》注册过提示，没有注册过跳转到发送短信验证码页面，发送短信验证码，并将手机号发送给后端===〉后端返回验证码，判断是否与用户输入一致（实质上后端验证）===》一致将用户的手机号码和验证码发给后端，向数据库中新增用户，不一致提示用户验证码不正确===〉注册成功后保存用户信息到vuex中

⚠️：真实的项目中前端是拿不到验证码的，后端会验证对不对，返回前端结果





### token

1.后端生成

2.避开同源策略

3.避免一些攻击

4.token是无状态在多个服务间共享（eg：可以在各种各样的终端共享它）

5.token是存储到后端服务器里面的，是一个永久身份令牌

6.token也可以加密和解密

7.也可以设置有效期

8.token一般是用户id+时间戳+口令组成

#### 1.前端token值的使用

⚠️**token是发送请求的时候设置header头，告诉后端是那个用户进行的操作**

加入购物车发送请求设置`header:{token:true}`

二次封装的request.js中：

```javascript
	import store from '@/store/index.js'

	//⚠️判断是否传入了header头的token进行用户是否登录的验证
	if (options.header.token) {
		options.header.token = store.state.user.token; ⚠️：有token值
		if (!options.header.token) {⚠️：没有token值
			uni.showToast({
				title: "请先登录",
				icon: "none"
			})
			return uni.navigateTo({
				url: "/pages/login/login"
			})
		}
	}
```

#### 2.token后端生成

​	**在新增用户时候就生成token**

​	 下载：后端下载 npm install jsonwebtoken

​	 引入： let jwt = require('jsonwebtoken');   

​	 配置:

```javascript
        let userName = option.userName;
        //用户信息
        let payload = {name:userName};
        //口令==》品牌
        let secret = 'xiaoluxian';
        let token = jwt.sign(payload, secret,{ expiresIn: '1day' });
```



### 快捷登录

1.用户采用第三方登录数据也要存储到数据库中

前端：

​			1.点击哪一个快捷登录方法

​			2.需要给后端传递数据

后端：

​			1.新增接口

​			2.新增字段

【面试会问】

​			你如何与后端配合的？

​			例如：在做快捷登录的时候，后端认为没有必要的参数前端传递了很多，前端认为需要传递的参数后端认为不需要，这时候需要沟通	



2. 最重要的是openid，需要存到数据库中的，确定唯一身份

3. 前端

   使用的是uni-app封装好的第三方服务=》登录uni-login、uni-getUserInfor			

   前端获取到用户点击的哪一个快捷登录方法uni-login（qq、微信、微博），获取到该快捷登录的用户信息uni-getUserInfor（头像、名称、最重要的openid、登录的服务商）传递给后端，后端查询是否该用户登录过，没有新增用户信息，返回该用户token和信息给前端，登录过，查询信息返回该用户token和信息给前端。前端拿到信息后存储到vuex中

```vue
<template>
	<view class='login-other'>
		<view class='other-text'>
			<view>或者用以下方式登录</view>
		</view>
		<view class='other'>
			<view class='other-item' @tap='loginOther("weixin")'>
				<image src="../../static/img/wx.png" mode=""></image>
				<view>微信登录</view>
			</view>
			<view class='other-item' @tap='loginOther("sinaweibo")'>
				<image src="../../static/img/wx.png" mode=""></image>
				<view>微博登录</view>
			</view>
			<view class='other-item' @tap='loginOther("qq")'>
				<image src="../../static/img/wx.png" mode=""></image>
				<view>QQ登录</view>
			</view>
		</view>
	</view>
</template>

<script>
	import $http from '@/common/api/request.js'
	import {mapMutations}  from 'vuex'
	export default {
		methods: {
			...mapMutations(['login']),
			loginOther(mode) {
				//⚠️登录
				uni.login({
					provider:mode,
					success: (res) => {
						//⚠️最主要的就是openid
						let openid = res.authResult.openid || res.authResult.expires_in || res.authResult.uid;
						//⚠️ 获取用户信息
						uni.getUserInfo({
							provider:mode,
							success:(res)=>{
								let provider = mode;
								let openid = res.userInfo.openId 
								let nickName = res.userInfo.nickName
								let avatarUrl = res.userInfo.avatarUrl
								// ⚠️发送请求=》向后端传递用户信息打开的第三方登录方、openid用户身份id、姓名头像
								$http.request({
									url:"/loginother",
									method:"POST",
									data:{
										provider,
										openid,
										nickName,
										avatarUrl,
									}
								}).then((res)=>{
									//⚠️保存用户信息
									this.login(res.data.data)
									uni.navigateBack({
										delta:1
									})
								}).catch(()=>{
									uni.showToast({
										title:'请求失败',
										icon:'none'
									})
								})
							}
						})
					}
				})
			}
		}
	}
</script>
```





### 地址管理

#### 1.查询地址

​	前端：地址列表页发送请求传递token给后端=》接收到后端传递的地址信息，保存到vuex中

​	后端：解码token，得到用户id，查询数据库用户id的地址信息返回给前端

#### 2.新增地址

​	前端：传递token，传递新增的地址信息，请求成功后将地址信息新增到vuex中

​	后端：解码token，接收地址信息，新增地址

​	计算属性调整三级联动：有数据显示地址，没有显示请选择

​	三级联动选择数据重构：去除"-":

```javascript
		computed:{
			pathCity(){
				if(this.pathObj.province){
					return this.pathObj.province + '-' + this.pathObj.city + '-' + this.pathObj.district
				}else{
					return '请选择'
				}
			}
		},
      
    
     methods: {
			...mapActions(["createPathFn"]),
			//citypicker 组件点击三级联动确定时回调
			onConfirm(e) {
				let arr = e.label.split('-');
				this.pathObj.province=arr[0] 	// 省
				this.pathObj.city=arr[1] 	// 市
				this.pathObj.district=arr[2] //	区
			},
			// 单选
			radioChange(){
				this.pathObj.isDefault = !this.pathObj.isDefault ? 1 : 0;
			}
		}
```



#### 3.修改地址

前端：向后端传递token、修改的数据、如果后端返回修改成功前端将修改后的数据保存到vuex中

后端：解码token，查询当前用户id，用用户id查询的该用户的购物车信息，将购物车中默认地址为1的改为0，再修改前端传递过来的信息

isDefault默认地址单选按钮：1，0，true，false的变化，传给后端和前端请求都数据都是1，0，而单选按钮选中与不选中是用true和false来控制的

```html
		<!-- 单选 -->
		<radio-group name="" @change="radioChange">
			<label class="radio">
				<radio color="#FF3333" :checked="pathObj.isDefault == 1 ? true : false "⚠️修改地址点击进来1为true，0为false/><text></text>{{pathObj.isDefault}}
			</label>
		</radio-group>
```



```javascript
			// 单选
			radioChange(){
				this.pathObj.isDefault = this.pathObj.isDefault == 1 ? true : false ⚠️：点击判断1为true，0位false
				this.pathObj.isDefault = !this.pathObj.isDefault ;
			}
```



```javascript
		// 导航栏按钮点击保存生命周期
		onNavigationBarButtonTap() {
			this.pathObj.isDefault == true ? 1 : 0;⚠️：发送请求前改为1，0
			// 修改地址
			if (this.isStatus) {
				$http.request({
					url:"/updateAddress",
					method:"POST",
					header:{
						token:true
					},
					data:{
						...this.pathObj
					}
				}).then((res)=>{
					if(res.data.data.success == '成功'){
						// 向vuex中修改数据
						this.updatePathFn({
							index: this.i,
							item: this.pathObj
						})
						uni.showToast({
							title:'修改成功',
							icon:"none"
						})
						// 返回上一页
						uni.navigateBack({
							delta: 1
						})
					}
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				})
		
			} else {
				
				$http.request({
					url:"/addAddress",
					method:"POST",
					header:{
						token:true
					},
					data:{
						...this.pathObj
					}
				}).then((res)=>{
					this.createPathFn(this.pathObj);
					uni.navigateBack({
						delta:1
					})
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				})
			}
		},
```



```javascript
		data() {
			return {
				pathObj: {
					isDefault: false//默认地址⚠️：一进入页面为false
				},
			}
		},
```



### 购物车管理

#### 1.查询购物车数据

​	前端：发送token，将后端返回的数据存储到vuex中

​	后端：解码token，查询用户id，查询用户在购物车表中的信息，返回给前端

#### 2.修改购物车数据

​	**修改购物车中商品数量**

​	前端：如果购物车中的数量修改了发送请求，传递商品id，商品数量，token，如果后端返回修改成功的请求，前端修改vuex中的数量

​	后端：解码token，查询用户id，查询该用户下的商品id，修改商品数量

```html
<template v-else>
  <uniNumberBox 
        :value='item.num'
        :min="1"
        @change='changeNumber($event,index,item)'
       >
  </uniNumberBox>
</template>
```



```javascript
		changeNumber(value,index,item){
      
				// ⚠️如果数据库中商品数量与点击的数量相同就不发送请求
				if(value == item.num) return;
      
				// 请求修改商品数量
				$http.request({
					url:"/updateNumCart",
					method:"POST",
					header:{
						token:true,
					},
					data:{
						goodsId:item.goods_id,// 商品id
						num:value//修改后的商品数量
					}
				}).then((res)=>{
					if(res.data.data.success){
						this.list[index].num = value
					}
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				})
			},
```



#### 3.加入购物车

​	前端：点击加入购物车向后端传递商品添加数量、商品id、token===》接受到后端传递添加成功的状态后收起弹窗提示添加成功

​	后端：解码token，查询用户id，查询商品id及商品图片，名称...信息，在购物车表中查询用户id和商品id对应的数据，如果有该数据修改商品数量，如果没有数据添加数据 ===》向前端返回修改成功的状态值



```javascript
			//加入购物车
			addCart(){
				// 通知数据库中购物车添加商品
				$http.request({
					url:"/addCart",
					method:'POST',
					header:{
						token:true
					},
					data:{
						goods_id:this.goodsContent.id,
						num:this.num
					}
				}).then((res)=>{
					if(res.data.data.success=='加入成功'){
						//隐藏弹出框
						this.hidePop();
						//提示信息
						uni.showToast({
							title:"成功加入购物车",
							icon:'none'
						})
					}
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				})
			}
```



#### 4.删除购物车数据

前端：删除购物车请求写在了vuex中actions的delGoodsFn方法中，发送后端token、商品id（用的是vuex中选中的存放数据id的state属性selectedList），后端返回删除成功后，前端调用actions提交mutations中的delGoods方法进行删除

```javascript
	mutations:{
		// 删除
		delGoods(state){
			state.list = state.list.filter(v=>{
				return state.selectedList.indexOf(v.id) == -1
			})
		},
	
	actions:{
		// 提交删除
		delGoodsFn({commit,state}){
			console.log(state.selectedList)
			uni.showModal({
				content:'确定删除吗?',
				success: () => {
					// 发送删除请求
					$http.request({
						url:"/deleteCart",
						method:"POST",
						header:{
							token:true
						},
						data:{
							goodsId:state.selectedList
						}
					}).then((res)=>{
						if(res.data.data.success){
							commit('delGoods');
							commit('unCheckAll');
							
							uni.showToast({
								title:'删除成功',
								icon:"none"
							})
						}
					}).catch(()=>{
						uni.showToast({
							title:'请求失败',
							icon:'none'
						})
					})
				}
			})
		}
	}
```

购物车页面：

```
	<view class='foot-num' @tap='delGoodsFn'>删除</view>
	
	...mapGetters(['checkedAll','totalCount'])
```



### 订单管理

#### 1.提交订单

购物车点击提交订单判断是否选择有数据，没有选择数据提示‘请至少选择一件商品’，如果选择有数据，将选择的vuex中的selectedList中商品id通过路径传值到确认订单页面，通过map、find方法拿到vuex中list数据存储的selectedList商品id对应的商品数据，最后循环展示到页面中



**shopcart.vue购物车页面点击确认：**

⚠️this.selectedList是来自vuex中存储的选中的商品id

```javascript
//进入确认订单页
goConfirmOrder(){
  // 判读没有选择商品的时候
  if (this.selectedList.length == 0) {
    uni.showToast({
      title: '请至少选择一件商品',
      icon: 'none'
    })
    return
  }
  // 把选择到的商品id传递过去
  uni.navigateTo({
    url:'../confirm-order/confirm-order?detail='+JSON.stringify(this.selectedList)+''⚠️this.selectedList是来自vuex中存储的选中的商品id
  })
}
```



**确认订单页confirm.vue:**

计算属性拿到购物车页面传递过来的商品id的对应vuex中list商品数据：用到es6 数组find方法（用的非常精妙）

```javascript
		computed: {
			...mapState({
				list:state=>state.cart.list
			}),
			...mapGetters(['defaultPath','totalCount']),
			
			//根据商品列表找到对应e.detail 数据的 id  最终返回商品数据
			goodsList(){
				return this.itemid.map(id=>{
					return  this.list.find(v=>v.id == id) ⚠️：这个find方法用的非常精妙
				})

			}
		},
		onLoad(e) {
			// 接收购物车页面传递过来的商品id数组
			this.itemid = JSON.parse(e.detail)
		},
```

遍历循环goodsList计算属性展示商品数据：

```html
		<!--商品-->
		<view class='goods-list'>
			<view class='goods-content bg-active-color' 
				   v-for="(item,index) in goodsList"
				   :key='index'
			>
				<image class='goods-img' :src='item.imgUrl' mode=""></image>
				<view class='goods-text'>
					<view class='goods-name'>{{item.name}}</view>
					<view class='goods-size f-color'>颜色分类：黑色</view>
					<view class='f-active-color' style='font-size:24rpx'>7天无理由</view>
				</view>
				<view>
					<view>¥{{item.pprice}}</view>
					<view class='f-color'>*{{item.num}}</view>
				</view>
			</view>
		</view>
```

底部总价是从vuex中的总价getters拿过来的totalCount：

```html
	<view class='total-price'>合计：<text class='f-active-color'>¥{{totalCount.pprice}}</text></view>
```



#### 2.订单默认地址

解决进入确认订单页没有地址问题：

原因：地址数据是在地址列表中请求的，没有进入过地址列表直接进入确认订单页，vuex中是没有地址数据的，所以进入确认订单页要发送地址请求，不然没有地址信息，地址信息存储到vuex中

​	

#### 3.提价订单的小细节

1》提交订单按钮不能重复性提交，点两下就创建两个是不行的

2》提交订单要在数据库中创建一条数据：订单时间，过期时间，订单号，订单状态（支付状态、未支付状态）

3》提交订单，当前数据在购物车中就没有了==〉更新数据库购物车的数据

4》确认订单页点击结算要先创建订单，创建成功后传递总金额

5》选择支付方式只能选一个，外边嵌套一个`radio-group`：单项选择器，内部由多个 `<radio>` 组成。通过把多个`radio`包裹在一个`radio-group`下，实现这些`radio`的单选。

​		单选扩大范围用label绑定整个作用区域



## 三、uni-app的坑

1.自定义导航栏使用uni-nav-bar组件中，左侧按钮文本属性应该是left-text才生效，而文档中是leftText

2.uni-app中的tabber是不能做事件拦截的，必须要自己自定义tabber做事件拦截，进入到购物车，

