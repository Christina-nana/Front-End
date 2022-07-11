### localhost与cookie的区别

1. localsorage不需要环境

   cookie需要环境=》直接在一个html文件中是无法document.cookie=‘name=123’存储的
   	            在vue的created(）中就可以加上document.cookie=‘name=123’存储

2. cookie可以定义过期时间，localStorage不可以设置过期时间

   cookie过期：要么过期，要么可以改成过期时间

   expires设置cookie的过期时间

3. 存储大小不同

   ​	针对于浏览器，每个浏览器存储localStorage与存储cookie的大小都不同

### token过期

token过期有两种方式操作

- 前端操作

  ​	 把token存储到cookie里边，设置cookie的过期时间。

  ​	if（cookie存在）{

  ​		没有过期

  ​	}else{

   		过期

  ​	}

- 后端操作

  ​	token后端生成、设置过期时间，给前端返回code码

  ​	请求携带token,

  ​    