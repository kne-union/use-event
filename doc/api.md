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
