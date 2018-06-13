# Docker
Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。
## 下载安装
ubuntu环境:
```
shell> sudo apt install docker.io
shell> sudo docker version //查看docker版本
```
这样安装的docker不是最新版本，如果想要安装最新版本的docker，请参考[Docker安装](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/)
>Docker 分为开源免费的 CE（Community Edition）版本和收费的 EE（Enterprise Edition）版本

## 获取镜像
获取jenkins镜像（科学上网很重要）
```
shell> sudo docker pull jenkins/jenkins
```
>可以使用阿里云加速器加速docker pull的速度[阿里云开发者平台](https://dev.aliyun.com/)   
登录后：管理中心->镜像加速器，配置你的专属加速地址

或者使用dockerfile创建镜像
github: https://github.com/jenkinsci/docker.git
```
shell> docker build –t=’ourbuild/jenkins’.
```
## 查看docker镜像
```
sudo docker images
```
## Docker使用非root用户使用
```
sudo groupadd docker //创建docker组
sudo gpasswd -a ${USER} docker //将当前用户加入docker组
sudo systemctl restart docker //重新启动docker服务
//当前用户退出系统重新登陆
docker ps //运行docker命令

```
## 启动容器
### 创建并启动容器
```
sudo docker run 
  –-name myjenkins //此docker实例名字为myjenkins
  –p 8080:8080 –p 50000:50000 //映射端口，docker的8080端口映射到host的8080端口
  –d //docker实例作为demon在后台运行
  –v /home/***/Docker/jenkins_home:/var/jenkins_home //目录映射将docker中的/var/jenkins_home目录映射到host中的/home/lzping/Docker/jenkins_home目录
jenkins/jenkins //镜像名称
```
### 启动终止容器
````
docker start 实例名称或hash值
````
### 终止容器
```
docker stop  实例名称或hash值
```
## 进入容器
```
sudo docker exec –it 34fa /bin/bash
```
## 导出和导入容器
```
docker export 实例名称或hash值 > ubuntu.tar //导出镜像
cat ubuntu.tar | sudo docker import - test/ubuntu:v1.0 //从容器快照中导入为镜像
```
## 删除容器
```
docker rm 实例名称或hash值 //删除容器
```

# Docker基本概念
## 镜像
docker镜像就是一个只读的模板。一个镜像可以包含一个完整的ubuntu系统环境，里面安装了应用程序。  
镜像可以用来创建docker容器。

## 容器
docker利用容器来运行应用。  
容器是从镜像创建的运行实例。它可以被启动、开始、停止、 删除。每个容器都是相互隔离的、保证安全的平台。  
可以把容器看做是一个简易版的Linux	环境（包括root用户权限、 进程空间、用户空间和网络空间等）和运行在其中的应用程序。
>注：镜像是只读的，容器在启动的时候创建一层可写层作为最上层。

## 仓库
仓库是集中存放镜像文件的场所。

