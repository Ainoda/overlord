# jenkins
Jenkins是一个开源软件项目，是基于Java开发的一种持续集成工具，用于监控持续重复的工作，旨在提供一个开放易用的软件平台，使软件的持续集成变成可能。
## 下载安装
jenkins官网提供了很多个版本，根据自己的情况安装相应的版本。  
在下使用的是ubuntu16.04，所以基于[ubuntu安装教程](https://pkg.jenkins.io/debian/)，下载最新的deb安装包。  
```
shell> sudo dpkg -i jenkins_2.101_all.deb
shell> sudo apt install -f
shell> sudo service jenkins start
#停止服务
shell> sudo service jenkins stop
```
安装完成后，启动jenkins。  
>访问路径：http://localhost:8080  
安装路径：/var/lib/jenkins  
日志路径：/var/log/jenkins  
创建的项目目录当然在jenkins安装目录下的jobs里面。

## 配置jenkins
1. 解锁jenkins  
管理员密码位置(/var/lib/jenkins/secrets/initialAdminPassword)
>如果没有/var/lib/jenkins/secrets目录的权限执行  
    ```
    shell> sudo chmod 755 /var/lib/jenkins/secrets
    ```

* 安装插件  
默认安装了社区推荐插件
* 创建第一个管理员用户

## 创建一个新的任务
1. 新建-构建只有风格的软件项目
* 源码管理-输入git地址、添加证书（用户密码）、配置git分支
* 选择构建环境
因为在下建的是node环境所以需要先安装node环境和插件步骤如下：
  * 安装NodeJS Plugin
  * 系统设置-Global tool Configuration-NodeJS,配置node环境(可以选择已安装的node也可以自动安装node)
* 回到项目配置
* 在构建环境中选择Provide Node & npm bin/ folder to Path，选择刚才配置的node。
* 添加构建命令
```
shell> cnpm install	// 安装依赖包
shell> npm test	// 只能测试代码
shell> gulp build	// 打包
```
>(如果环境中没有cnpm，而又不能在容器中使用npm安装cnpm，有一个取巧的办法。那就是在构建命令中执行npm安装cnpm的命令。)
