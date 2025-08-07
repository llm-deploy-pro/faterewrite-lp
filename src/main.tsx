// 文件位置: src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // 1. 引入 BrowserRouter
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. 使用 BrowserRouter 包裹整个应用 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)