import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRoad, faNewspaper, faBullhorn } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar-layout bg-white border-end"> {/* Đã bỏ style={{marginTop:'55px'}} */}
      {/* Logo và Slogan F8 Đã chuyển sang Header */}
      
      <nav className="nav flex-column mt-3">
        <Link
          to="/"
          className={`sidebar-item text-decoration-none d-flex align-items-center flex-column ${location.pathname === '/' ? 'active' : ''}`} // Xóa py-3 ps-4 và marginRight
          title="Trang chủ" style={{fontSize:'10px'}}
        >
          <FontAwesomeIcon
            icon={faHome}
            className={`sidebar-icon fs-5 mb-1 ${location.pathname === '/' ? 'active-icon' : ''}`}
          />
          <span className="sidebar-text">Trang chủ</span>
        </Link>
        <Link
          to="/roadmap"
          className={`sidebar-item text-decoration-none d-flex align-items-center flex-column ${location.pathname === '/roadmap' ? 'active' : ''}`} // Xóa py-3 ps-4 và marginRight
          title="Lộ trình"
        >
          <FontAwesomeIcon
            icon={faRoad}
            className={`sidebar-icon fs-5 mb-1 ${location.pathname === '/roadmap' ? 'active-icon' : ''}`}
          />
          <span className="sidebar-text">Lộ trình</span>
        </Link>
        <Link
          to="/articles"
          className={`sidebar-item text-decoration-none d-flex align-items-center flex-column ${location.pathname === '/articles' ? 'active' : ''}`} // Xóa py-3 ps-4 và marginRight
          title="Bài viết"
        >
          <FontAwesomeIcon
            icon={faNewspaper}
            className={`sidebar-icon fs-5 mb-1 ${location.pathname === '/articles' ? 'active-icon' : ''}`}
          />
          <span className="sidebar-text">Bài viết</span>
        </Link>
        
   
      </nav>
        <div className="floating-action-button">
    <FontAwesomeIcon icon={faBullhorn} /> {/* Không cần color="white" ở đây, sẽ định nghĩa trong CSS */}
</div>
    </div>
  );
};

export default Sidebar;