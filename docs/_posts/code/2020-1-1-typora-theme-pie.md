---
date: 2020-1-1
tags: 
 - code
 - vue
---

# typora-theme-pie
> 一个`typora`主题，具有[少数派](http://www.sspai.com)和 [Misty](https://github.com/etigerstudio/typora-misty-theme) 的风格。
[English](2020-1-1-typora-theme-pie.md) | 简体中文  
> 馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料  
> 馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料馅饼里有非常多的馅料
> > dddd
## 为什么叫 `pie`
`pie` 的意思是 “馅饼” ，馅饼里有非常多的馅料，而这个主题正是由多种 `馅料` 组合而成的。下面是几处灵感来源，首先对你们表示感谢
- :ghost: ​[少数派](http://www.sspai.com) 给我提供了颜色灵感和`引用块`的灵感
- :tada: [typora-misty-theme](https://github.com/etigerstudio/typora-misty-theme) 给我提供了`标题` 的灵感
- :santa: [typora-vue-theme](https://github.com/blinkfox/typora-vue-theme) 给我提供了字体的灵感，事实上我用的就是它所使用的字体
- :beers: ​[material-palenight](https://codemirror.net/theme/material-palenight.css) 是我最喜欢的代码主题，我也将其加入了进来
### 测试三级目录
> dasdadadasdasdd
#### 四级目录
十大啊啊啊啊啊啊啊啊啊啊
##### 5级目录
十大啊啊啊啊啊啊啊啊啊啊
###### 6级目录
十大啊啊啊啊啊啊啊啊啊啊
## 特性
- [x]  :baby_chick: 暗黑主题
- [x]  :rocket: 优化的任务列表样式，就像下面第二张图中的
- [x]  :sailboat: ​可选的图片阴影样式，如果` ![shadow-other thing]()`这样在`[]` 中加入`shadow` 前缀，就会为图片添加阴影
## 安装主题
1. 下载本主题中的 `pie.css` 文件和 `pie` 文件夹，**`pie` 文件夹不是必须的，这里面仅仅包含了所需的字体**；
2. 打开 Typora，点击“**偏好设置**（`ctrl + ,`）” => “**外观**” => “**打开主题文件夹**”按钮，会弹出 Typora 的主题文件夹；
3. 将下载好的`pie.css`和`pie`文件夹放到 Typora 的主题文件夹中；
4. 关闭并重新打开 Typora，从菜单栏中选择 “**主题**” => “**Pie**” 即可。
> 中文用户如果想要更好的体验，建议安装 [更纱黑体](https://github.com/be5invis/Sarasa-Gothic)
## 代码
``` javascript {4}
export default {
  data () {
    return {
      msg: 'HighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlightedHighlighted!'
    }
  }
}
```
::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: fold
这就是折叠的代码
``` javascript {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

## 效果图
![image-20200323191439554](https://d33wubrfki0l68.cloudfront.net/ae111c6a627e25fc34ce2ec9d5ca3d883f247d3e/15d93/image-2.ddbb59d5.jpg)
