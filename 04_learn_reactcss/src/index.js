import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'
// import App from './01_内联样式CSS/App';
// import App from './02_普通的CSS/App'
// import App from './03_CSS的module写法/App'

// import App from './04_Less的编写方式/App';
// import App from './05_CSS_in_JS写法/App'
import App from './06_classnames库的使用/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ color: 'green', size: '20px' }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
