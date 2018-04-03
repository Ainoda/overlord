# Jasmine
[Jasmine](https://jasmine.github.io/index.html)是一个用于测试JavaScript代码的行为驱动开发框架。  
它不依赖于任何其他的JavaScript框架。  
它不需要DOM。  
它有一个干净，明显的语法，以便您可以轻松编写测试。

## Simple Code
```
describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});
```

## 下载安装
Jasmine支持Ruby,Python和Node.JS。  
在下基于Node.JS完成Jasmine的安装，其他安装请参考[Jasmine安装](https://jasmine.github.io/pages/getting_started.html)  
1. 全局安装
```
shell> npm install -g jasmine
```
* 作为项目的开发依赖（devDependencies）安装：
```
shell> npm install --save-dev jasmine
```

## 初始化Jasmine
```
shell> jasmine init     //全局安装
##shell> ./node_modules/.bin/jasmine init //项目安装
```
初始化成功后会在项目根目录下生成 /spec/support/jasmine.json配置文件
```
{
  // Spec directory path. Your spec_files must be relative to this path
  "spec_dir": "spec",
  // Array of filepaths (and globs) relative to spec_dir to include
  "spec_files": [
    "**/*[sS]pec.js"
  ],
  // Array of filepaths (and globs) relative spec_dir to include before jasmine specs
  "helpers": [
    "helpers/**/*.js"
  ],
  // Stop execution of a spec after the first expectation failure in it
  stopSpecOnExpectationFailure: false,
  // Run specs in semi-random order
  random: false
}
```

### 运行测试
一旦你初始化成功，你可以从项目的根目录运行jasmine来启动Jasmine。
将spec文件的相对路径传递给jasmine命令，执行单个测试文件。

## CLI options
JASMINE_CONFIG_PATH=  
>指定配置文件的相对路径或绝对路径。 可以用作选项或设置为环境变量。

```
shell> JASMINE_CONFIG_PATH=spec/config/jasmine.json jasmine
shell> jasmine JASMINE_CONFIG_PATH=spec/config/jasmine.json
```
----no-color
>关闭spec输出中的颜色

```
shell> jasmine --no-color
```
----filter=
>只运行匹配给定字符串的specs

```
shell> jasmine --filter="a spec name"
```
----stop-on-failure=[true|false]
>设置为true时，在第一个期望失败后停止执行specs

```
shell> jasmine --stop-on-failure=true
```
----random=[true|false]
>是否随机执行specs

```
shell> jasmine --random=true
```
----seed=
>设置随机执行的seed值，random值必须为true

```
shell> jasmine --seed=4321
```

## Using the library
如果你想对jasmine配置进行更精细的控制，Jasmine也可以当作库引用在你的项目中。  
这么做将允许你加载多个配置文件或以不同的方式控制你的配置。
```
var Jasmine = require('jasmine');
var jasmine = new Jasmine();
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    'appSpec.js',
    'requests/**/*[sS]pec.js',
    'utils/**/*[sS]pec.js'
  ],
  helpers: [
    'helpers/**/*.js'
  ]
});
```

## 自定义onComplete
可以指定一个自定义的onComplete回调(所有的specs都通过时返回true)。
```
jasmine.onComplete(function(passed) {
  if(passed) {
    console.log('All specs have passed');
  }else {
    console.log('At least one spec has failed');
  }
});
```

## Reporters
ConsoleReporter是默认的Reporters，也可以添加一个自定义的Reporters。
```
jasmine.configureDefaultReporter({
  // The `timer` passed to the reporter will determine the mechanism for seeing how long the suite takes to run.
  timer: new jasmine.jasmine.Timer(),
  // The `print` function passed the reporter will be called to print its results.
  print: function() {
    //process.stdout.write(arguments);
  },
  // `showColors` determines whether or not the reporter should use ANSI color codes.
  showColors: true
});
```
### 运行测试
调用execute将运行spec。
```
jasmine.execute()
```
可以有选择地调用一个spec文件，相对与项目根目录和字符串匹配文件。
```
jasmine.execute(['fooSpec.js'，'spec spec')
```

## 语法
四个核心概念：分组，用例，期望，匹配  
describe(description, specDefinitions): 定义分组，看作一组测试用例  
it(description, testFunctionopt, timeoutopt): 定单个测试用例  
expect(actual) → {matchers}: 表示期望expression这个表达式具有某个值或者具有某种行为  
to**(arg): 表示匹配
```
describe('applicationApp', () => {
  it('', () => {
    expect('Hello World').toEqual('Hello World');
  });
});
```
### 匹配器(参考[jasmine](https://jasmine.github.io/2.0/introduction.html))
1. toBe

```
it("The 'toBe' matcher compares with ===", function() {
  var a = 12;
  var b = a;
  expect(a).toBe(b);
  expect(a).not.toBe(null);
});
```
* toEqual

```
it("works for simple literals and variables", function() {
  var a = 12;
  expect(a).toEqual(12);
});
it("should work for objects", function() {
  var foo = {
    a: 12,
    b: 34
  };
  var bar = {
    a: 12,
    b: 34
  };
  expect(foo).toEqual(bar);
});
```
* toMatch

```
it("The 'toMatch' matcher is for regular expressions", function() {
  var message = "foo bar baz";
  expect(message).toMatch(/bar/);
  expect(message).toMatch("bar");
  expect(message).not.toMatch(/quux/);
});
```
* toBeDefined

```
it("The 'toBeDefined' matcher compares against `undefined`", function() {
  var a = {
    foo: "foo"
  };
  expect(a.foo).toBeDefined();
  expect(a.bar).not.toBeDefined();
});
```
* toBeUndefined

```
it("The `toBeUndefined` matcher compares against `undefined`", function() {
  var a = {
    foo: "foo"
  };
  expect(a.foo).not.toBeUndefined();
  expect(a.bar).toBeUndefined();
});
```
* toBeNull

```
it("The 'toBeNull' matcher compares against null", function() {
  var a = null;
  var foo = "foo";
  expect(null).toBeNull();
  expect(a).toBeNull();
  expect(foo).not.toBeNull();
});
```
* toBeTruthy

```
it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
  var a, foo = "foo";
  expect(foo).toBeTruthy();
  expect(a).not.toBeTruthy();
});
```
* toBeFalsy

```
it("The 'toBeFalsy' matcher is for boolean casting testing", function() {
  var a, foo = "foo";
  expect(a).toBeFalsy();
  expect(foo).not.toBeFalsy();
});
```
* toContain

```
describe("The 'toContain' matcher", function() {
  it("works for finding an item in an Array", function() {
    var a = ["foo", "bar", "baz"];
    expect(a).toContain("bar");
    expect(a).not.toContain("quux");
  });
  it("also works for finding a substring", function() {
    var a = "foo bar baz";
    expect(a).toContain("bar");
    expect(a).not.toContain("quux");
  });
});
```
* toBeLessThan

```
it("The 'toBeLessThan' matcher is for mathematical comparisons", function() {
  var pi = 3.1415926,
       e = 2.78;
  expect(e).toBeLessThan(pi);
  expect(pi).not.toBeLessThan(e);
});
```
* toBeGreaterThan

```
it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function() {
  var pi = 3.1415926,
       e = 2.78;
  expect(pi).toBeGreaterThan(e);
  expect(e).not.toBeGreaterThan(pi);
});
```
* toBeCloseTo

```
it("The 'toBeCloseTo' matcher is for precision math comparison", function() {
  var pi = 3.1415926,
       e = 2.78;
  expect(pi).not.toBeCloseTo(e, 2);
  expect(pi).toBeCloseTo(e, 0);
});
```
* toThrow

```
it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
  var foo = function() {
    return 1 + 2;
  };
  var bar = function() {
    return a + 1;
  };
  var baz = function() {
    throw 'what';
  };
  expect(foo).not.toThrow();
  expect(bar).toThrow();
  expect(baz).toThrow('what');
});
```
* toThrowError

```
it("The 'toThrowError' matcher is for testing a specific thrown exception", function() {
  var foo = function() {
    throw new TypeError("foo bar baz");
  };

  expect(foo).toThrowError("foo bar baz");
  expect(foo).toThrowError(/bar/);
  expect(foo).toThrowError(TypeError);
  expect(foo).toThrowError(TypeError, "foo bar baz");
});
```
## spies
jasmine可以跟踪任何方法的调用，包括他调用时传入的参数
1. toHaveBeenCalled
* toHaveBeenCalledWith

```
describe("A spy", function() {
  var foo, bar = null;
  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };
    //跟踪函数
    spyOn(foo, 'setBar');
    foo.setBar(123);
    foo.setBar(456, 'another param');
  });
  it("tracks that the spy was called", function() {
    expect(foo.setBar).toHaveBeenCalled();
  });
  it("tracks all the arguments of its calls", function() {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
  });
  it("stops all execution on a function", function() {
    expect(bar).toBeNull();
  });
});
```
注意最后一个测试用例，foo.bar的值为null。如果需要调用方法后不停止执行，可以添加 and.callThrough()
* and.callThrough
> 方法继续执行
```
spyOn(foo, 'setBar').and.callThrough();
```

* and.returnValue
> 方法调用后返回一个特性的值
```
spyOn(foo, 'setBar').and.returnValue(987);
```

* and.callFake
> 调用指定方法

* and.throwError
> 抛出指定错误

所有的调用都存放在 calls 属性中。

## 测试 setTimeout 或者 setInterval
使用方法参考代码
```
beforeEach(function() {
  timerCallback = jasmine.createSpy("timerCallback");
  //初始化
  jasmine.clock().install();
});
afterEach(function() {
  jasmine.clock().uninstall();
});
it("causes a timeout to be called synchronously", function() {
  setTimeout(function() {
    timerCallback();
  }, 100);
  expect(timerCallback).not.toHaveBeenCalled();
  jasmine.clock().tick(101);
  expect(timerCallback).toHaveBeenCalled();
});
it("causes an interval to be called synchronously", function() {
  setInterval(function() {
    timerCallback();
  }, 100);
  expect(timerCallback).not.toHaveBeenCalled();
  jasmine.clock().tick(101);
  expect(timerCallback.calls.count()).toEqual(1);
  jasmine.clock().tick(50);
  expect(timerCallback.calls.count()).toEqual(1);
  jasmine.clock().tick(50);
  expect(timerCallback.calls.count()).toEqual(2);
});
```
## jasmine异步代码支持
Jasmine还支持异步代码的测试。传递给beforeAll，afterAll，beforeEach，afterEach，it的函数可以是异步的。
有三种不同的方式来表示一个函数是异步的：
1. 通过获取一个可选的回调参数
* 通过返回一个promise
* 在支持它的环境中使用async关键字

### callback
beforeAll，afterAll，beforeEach，afterEach，it可以有一个可选的参数，这个参数可以在异步代码完成后调用。
```
describe("Asynchronous specs", function() {
  var value = 0;
  beforeEach(function(done) {
    setTimeout(function() {
      value = 1;
      done();
    }, 1);
  });
  <!-- 在beforeEach调用done函数之前这个测试用例不会执行，直到beforeEach调用done函数后  -->
  it("should support async execution of test preparation and expectations", function(done) {
    value++;
    expect(value).toBe(2);
    done();
  });
});
```
done.fail 这个方法可以表示测试用例没有通过。

### promise
beforeAll，afterAll，beforeEach，afterEach，it可以返回一个promise。
```
describe("Using promises", function() {
  if (!browserHasPromises()) {
    return;
  }
  <!-- 这个promise在异步任务完成后必须是resolved，如果是rejected，那么所有的测试用例都会失败。 -->
  beforeEach(function() {
    return soon().then(function() {
      value = 0;
    });
  });
  <!-- 这个测试用例在之前的promise resolved之前不会执行 -->
  it("should support async execution of test preparation and expectations", function() {
    return soon().then(function() {
      value++;
      expect(value).toBeGreaterThan(0);
    });
  });
});
```

### async/await
beforeAll，afterAll，beforeEach，afterEach，it可以使用await/async来表明异步，但是await/async需要环境(ES7)来支撑。
