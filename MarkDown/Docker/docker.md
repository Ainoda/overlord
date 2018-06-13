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
#### 参数详解（重要）
* -a stdin: 指定标准输入输出内容类型，可选 STDIN/STDOUT/STDERR 三项；
* -d: 后台运行容器，并返回容器ID；
* -i: 以交互模式运行容器，通常与 -t 同时使用；
* -t: 为容器重新分配一个伪输入终端，通常与 -i 同时使用；
* --name="nginx-lb": 为容器指定一个名称；
* --dns 8.8.8.8: 指定容器使用的DNS服务器，默认和宿主一致；
* --dns-search :指定容器DNS搜索域名，默认和宿主一致；
* -h "mars": 指定容器的hostname；
* -e username="ritchie": 设置环境变量；
* --env-file=[]: 从指定文件读入环境变量；
* --cpuset="0-2" or --cpuset="0,1,2": 绑定容器到指定CPU运行；
* -m :设置容器使用内存最大值；
* --net="bridge": 指定容器的网络连接类型，支持 bridge/host/none/container: 四种类型；
* --link=[]: 添加链接到另一个容器；
* -p --expose=[]: 开放一个端口或一组端口；
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

* * *
# 最佳实践
## Docker安装启动Nginx
### 下载Nginx镜像
```
docker pull nginx
```
### 启动nginx容器
```
docker run
--name jb-nginx //命名容器名称
  -p 80:80 //映射端口
  -v /home/lizhiping/nginx/nginx.conf:/etc/nginx/nginx.conf:ro //映射配置文件
  -v /home/lizhiping/nginx/log:/var/log/nginx //映射nginx日志
  -v /home/lizhiping/workspace:/home/lizhiping/workspace //映射静态文件目录
  -v /home/lizhiping/nginx/sites-available:/etc/nginx/sites-available //映射配置文件
  -d //后台启动
nginx //nginx 镜像
```
### 进入容器(有坑-解决配置文件被覆盖)
```
docker exec -it jb-nginx /bin/bash
```
进入 /etc/nginx/ 目录删除 conf.d 目录下的 default.conf 配置文件。

**注意：nginx.conf 配置文件中的用户为 nginx**
### 重启容器
```
docker restart jb-nginx
```
* * *
## Docker安装启动Node
### 下载Node镜像
```
docker pull node
docker pull node:version
```
### 创建镜像（可以直接创建镜像）
1. 在项目根目录创建 `Dockerfile` 文件
2. 输入以下代码
```
 # 指定我们的基础镜像是node，版本是v8.0.0
 FROM node:8

 # 将根目录下的文件都copy到container（运行此镜像的容器）文件系统的app文件夹下

 ADD . /app/
 # cd到app文件夹下
 WORKDIR /app

 # 配置环境变量
 ENV HOST 0.0.0.0
 ENV PORT 3000

 # 容器对外暴露的端口号
 EXPOSE 3000

 # 容器启动时执行的命令，类似npm run start
 CMD ["npm", "start"]
```
### 启动容器（不创建镜像则跳过）
```
docker run 
  --rm
  --name jb-node 
  -p 3000:3000 
  --net="host" //为了访问宿主机上的mongodb
  -d 
wow-pets-core
```
### 直接启动容器（不创建镜像）
```
docker run 
  --rm 
  --name jb-node 
  -v "$(pwd)":/home/node/app //"$(pwd)"当前所在项目路径也可写为绝对路径
  -w /home/node/app //设置工作目录
  --net="host" //为了访问宿主机上的mongodb
  -d
  node:8
  npm start
```
