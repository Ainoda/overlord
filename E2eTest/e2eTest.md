# Ｅ２Ｅ测试和单元测试
## 基本概念和测试工具
* e2e测试：（End to End Testing）
>端到端测试类似于系统测试，测试级的“宏大”的端点，涉及整个应用系统环境在一个现实世界使用时的模拟情形的所有测试。例如与数据库对话，用网络通讯，或与外部硬件、应用系统或适当的系统对话。端到端架构测试包含所有访问点的功能测试及性能测试。端到端架构测试实质上是一种"灰盒"测试，一种集合了白盒测试和黑盒测试的优点的测试方法。

* 单元测试：（Unit Testing）
>单元测试是最微小规模的测试;以测试某个功能或代码块。典型地由程序员而非测试员来做，因为它需要知道内部程序设计和编码的细节知识。这个工作不容易做好，除非应用系统有一个设计很好的体系结构; 还可能需要开发测试驱动器模块或测试套具。

* [karma](http://karma-runner.github.io/1.0/index.html):（测试管理工具）
>Karma是一个基于Node.js的JavaScript测试执行过程管理工具（Test Runner）。该工具可用于测试所有主流Web浏览器，也可集成到CI（Continuous integration）工具，也可和其他代码编辑器一起使用。这个测试工具的一个强大特性就是，它可以监控(Watch)文件的变化，然后自行执行，通过console.log显示测试结果。

* [jasmine](https://jasmine.github.io/):（测试库）
>Jasmine是一个用于测试JavaScript代码的行为驱动开发框架。 它不依赖于任何其他JavaScript框架。 它不需要DOM。

* [mocha](http://mochajs.org/):（测试库）
>mocha是一个基于nodejs和浏览器集合的各种特性的javascript测试库，并且让异步测试变得简单，支持TDD(测试驱动开发)和BDD(行为驱动开发)，在测试中捕获到异常时，会给出灵活准确的报告。

* [chai](http://chaijs.com/):(断言库）
>chai是一个基于nodejs的断言库，并且完美支持各种主流的JavaScript测试框架。

* [protractor](http://www.protractortest.org/):
>angular的端到端测试工具。

## karma单元测试
### 安装
```
shell> npm install -g karma-cli		--全局安装karma
shell> npm install karma --save-dev		--安装karma
shell> npm install karma-jasmine karma-chrome-launcher karma-phantomjs-launcher --save-dev				--安装插件(科学上网或者使用淘宝镜像)
shell> npm install jasmine-core --save-dev	--安装jasmine
shell> karma init				--初始化karma
shell> karma start karma.conf.js		--启动karma
```

### 配置启动文件
e2e_tests\karma.conf.js
```
// Karma configuration
// Generated on 2017-04-05

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      // endbower
      'app/app.js',
      'app/scripts/**/*.js',
      'e2e_tests/mock/**/*.js',
      'e2e_tests/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
```
### 调试karma测试用例
使用Chrome启动karma,在Chrome中直接调试。

## mocha单元测试
安装
```
shell> npm install -g mocha			--全局安装mocha(摩卡)
shell> npm install –g chai			--全局安装chai(断言库)
shell> npm install –g karma-mocha karma-chai 	--安装karma插件
```
配置karma，添加以下内容
```
frameworks: ['mocha','chai'],
plugins: [
      'karma-mocha',
      'karma-chai'
],
```
### except断言语言链
[Chai.js断言库API中文文档](http://chaijs.com/api/)  
单纯作为语言链提供以期提高断言的可读性，它们一般不提供测试功能。  
1. to
* be
* been
* is
* that
* which
* and
* has
* have
* with
* at
* of
* same
* not
>对之后的断言取反  

* expect
>expect({ foo: 'baz'}).to.have.property('foo').and.not.equal('bar');

* deep
>递归比较对象的键值对
expect(foo).to.deep.equal({ bar: 'baz'});

* any
>在keys断言之前使用any标记（与all相反）
expect(foo).to.have.any.keys('bar', 'baz')

* all
>在keys断言之前使用all标记（与any相反）
expect(foo).to.have.all.keys('bar', 'baz');

* .a(type) / .an(type)
>被测试的值的类型

* .include(value) / contains(value)
>可作为属性类断言前缀语言链又可作为作为判断数组、字符串是否包含某值的断言使用

* ok
>目标为真值expect(1).to.be.ok

* true
>目标为true, 与ok的区别是不进行类型转换
expect(true).to.be.true

* false
>目标为false

* null
>目标为null
expect(null).to.be.null

* undefined
>目标为undefined

## Jasmine语法
语法练习中。。。。。。待补充

### jasmine测试异步代码测试
默认Jasmine的超时时间是5s，可以通过全局的jasmine.DEFAULTTIMEOUTINTERVAL 设置。

## E2E测试(protractor)
安装和启动protractor
```
shell> npm install -g protractor	--全局安装protractor
shell> webdriver-manager update	--更新webdriver(科学上网或者使用淘宝镜像)
shell> webdriver-manager start		--启动webdriver
```
配置启动文件
e2e_tests\protractor.conf.js
```
/**
 * @Author: zhiping.li
 * @Date:   2017-07-03 10:16:55
 * @Email:  276340452@qq.com
 * @Project: ccp
 * @Last modified by:   zhiping.li
 * @Last modified time: 2017-07-18 10:08:03
 */

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/**/*spec.js'],
  jasmineNodeOpts: {
    showColors: true
  },
  multiCapabilities: [/*{
    'browserName': 'firefox'
  },*/{
    browserName: 'chrome',
    chromeOptions: {
      args: ["--window-size=1900,1000"]
    }
  }]
};
```
[调试protractor测试用例](http://www.protractortest.org/#/debugging)
添加browser.explore();这段代码在你想要暂停调试的代码之前，测试用例会停止。

# Angular测试用例（angular-mock）
```
beforeEach(module('CCPApp')); //载入模块
```

## 测试service
自定义的service引入：使用（_）包含服务名称，如commonServices
内置service引入：直接使用，也可以使用（_）包含服务名称。  
```
beforeEach(inject(function(_commonServices_,_$filter_,$injector) {
  commonServices = _commonServices_;
  filter = _$filter_;
  $httpBackend = $injector.get('$httpBackend');
  authRequestHandler = $httpBackend.when('GET','/rfis/v1/projects').respond({status: '201'});
}));
```
## 测试filter
使用$filter服务测试自定义filter
```
it('filter ccpMenuAuthTypeFilter',function() {
  expect(filter('ccpMenuAuthTypeFilter')(1)).toEqual('菜单');
});
```
## 测试controller
```
it('test applicationAppCtrl',inject(function($rootScope, $controller){
  var scope = $rootScope.$new();
  $controller('HeaderController', {$scope: scope});
  expect(scope.name).toEqual('test');
}));
```
## 测试HTTP请求
```
it('servce test promise',function() {
  var response = '';
  // 请求 $httpBackend.when('GET','/rfis/v1/projects')
  //.respond({status: '201'});}));
  commonServices.getProjectList().then(function(result){
    response = result;
});
// 执行$httpBackend.flush() 会立即执行http请求
  $httpBackend.flush();
  expect(response.data.status).toEqual('201');
});
```
$httpBackend有两种方法when、except  
when和expect都需要4个参数method, url, data, headers, 其中后2个参数可选。  
$httpBackend.when与$httpBackend.expect的区别在于：  
>$httpBackend.expect的伪后台只能被调用一次(调用一次后会被清除)，第二次调用就会报错，而且$httpBackend.resetExpectations可以移除所有的expect而对when没有影响。通常在测试http请求时需要添加以下代码
  ```
afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });
  ```
验证所有需要flush的请求，如果存在没有flush的请求会抛出异常。

# protractor测试用例
## 测试用例
```
describe('TODO list', function() {
  beforeAll(function() {
    browser.get('http://localhost/static/ccp_web/dist/');
  });
it('page show app', () => {
    expect(browser.getTitle()).toEqual('CCP后台 | 首页');
  });
  it('should filter results', function() {
// Find the element with ng-model="user"
// and type "jacksparrow" into it
    element(by.model('user')).sendKeys('jacksparrow');
// Find the first (and only) button on the page
// and click it
element(by.css(':button')).click();
element(by.css('button.btn.btn-info.btn-sm')).click();
    // Verify that there are 10 tasks
expect(element
.all(by.repeater('task in tasks')).count()).toEqual(10);
var menuList =
element.all(by.repeater('menu in mainMenu'));
menuList.get(0).click();
  });
});
```
