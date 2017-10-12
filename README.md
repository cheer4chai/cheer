# cheer
一个简单的工具库，包括：

1.param：用于URL等参数解析

2.cookie：用于处理cookie

3.dom：基于原生js的一些dom操作

4.dialog：对话框弹出组件

5.validate：常见的数据验证功能

6.string：字符串处理功能

## 使用方法

1.clone本项目后在目录下执行 npm install 安装依赖

2.执行脚本

  npm run build – 这个脚本用来生成这个类库的最终压缩版文件。
  
  npm run dev – 跟 build 类似，但它并不压缩代码，同时启动一个监视进程。
  
  npm run test – 用来运行测试，本项目使用了 Mocha 和 Chai 来运行简单的测试。
  
  
## 说明

本类库使用umd标准，因此可以在浏览器环境下使用同时可以在node环境下运行。
