import { useRef, useMemo } from 'react';
import fbemitter from 'fbemitter';

const { EventEmitter } = fbemitter;

class FormEventEmitter extends EventEmitter {
  constructor(options) {
    super();
    const { debug, name = 'event' } = Object.assign({}, options);
    this.debug = debug;
    this.name = name;
  }

  emit(...args) {
    if (this.debug) {
      console.log(`[${this.name}][debug]:`, ...args);
    }
    super.emit(...args);
  }
}

const useEvent = options => {
  const debugRef = useRef(options);
  return useMemo(() => {
    const emitter = new FormEventEmitter(debugRef.current);
    return {
      addListener: (...args) => emitter.addListener(...args),
      emit: (...args) => emitter.emit(...args),
      removeAllListeners: (...args) => emitter.removeAllListeners(...args),
      listeners: (...args) => emitter.listeners(...args),
      once: (...args) => emitter.once(...args)
    };
  }, []);
};

export default useEvent;
