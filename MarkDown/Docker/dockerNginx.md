# Docker安装nginx
## 下载nginx镜像
```
docker pull nginx
```
## 启动nginx容器
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
## 进入容器(有坑-解决配置文件被覆盖)
```
docker exec -it jb-nginx /bin/bash
```
进入 /etc/nginx/ 目录删除 conf.d 目录下的 default.conf 配置文件。

## 重启容器
```
docker restart jb-nginx
```