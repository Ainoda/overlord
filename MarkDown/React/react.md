# React
React 起源于 Facebook 的内部项目，因为该公司对市场上所有 ECMAScript MVC 框架，都不满意，就决定自己写一套，用来架设Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。
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
const element = <h1>Hello, world</h1>
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
  )
  ReactDOM.render(element, document.getElementById('root'))
}
setInterval(tick, 1000)
```
React 中 element 是不可变的，一旦创建, element 将不能更改子元素和属性。更新 UI 的唯一方法是创建一个新的 element 传递给 ReactDOM.render() 方法。
#### React Only Updates What’s Necessary
React DOM 会将元素及其子元素与之前版本逐一对比, 并只对有必要更新的 DOM 进行更新, 以达到 DOM 所需的状态。

即使每隔 1 秒都重建了整个元素, 但实际上 React DOM 只更新了修改过的文本节点。
### Components and Props
Components 就像 ECMAScript 的函数或者类。组件可以接收任意输入(称为”props”)，并返回 React 元素，用以描述屏幕显示内容。
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
  return <h1>Hello, {props.name}</h1>
}
//const element = <div />
const element = <Welcome name="Sara" />
ReactDOM.render(
  element,
  document.getElementById('root')
)
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
State 类 Component 的专有特性，用于记录保存局部状态。
```
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
```
在 constructor 构造函数中定义 state 对象。

**ps**:不同与 **vue**, state 对象中的属性在构造函数定义后仍然可以新增。
#### Do Not Modify State Directly
修改 State 的唯一正确方式是使用 `setState` 方法。
```
// 错误
this.state.comment = 'Hello'
// 正确
this.setState({comment: 'Hello'})
```
#### State Updates May Be Asynchronous
React 会将多个 `setState` 合并为一个单个更新，用以提高更新。所以 State的更新可能是异步的（Props可能是异步更新）。因此，不能依赖他们的值来计算下一个 State。如果想要避免出现这样的问题，可以调用 `setState` 时传递一个函数，而不是一个对象。
```
this.setState((prevState, props) => ({
  //prevStaet:the previous state
  //props:the props at the time the update
  counter: prevState.counter + props.increment
}))
```
#### State Updates are Merged
调用 `setState` 会合并 State 对象，合并是浅合并，可以只更新部分属性。
#### The Data Flows Down
Component 只关心自己的 State，不需要关心其他 Component 的 State。父 Component 的 State 可以作为其子 Component 的 Props，因此他只会影响其子 Component 的表现。

这中由上至下的数据传输，可以理解为“单向数据流”。
#### [Lifecycle](https://reactjs.org/docs/react-component.html)
一个 React 的 Component 一共有三种状态，Mounting(装载)、Updating(更新)、Unmounting(卸载)。
* Mounting

  当组件实例被创建并将其插入 DOM 时，这些方法将被调用：
  * constructor()
  * componentWillMount()
  * render()
  * componentDidMount()
* Updating

  改变 Props 或 State 可以触发更新事件。 在重新渲染组件时，这些方法将被调用：
  * componentWillReceiveProps()
  * shouldComponentUpdate()
  * componentWillUpdate()
  * render()
  * componentDidUpdate()
* Unmounting

  当一个组件从 DOM 中删除时，这个方法将被调用：
  * componentWillUnmount()
### Handling Events
React 中 element 处理事件与 DOM 类似。
* 事件名称采用驼峰命名
* 传递值为**处理函数**而非**字符串**
```
//HTML
<button onclick="activateLasers()">
  Activate Lasers
</button>
//React
<button onClick={activateLasers}>
  Activate Lasers
</button>
```
需要注意的是在一个 Component 中事件的处理
```
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // 这个绑定是必要的，使`this`在回调中起作用
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```
另一种可以不需要绑定 this 的写法。
```
  handleClick = () => {
    console.log('this is:', this);
  }
```
这样的实现的一个问题是：每次都会重新创建一个新的回调函数来执行，如果这个回调被作为 Props 传递给子 Component，这些 Components 可能需要额外的重复渲染。

当需要传递额外的参数时，下面两种方法是等价的。
```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
### Conditional Rendering
React 中可以像 ECMAScript 一样使用条件判断语句，根据状态渲染 element。
如果想要不渲染 element 只需要返回 null 即可。
```
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
class LoginControl extends React.Component {
  constructor(props) {
    ...
    this.state = {isLoggedIn: false};
  }
  ...
  render() {
    ...
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )} 
      </div>
    );
  }
}
///////////////////////////////////////////

```
### Lists and Keys
React 列表通过循环数组来返回需要渲染的 element。
```
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  );
}
```
### Forms
在 HTML 中，表单的元素 input select textarea 等通常保持自己的状态，并根据用户的输入来更新状态。而在 React 中可变状态通常是由 state 属性来管理，并由 setState 方法来更新状态。React 使 state 成为 "单一数据源" 原则。
```
<input type="text" value={this.state.value} onChange={this.handleChange} />
//受控组件 通过监听事件来更新 元素状态（值）
```
### Lifting State Up
基于 "单一数据源原则"，当一个组件中存在子组件并且子组件中存在共用的状态时，需要将 state 提升到父组件中，数据流遵守"由上至下"的流向，不要试图去同步子组件的状态。
### Composition vs Inheritance
在 React 中不建议使用继承来创建组件，使用组合来创建组件，子组件的初始值使用 props 传递。
### Thinking in React
创建一个 React 应用程度，分为 5 步。

#### Step 1: Break The UI Into A Component Hierarchy
将 UI 拆解为单个的 Component，拆解过程中尽量不要重复创建相同的 Component。
#### Step 2: Build A Static Version in React
使用 Component 创建一个静态的页面，数据流向保证 "单一数据源" 原则。
#### Step 3: Identify The Minimal (but complete) Representation Of UI State
考虑 UI 交互，定义最小并且完整的 state 集合。
#### Step 4: Identify Where Your State Should Live
保证单向数据流，确认 state 定义的位置。
#### Step 5: Add Inverse Data Flow
添加反向数据流，保证 Form 表单的数据更新
