import './App.css';
import Footer from './Components/Footer';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'; // File CSS chính của bạn
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
const HomePage = () => (
  <div className="container mt-5" style={{ minHeight: 'calc(100vh - 150px)' }}>
    <h2>Chào mừng đến với F8!</h2>
    <p>Đây là trang chủ của ứng dụng.</p>
  </div>
);
const MyCoursesPage = () => (
  <div className="container mt-5" style={{ minHeight: 'calc(100vh - 150px)' }}>
    <h2>Khoá học của tôi</h2>
    <p>Nội dung các khóa học cá nhân.</p>
  </div>
);
const ProfilePage = () => (
  <div className="container mt-5" style={{ minHeight: 'calc(100vh - 150px)' }}>
    <h2>Hồ sơ của bạn</h2>
    <p>Thông tin cá nhân.</p>
  </div>
);
const SettingsPage = () => (
  <div className="container mt-5" style={{ minHeight: 'calc(100vh - 150px)' }}>
    <h2>Cài đặt</h2>
    <p>Các tùy chọn cài đặt tài khoản.</p>
  </div>
);
const LogoutPage = () => (
  <div className="container mt-5" style={{ minHeight: 'calc(100vh - 150px)' }}>
    <h2>Bạn đã đăng xuất</h2>
    <p>Cảm ơn bạn đã sử dụng dịch vụ.</p>
  </div>
);
function App() {
   
  return (
    <div>
         <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <Sidebar/>
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-courses" element={<MyCoursesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            {/* Thêm các Route khác cho các trang của bạn */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
