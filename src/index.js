import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Giữ lại CSS của bạn
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Đảm bảo các dòng này chính xác:
// LƯU Ý: KHÔNG THÊM '.js' VÀO CUỐI DÒNG NÀY

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();