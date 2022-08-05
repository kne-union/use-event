import * as component_284 from '@kne/use-event';
import * as component_285 from 'antd/lib/button';
import * as component_286 from 'antd/lib/message';
const readmeConfig = {
    name: `@kne/use-event`,
    description: `实现了事件总线的hooks，是fbemitter的再封装`,
    summary: `<p>可以通过这个钩子构造一个事件总线来实现事件的发布订阅。</p>
<p>这通常可以用于某些特殊场景，但是还是要优先考虑context做组件的数据共享而不是滥用事件。</p>
<h4>事件绑定后不能触发的可能情况</h4>
<ul>
<li>检查项目中是否安装了多个包版本，导致绑定事件的对象和触发事件的对象不是一个对象实例</li>
<li>是否事件触发在事件绑定之前已经执行了，事件绑定后没有事件触发</li>
</ul>`,
    api: `<p>const emitter = useEvent(debug);</p>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>options</td>
<td>{debug,name} debug:是否开启调试模式，开启后控制台上会将收到的事件及参数打印出来帮助您调试代码,name:事件名称，会显示在debug信息里面。注意：options里面的参数只能初始化设定一次，不能根据props的修改而修改</td>
<td>object</td>
<td>{debug:false}</td>
</tr>
</tbody>
</table>
<p>返回值 emitter api</p>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>类型</th>
<th>参数说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>addListener</td>
<td>监听一个事件</td>
<td>function</td>
<td>addListener(eventName,args) eventName为事件名称，args为可以传递的参数</td>
</tr>
<tr>
<td>emit</td>
<td>触发一个事件</td>
<td>function</td>
<td>emit(eventName,args) eventName为事件名称，args为可以传递的参数</td>
</tr>
<tr>
<td>removeAllListeners</td>
<td>删除所有事件监听</td>
<td>function</td>
<td>-</td>
</tr>
<tr>
<td>listeners</td>
<td>所有监听事件列表</td>
<td>array</td>
<td>-</td>
</tr>
<tr>
<td>once</td>
<td>监听一个事件，但是在触发一次后就会被自动销毁</td>
<td>function</td>
<td>once(eventName,args) eventName为事件名称，args为可以传递的参数</td>
</tr>
</tbody>
</table>
<h4>监听事件后返回对象</h4>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>类型</th>
<th>参数说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>remove</td>
<td>删除该事件监听</td>
<td>function</td>
<td>-</td>
</tr>
</tbody>
</table>`,
    example: {
        isFull: false,
        className: `use_event_74da0`,
        style: ``,
        list: [{
    title: `基本事件示例`,
    description: `展示了在一个组件里监听事件，在另一个组件里面触发事件的简单场景`,
    code: `const { default: useEvent } = _useEvent;
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
      message.success(\`事件event触发，参数:\${args}\`);
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

`,
    scope: [{
    name: "_useEvent",
    packageName: "@kne/use-event",
    component: component_284
},{
    name: "button",
    packageName: "antd/lib/button",
    component: component_285
},{
    name: "_message",
    packageName: "antd/lib/message",
    component: component_286
}]
}]
    }
};
export default readmeConfig;
