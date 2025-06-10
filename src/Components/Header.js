import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  // Thêm state mới để kiểm soát việc có thông báo mới hay không
  const [hasNewNotifications, setHasNewNotifications] = useState(true); // Mặc định là có thông báo mới

  const avatarDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);

  const user = {
    avatar:
      "https://hobiverse.com.vn/cdn/shop/articles/goku-dragon-ball_thumbnail_hobi_82cdb25dc32a4b4ca1ba9cd98097f375.jpg?v=1716179415",
    name: "Thien (K17 DN)",
    username: "@phamdacthienk17dn",
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        avatarDropdownRef.current &&
        !avatarDropdownRef.current.contains(event.target)
      ) {
        setIsAvatarDropdownOpen(false);
      }
      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(event.target)
      ) {
        setIsNotificationDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [avatarDropdownRef, notificationDropdownRef]);

  const toggleAvatarDropdown = (e) => {
    e.preventDefault();
    setIsAvatarDropdownOpen((prevState) => !prevState);
    setIsNotificationDropdownOpen(false);
  };

  const toggleNotificationDropdown = (e) => {
    e.preventDefault();
    setIsNotificationDropdownOpen((prevState) => !prevState);
    setIsAvatarDropdownOpen(false);
    // Khi mở dropdown thông báo, giả định người dùng đã xem thông báo mới
    setHasNewNotifications(false); // Đặt lại trạng thái không có thông báo mới
  };

  // Hàm để đánh dấu tất cả thông báo là đã đọc
  const markAllNotificationsAsRead = (e) => {
    e.preventDefault();
    setHasNewNotifications(false);
    // Có thể thêm logic gọi API để đánh dấu đã đọc trên server
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark-custom py-3 header-layout" /* Thêm header-layout */
      style={{ borderBottom: "1px solid #e0e0e0" }}
    >
      <div className="container-fluid px-4">
        {/* Logo và Tên */}
        <Link to="/" className="navbar-brand d-flex align-items-center"> {/* Đã xóa style={{ marginLeft: '-50px' }} */}
          <img
          src="https://lh3.googleusercontent.com/p/AF1QipN7NJcUBnM3MENzywr2yZ-FgjgzQGrWiZ4TfLIu=s680-w680-h510-rw"
            alt="F8 Logo"
            width="36"
            height="36"
            className="me-2 rounded"
          />
          <span
            className="text-black fw-bold"
            style={{ fontSize: "14px", marginLeft: "12px" }}
          >
            Học Lập Trình Để Đi Làm
          </span>
        </Link>

        {/* Search Bar */}
        <div
          className="d-none d-lg-block mx-auto"
          style={{ maxWidth: "400px", flexGrow: 1 }}
        >
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} className="text-muted" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm khóa học, bài viết, video..."
              aria-label="Search"
            />
          </div>
        </div>

        {/* Các icon bên phải */}
        <div className="d-flex align-items-center">
          <Link
            to="/my-courses"
            className="text-secondary text-decoration-none me-4 fw-bold"
            style={{ fontSize: "14px", marginLeft: "12px" }}
          >
            Khoá học của tôi
          </Link>

          {/* Dropdown Thông báo */}
          <div className="dropdown me-3" ref={notificationDropdownRef}>
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none position-relative" // Thêm position-relative để chấm đỏ định vị theo nó
              aria-expanded={isNotificationDropdownOpen ? "true" : "false"}
              onClick={toggleNotificationDropdown}
            >
              <FontAwesomeIcon icon={faBell} className="text-secondary fs-5" />
              {hasNewNotifications && ( // Hiển thị chấm đỏ khi có thông báo mới
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger border border-light p-1"
                  style={{ fontSize: "0.6em" }} // Điều chỉnh kích thước chấm tròn
                >
                  <span className="visually-hidden">New notifications</span>
                </span>
              )}
            </a>
            <ul
              className={`dropdown-menu text-small shadow ${isNotificationDropdownOpen ? "show" : ""}`}
              style={{
                position: "absolute",
                top: "calc(100% + 5px)",
                right: "0px",
                left: "auto",
                margin: "0px",
                minWidth: "320px",
                maxHeight: "400px",
                overflowY: "auto",
              }}
            >
              <li>
                <div className="d-flex justify-content-between align-items-center px-3 py-2">
                  <strong className="text-black" style={{ fontSize: "1.1em" }}>
                    Thông báo
                  </strong>
                  <a
                    href="#"
                    className="text-decoration-none text-primary"
                    style={{ fontSize: "0.8em" }}
                    onClick={markAllNotificationsAsRead}
                  >
                    Đánh dấu đã đọc
                  </a>
                </div>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              {/* Ví dụ các thông báo */}
              {/* Thêm class 'notification-unread' khi thông báo chưa đọc */}
              <li
                className={
                  hasNewNotifications
                    ? "notification-item notification-unread"
                    : "notification-item"
                }
              >
                {" "}
                {/* */}
                <Link
                  className="dropdown-item d-flex align-items-start py-2"
                  to="/notification/1"
                  onClick={() => {
                    setIsNotificationDropdownOpen(
                      false
                    ); /* Thêm logic đánh dấu đọc riêng nếu cần */
                  }}
                >
                  <img
                    src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM21zTXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1708833dec7d26bb4cd56eceeb74827cff470cce/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/f8-icon.18cd71cfcfa33566a22b.png"
                    alt="F8"
                    width="24"
                    height="24"
                    className="rounded-circle me-2 mt-1"
                  />
                  <div>
                    <p className="mb-0 text-black">
                      Bài học{" "}
                      <strong>Tham gia cộng đồng F8 trên Discord</strong> mới
                      được thêm vào.
                    </p>{" "}
                    <small className="text-muted">một năm trước</small>
                  </div>
                </Link>
              </li>
              <li className="notification-item">
                {" "}
                {/* Ví dụ thông báo đã đọc */}
                <Link
                  className="dropdown-item d-flex align-items-atart py-2"
                  to="/notification/2"
                  onClick={() => setIsNotificationDropdownOpen(false)}
                >
                  <img
                    src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM21zTXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1708833dec7d26bb4cd56eceeb74827cff470cce/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/f8-icon.18cd71cfcfa33566a22b.png"
                    alt="F8"
                    width="24"
                    height="24"
                    className="rounded-circle me-2 mt-1"
                  />
                  <div>
                    <p className="mb-0 text-black">
                      Bạn đã hoàn thành khóa học{" "}
                      <strong>HTML CSS Pro</strong>. Chúc mừng bạn!
                    </p>
                    <small className="text-muted">2 tháng trước</small>
                  </div>
                </Link>
              </li>
              {/* Thêm các thông báo khác tương tự */}
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link
                  className="dropdown-item text-center text-primary"
                  to="/notifications"
                  onClick={() => setIsNotificationDropdownOpen(false)}
                >
                  Xem tất cả
                </Link>
              </li>
            </ul>
          </div>

          {/* Dropdown Avatar */}
          <div className="dropdown" ref={avatarDropdownRef}>
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              aria-expanded={isAvatarDropdownOpen ? "true" : "false"}
              onClick={toggleAvatarDropdown}
            >
              <img
                src={user.avatar}
                alt="User Avatar"
                width="32"
                height="32"
                className="rounded-circle me-1"
              />
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ms-1"
                size="xs"
              />
            </a>
            <ul
              className={`dropdown-menu text-small shadow ${isAvatarDropdownOpen ? "show" : ""}`}
              aria-labelledby="dropdownUser1"
              style={{
                position: "absolute",
                top: "calc(100% + 5px)",
                right: "0px",
                left: "auto",
                margin: "0px",
                minWidth: "220px",
              }}
            >
              <li>
                <div className="d-flex align-items-center px-3 py-2">
                  <img
                    src={user.avatar}
                    alt="User Avatar"
                    width="40"
                    height="40"
                    className="rounded-circle me-2"
                  />
                  <div>
                    <strong className="d-block">{user.name}</strong>
                    <small className="text-muted">{user.username}</small>
                  </div>
                </div>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/profile"
                  onClick={() => setIsAvatarDropdownOpen(false)}
                >
                  Trang cá nhân
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/blog/write"
                  onClick={() => setIsAvatarDropdownOpen(false)}
                >
                  Viết blog
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/my-articles"
                  onClick={() => setIsAvatarDropdownOpen(false)}
                >
                  Bài viết của tôi
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/saved-articles"
                  onClick={() => setIsAvatarDropdownOpen(false)}
                >
                  Bài viết đã lưu
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/settings"
                  onClick={() => setIsAvatarDropdownOpen(false)}
                >
                  Cài đặt
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/logout"
                  onClick={() => setIsAvatarDropdownOpen(false)}
                >
                  Đăng xuất
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;