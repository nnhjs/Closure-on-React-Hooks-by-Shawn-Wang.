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

  function render(Component) {
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }

  return {
    useState,
    render,
  };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState('apple');
  return {
    render: () => console.log({count, text}),
    click: () => setCount(count + 1),
    type: () => setText('appear')
  }
}

var App = React.render(Component)
App.click()
var App = React.render(Component)
App.click()
var App = React.render(Component)
App.click()
var App = React.render(Component)
App.click()
var App = React.render(Component)
App.type()
var App = React.render(Component)