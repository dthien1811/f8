import './App.css';
import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import CourseList from './Components/CourseList';
import CourseDetail from './Components/CourseDetail';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <Sidebar />
        <main className="flex-grow-1">
          <Routes>
            {/* ✅ Trang chủ hiển thị CourseList luôn */}
            <Route path="/" element={<CourseList />} />

            {/* ✅ Trang chi tiết khóa học */}
            <Route path="/courses/:id" element={<CourseDetail />} />

            <Route path="/my-courses" element={<MyCoursesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
