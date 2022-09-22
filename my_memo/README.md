# 快应用 备忘录模版

## 1、文件结构

```
├── sign                # 存储 rpk 包签名模块;
│   ├── debug           # 调试环境证书/私钥文件
│   └── release         # 正式环境证书/私钥文件
└── src
│   ├── assets          # 公用的资源(images/styles/字体...)
│   │   ├──images       # 存储 png/jpg/svg 等公共图片资源
│   │   └──styles       # 存放 less/css/sass 等公共样式资源
│   ├── helper          # 项目自定义辅助各类工具
│   │   ├──const        # 存放项目中使用到的storage key
│   │   ├──data         # 存放操作备忘录列表的方法
│   │   └──utils        # 存放项目所封装的工具类方法
│   ├── pages           # 统一存放项目页面级代码
│   ├── app.ux          # 应用程序代码的人口文件
│   ├── manifest.json   # 配置快应用基本信息
│   └── components      # 组件
└── package.json        # 定义项目需要的各种模块及配置信息
```

## 2、如果需要轻粒子统计功能服务

首先需要前往轻粒子官网注册, 在创建应用之后可以获得 app_key，然后需要在 `/src/assets/js/statistics.config.js` 文件中配置好自己的 app_key。

## 3、模版说明

本项目为快应用备忘录  模版。

`main` 页面：

- 首页：
  - 添加：点击添加图标 ，可以跳转到 `add` 页面，且从该入口进入页面是添加模式
  - 点击备忘录列表项，进入 `add` 页面，且从该入口进入为编辑模式。
  - 左滑备忘录列表项，显示删除按钮，点击可以删除备忘录
- 我的：
  - 点击立即登录按钮进行登录
  - 点击清除记录，清除所有保存的备忘录记录
  - 点击退出登录按钮退出登录

`add` 页面：

- 包括标题和内容以及标签三项内容。
- 添加模式下，点击“完成”且标题和内容非空，可以添加一条记录
- 编辑模式下，点击“完成”且标题和内容非空，可以保存修改

## 4、如何使用

### 4.1 快应用开发工具调试(推荐 ✅✅)

推荐下载[快应用开发工具](https://www.quickapp.cn/docCenter/IDEPublicity)，可以进行扫码调试/usb 调试，还有 web 预览、语法提示等功能。使用方法，请参见[快应用开发工具文档](https://doc.quickapp.cn/tutorial/ide/overview.html)。

### 4.2 命令行调试

```bash
cd book-template && yarn
yarn start # 推荐 ✅✅

# 或者运行以下命令
yarn server & yarn watch

# 或者在终端一 Tab 下运行：
yarn server
# 在终端另一 Tab 下运行：
yarn watch

# ✨ 新增「快应用」页面
yarn gen YourPageName
```

用一台 `Android` 手机，下载安装[「快应用」调试器](https://www.quickapp.cn/docCenter/post/69)，打开后操作`扫码安装`，扫描如上命令生成的二维码，即可看到效果；更多讯息，请参见[快应用环境搭建](https://nice.lovejade.cn/zh/article/develop-quick-app-experience-notes.html#环境搭建)。
