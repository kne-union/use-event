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
