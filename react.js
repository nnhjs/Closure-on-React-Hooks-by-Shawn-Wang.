const React = (function() {
  const hooks = [];
  let idx = 0;

  function useState(initVal) {    
    let _idx = idx;
    const state =  hooks[_idx] || initVal;
    const setState = newVal => {
      hooks[_idx] = newVal;
    }
    idx++;
    return [state, setState]
  }

  function useRef(initVal) {
    let ref = {current: initVal};
    return ref
  }

  function useEffect(cb, depArray) {
    let olDeps = hooks[idx]
    let hasChange = true;
    
    if(olDeps) {
      hasChange = depArray.some((dep, i) => !Object.is(dep, olDeps[i]))
    }

    if(hasChange) cb()
    hooks[idx] = depArray;
    idx++;
  }

  function render(Component) {
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }

  return {
    useState,
    useRef,
    render,
    useEffect,
  };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState('apple');
  const ref1 = React.useRef(2);
  const ref2 = React.useRef(1);

  React.useEffect(() => {
    console.log('jsconfffff')
  }, [count, text]);

  return {
    render: () => console.log({count, text, ref1: ref1.current, ref2: ref2.current}),
    click: () => setCount(count + 1),
    type: () => setText('appear')
  }
}

var App = React.render(Component)
App.click()
var App = React.render(Component)
App.type()
var App = React.render(Component)
// var App = React.render(Component)
// App.click()
// App.click()