# React
React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。
## 使用 React 场景
* 将 React 添加到新的 APP 中
  * Create React App
    ```
    npm install -g create-react-app
    create-react-app react-app
    //使用 Create React App 是开始构建新的 React 单页应用程序的最佳方式。
    ```
* 将 React 添加到现有的 APP 中
  * NPM
    ```
    npm install --save react react-dom
    //使用npm安装
    ```
## 使用 React
### Hello World
```
import React from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)
```
这是一个最小的 React 示范。
### JSX
在 React 中推荐使用 JSX [中文文档](http://www.css88.com/react/docs/introducing-jsx.html) [英文文档](https://reactjs.org/docs/introducing-jsx.html)。
### Rendering Elements
Elements 是 React 应用中最小的构建块。
```
const element = <h1>Hello, world</h1>
```
与浏览器 DOM 元素不同，React element 是普通对象，创建起来很容易。React DOM 负责更新 DOM 以匹配 React 元素。
### Rendering an Element into the DOM
```
<div id="root"></div>
-------------------------------------
const element = <h1>Hello, world</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
)
```
要渲染一个 React element 到一个 root DOM 节点，只需要把它们传递给 ReactDOM.render() 方法。
#### Updating the Rendered Element
```
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'))
}
setInterval(tick, 1000)
```
React 中 element 是不可变的，一旦创建, element 将不能更改子元素和属性。更新 UI 的唯一方法是创建一个新的 element 传递给 ReactDOM.render() 方法。
#### React Only Updates What’s Necessary
React DOM 会将元素及其子元素与之前版本逐一对比, 并只对有必要更新的 DOM 进行更新, 以达到 DOM 所需的状态。

即使每隔 1 秒都重建了整个元素, 但实际上 React DOM 只更新了修改过的文本节点。
### Components and Props
Components 就像 JavaScript 的函数或者类。组件可以接收任意输入(称为”props”)，并返回 React 元素，用以描述屏幕显示内容。
#### Functional and Class Components
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
//定义一个函数 Component，接收一个 props 参数，返回一个 element 对象
```
- - -
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
//使用 ES6 的 class 来定义一个 Component, 它有一个 render 方法放回一个 element 对象
```
#### Rendering a Component
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
//const element = <div />
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
//一个 element 即可以是 DOM 元素，也可以是一个 Component。
//如果是一个 Component，React 会 JSX 的属性以一个对象的形式传递给 Component，即 props 对象。
```
#### Composing Components
Components 中可以引用 Components，我们可以将 Components 定义到任意层级：按钮，表单...。

**PS**: 组件中必须返回 **一个单独的** 根节点 element
#### Extracting Components
提取 Components 是一个繁琐的工作，但是在大型的 Apps 中可以给我们的是大量的可复用 Components。最佳实践是提取会多次使用的 element (按钮，链接，输入框等等)，或者本身足够复杂结构(表单等等)。
#### Props are Read-Only
props 是只读的，不允许修改。(可以理解为单向数据流）。

props 主要用于向其子 Components 传递参数或回调函数。
### State and Lifecycle
