# [Gulp](https://www.gulpjs.com.cn/)
Gulp 是基于 Node.js
1. 安装 Node.js
*  安装 Gulp

## 入门
1. 全局安装
```
shell> npm install -g gulp
```
* 作为项目的开发依赖（devDependencies）安装：
```
shell> npm install gulp --save-dev
```
* 在项目根目录下创建一个名为 gulpfile.js 的文件：
```
var gulp = require('gulp');
gulp.task('default', function() {
});
```
* 运行
```
shell> gulp
```
默认的名为 default 的任务（task）将会被运行，在这里，这个任务并未做任何事情。  
想要单独执行特定的任务（task），请输入
```
shell> gulp <task> <othertask>
```

## 语法.
```
gulp.task(name[, deps], fn)
gulp.src(globs[, options])
gulp.dest(path[, options])
gulp.watch(glob [, opts], tasks)
gulp.watch(glob[, opts, cb])
```
### 创建任务
```
var gulp = require('gulp');
gulp.task('default', function() {
});
gulp.task('testTask1',function() {
});
```
