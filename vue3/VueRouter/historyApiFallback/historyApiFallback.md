## historyApiFallback

![historyApiFallback](/Users/zhanghanling/Learning materials/Front End/vue3/VueRouter/historyApiFallback/historyApiFallback.png)

### 前端路由

![前端路由](/Users/zhanghanling/Learning materials/Front End/vue3/VueRouter/historyApiFallback/前端路由.png)

### SPA页面进行刷新404

SPA页面在路由跳转页面进行刷新，会到服务器中发送请求寻找当前路径资源，但是前端路由例如/categroy，发送到服务器上没有对应的静态资源，那么就会404请求不到资源。

**解决方法一：nginx配置：try_files   /     /index.html     index.html** ：先在根路径下面找，根路径下面找不到的话就找根路径下的/index.html，如果都没有找到的话最后就可以配置index.html

![SPA页面进行刷新404找不到页面](/Users/zhanghanling/Learning materials/Front End/vue3/VueRouter/historyApiFallback/SPA页面进行刷新404找不到页面.png)

**解决方法二：本地配置：**要到本地服务器上找路由的静态资源，/categroy /catrgroy/index.html

在vue-cli脚手架中webpack帮我们配置好了historyApiFallback为true，找不到/categroy静态资源，那么这时候返回根目录下的/index.html，所以没有404这种情况，当我们手动更改为false时，就会出现404。

- node_module/@vue/cli-service/lib/commands/serve.js：

  ![cli-service中historyApiFallback配置](/Users/zhanghanling/Learning materials/Front End/vue3/VueRouter/historyApiFallback/cli-service中historyApiFallback配置.png)

- 或则在vue项目中新建vue.config.js文件，可以配置webpack

```javascript
module.exports = {
  configureWebpack: {
    devServer: {
      // historyApiFallback: true
    }
  }
}
```

