
# use-event


### 描述

实现了事件总线的hooks，是fbemitter的再封装


### 安装

```shell
npm i --save @kne/use-event
```


### 概述

可以通过这个钩子构造一个事件总线来实现事件的发布订阅。

这通常可以用于某些特殊场景，但是还是要优先考虑context做组件的数据共享而不是滥用事件。

#### 事件绑定后不能触发的可能情况

* 检查项目中是否安装了多个包版本，导致绑定事件的对象和触发事件的对象不是一个对象实例
* 是否事件触发在事件绑定之前已经执行了，事件绑定后没有事件触发


### 示例

#### 示例代码

- 基本事件示例
- 展示了在一个组件里监听事件，在另一个组件里面触发事件的简单场景
- _useEvent(@kne/use-event),button(antd/lib/button),_message(antd/lib/message)

```jsx
const { default: useEvent } = _useEvent;
const { useEffect, createContext, useContext } = React;
const { default: message } = _message;
const { default: Button } = button;

const context = createContext({});
const { Provider } = context;

const SubComponent = () => {
  const { emitter } = useContext(context);
  return <Button onClick={() => {
    emitter.emit('event', '我是一个按钮触发事件');
  }}>触发事件</Button>;
};

const BaseExample = () => {
  const emitter = useEvent({debug:true,name:'test'});
  useEffect(() => {
    const sub = emitter.addListener('event', (args) => {
      message.success(`事件event触发，参数:${args}`);
    });
    return () => {
      sub && sub.remove();
    };
  }, [emitter]);
  return <Provider value={{ emitter }}>
    <SubComponent/>
  </Provider>;
};

render(<BaseExample/>);

```


### API

const emitter = useEvent(debug);

| 属性名     | 说明                                                                                                                        | 类型     | 默认值           |
|---------|---------------------------------------------------------------------------------------------------------------------------|--------|---------------|
| options | {debug,name} debug:是否开启调试模式，开启后控制台上会将收到的事件及参数打印出来帮助您调试代码,name:事件名称，会显示在debug信息里面。注意：options里面的参数只能初始化设定一次，不能根据props的修改而修改 | object | {debug:false} |

返回值 emitter api

|属性名| 说明     |类型| 参数说明                                                    |
|  ---  |--------| --- |---------------------------------------------------------|
|addListener| 监听一个事件 |function| addListener(eventName,args) eventName为事件名称，args为可以传递的参数 |
|emit|触发一个事件|function| emit(eventName,args) eventName为事件名称，args为可以传递的参数        |
|removeAllListeners|删除所有事件监听|function| -                                                       |
|listeners|所有监听事件列表|array| -                                                       |
|once|监听一个事件，但是在触发一次后就会被自动销毁|function| once(eventName,args) eventName为事件名称，args为可以传递的参数                                                 |

#### 监听事件后返回对象

| 属性名    |说明|类型| 参数说明   |
|--------| ---  | --- |-------|
| remove | 删除该事件监听|function|-|

