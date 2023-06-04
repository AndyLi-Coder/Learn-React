import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
// import { userContext, themeContext } from './05_useContext的使用/context'
import { userContext, tokenContext } from './11_自定义Hooks/context'
// import App from './01_不使用Hook/App';
// import App from './02_计数器案例/App'
// import App from './03_useState的使用/App'
// import App from './04_useEffect的使用/App';
// import App from './05_useContext的使用/App'
// import App from './06_useReducer的使用(了解)/App'
// import App from './07_useCallback和useMemo/App'
// import App from './08_useMemo的使用/App';
// import App from './09_useRef的使用/App'
// import App from './10_useImperativeHandle的使用/App'
// import App from './11_自定义Hooks/App';
// import App from './13_redux中的hooks/App'
// import App from './14_useId的使用/App'
import App from './15_useTransition的使用/App'
import store from './13_redux中的hooks/store';


const root = ReactDOM.createRoot(document.getElementById('root'));


/* root.render(
  <userContext.Provider value={{ name: 'why', age: 18 }}>
    <themeContext.Provider value={{ color: 'red', size: 30 }}>
      <App />
    </themeContext.Provider>
  </userContext.Provider>

); */
root.render(
  <userContext.Provider value={{ name: 'why', age: 18 }}>
    <tokenContext.Provider value={'why'}>
      <Provider store={store}>
        <App />
      </Provider>
    </tokenContext.Provider>
  </userContext.Provider>

);
