import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap'; // Xóa dòng này
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faBullhorn, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

// Đảm bảo bạn đã cài các gói Font Awesome này:
// npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      {/* Thay Container bằng div với class container */}
      <div className="container">
        {/* Thay Row bằng div với class row */}
        <div className="row mb-4">
          {/* Logo Section */}
          {/* Thay Col bằng div với class col-md-3 */}
          <div className="col-md-3 text-start">
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM21zTXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1708833dec7d26bb4cd56eceeb74827cff470cce/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/f8-icon.18cd71cfcfa33566a22b.png" // Replace with your F8 logo path
                alt="F8 Logo"
                width="36"
                height="36"
                className="me-2"
              />
              <span className="fw-bold fs-5">Học Lập Trình Để Đi Làm</span>
            </div>
            <p className="small mb-1 text-white-50">Điện thoại: 08 1919 0909</p>
            <p className="small mb-1 text-white-50">Email: contact@fullstack.edu.vn</p>
            <p className="small text-white-50">Địa chỉ: Số 1, ngõ 41, Trần Duy Hưng, Cầu Giấy, Hà Nội</p>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAYCAYAAADeUlK2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAffSURBVGhD7VoLUJTXFf54hDcKS1IeUjErYELio6CpNSOYCJom1jYPQZ30ldTU5mGMTauZaDJTNcbXJGo1RIm2JgURqwlOamYM1ahTMegS0yoPUbI8BdldILKwC7t/z7nL/uyvyyMOmfmd2TNzh73nnnPuufe759zz/z9ekiTNBjCCmprJ4uXlVahmB9XsmxeBfIEcTFKzk+Sjqbu7e7qafVSrbx0dHXUC5MMNLUl/vVSnSj+fjovC4xHBWLF8uSr9U7NT0dHReH3VqkwB8oG65qQN5TWq9HeRNgZPjvTHlOQUVfqnZqcSEhPw2dGjmd5qdtLj2/DsgAfk4dlHVVvxgKxqeIbHOQ/Iw7OPqrbitvDaOCEeIXf4CMdtkgSjpRtUnOHrtg6k3RWG+aMjxVj19U5sqKhB+B2+eGvCWHmhfzpfhes9NkzVjMDs6AjEBQWgR7LjSKMBh+pbZLknRt2FjCiN6G+vqsP/yP6N1F/hNT01FZnzsxTi5WVl2LN7D8wdHVi3/m2EhIbK422trWhsvIqP9u5FW1ub4LONub/4OeLj49He3o7P/nUE+/LyEBkVyVWpW+AaGxuxOyen3/GXnn9B6EVRZfv7xYvBxU9wcDC+OH4c77+XDR8fH6zbsL5f21vfebff8df+vByPPvYYpqelKtZVUlKCTw59fJNNZ+EFrq4LapukKUdL5EagEltJNrtdWqKrkNaX6eUBi80mTSs6K604X6UQnvVFqbTrcr3MM/f0SFabXfQ3levleRrMXbLM4fprCh+c/uwkO4aWFkk7Ok7R3li5UuhaurqkyooK8ZcpLzdXyLEOU1NTkxi3Wq2ivz8/X4y/tXqNPHdXry4z8vPypNnp6Tet38morKxUjJtMJqmF5nI2tj1jeqpEh0ao2GiPemj9TCdPnJAm/yh5QNuu4zfaTp44Sfrw73vd6r+zafNNe9S7jnkDpmt+rEo7psOxZhO8vbzwqzFR8mkxWbvh5+2N8SNDkBLuiBjmMXFk//buaDlCHzpeijcvXEF1Rydig/wFP5l0ogP9cYWyAdPMyHAE+Hz320NfU4NHMmZh88ZNws64ceMUJ3r7tm1i/MD+/YLPUauJ0OCVV/8o+ps3bsT4e5OwbOlS0X8qMxM+3j54JD1DNL1eL/icAbj/3LO/U9ifP28eHqDHO2fjwZdeXoJQyiKlOh1SJk7CzLQZMBgMIMAR4O8v2/76/PnvZLvVZJLnPlNcjETtWKxf97bgPfeHxQgMDFT45uwMuqudNjtKjN8KeW1wkGzknMnBY4AZMAbL1N0jeImhQfChQ8GUW9MEuwR83mRC1ukL2FxRK/hzKI0zHay/hq/IViClsZk/CHfr5EBMjUaDJQTQwl8+LcRqCHRXyszKwrYd2zFn7lzBLvq8CPfddz8CAgJEP2fnLrH5znTnTQd3VGwsLl26JBplACFnNBpFv6YXdOcc+woK8KXunGh8RYg9mTxZ/P1o74fiGqitrRWH4Jlf/wYNDQ2y7c5OxwEfiu3sXTtv2gb2+9i/iwQ/KCgIsT+MdbtVg4LMWvROUSiH+/nKRqo7uqCnxsBoQwKh6wX9xlm6GWEib8I8liKXiSOWI5eJ72Fdq+PAOIF362k/zIiICLz8ylLExMTgyzNn5Ih2ioeHhyM9PV1E1j8LDiB7xw74+fnJ1pwgMsNqsQi+n3/f+GC+UArGkU8/Fa1UVyrEQ0NCHHZc5hkdFwd6/z6YOcW4q+0zp4vd6hoMRpnvOp+r8JBAnqYZKXQaOx2b4KQSY7sAmMkZ2fy78luzKNiYHu6NztQ7w3DwwfH4YMo94mBw5DL97YF78czdMeJ3ChVq0QFD32DW4egaGzcG98QnYEFmFurrlK9n38/OxtrVa4T9x598Aj+eOhWlpTp5DQsWLhS/k1NSCFzHISwvK1esc6AOXwdvrnpDNLrvhWhZuUN/Zka6ADaEQD9U+AlKaN6x8X0F6mCTuNres3u3W/FpD04TfLvdToVlo1uZAUF+MX4UitIm4Wej7hTK711uUBhxBdY1kjltH6htFrJrx2tR8JP76a9jcV+1XpcjltN0Aclxa6EKnmlOjGOu4SQqxqD/Rg9OxctfWwEjnf6PDx4SU/xl7RqcKj6N3Px9os8VdvWVK0Oe3jVdc8oOo8yxfes20AcVpGdk4OTp/+D4qZMICwsjH77B5arLt2xbq9XKunwo/1t2EVvokDHl/SNXrMsd9eVfl1FOwyarI9KYSgmYQnr0OdHSilmRGsf9S0UWA8u/G7us4j6uM1OkUwBzFG+hDx7XCLgZFLVRFJ2c8k80t2I/AbplUoLQ2+ry2NRsseKnURFIGtF37w+0G01Xr6KYUlh9vfsPK+fOnkXoiJFgOb67Vq18Hc+/8KIwmTguEa8uW4az9Ogx4+GHkJCQSJtfhSMEMKdzV+LiyNBiQF1t3zxms1nM7Y54Li6KOKs8u2gRJk6cAKrecbiwkDLKaoXKxQsX6ekGCtt8OPqzbbFaUF1drRg3Gg3imsrPcxxSd+T5QDHkuLr9BD0fKG4/zG7Z4yEVXrds3aOoih3wgKwKGL5fJzwgf7/7qwrrt0XhlakJQtZT81SxYbeTE6PHxGFnTo7j338sNnuSmUp/NRK/HaMXJ+3km/KlsRqdVaFP9Lh3you+kCygtzKO730qJTqInb6+vu5f+ajUZzW59X9lz6WIUeeJcAAAAABJRU5ErkJggg==" // Replace with your DMCA badge path
              alt="DMCA Protected"
              width="100"
            />
          </div>

          {/* About F8 Section */}
          <div className="col-md-2">
            <h5 className="mb-3">VỀ F8</h5>
            <ul className="list-unstyled small">
              <li style={{ marginBottom: '5px' }}><a href="#" className="text-white text-decoration-none text-white-50">Giới thiệu</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" className="text-white text-decoration-none text-white-50">Liên hệ</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" className="text-white text-decoration-none text-white-50">Điều khoản</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" className="text-white text-decoration-none text-white-50">Bảo mật</a></li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="col-md-2">
            <h5 className="mb-3">SẢN PHẨM</h5>
            <ul className="list-unstyled small">
              <li style={{ marginBottom: '5px' }}><a href="#" className="text-white text-decoration-none text-white-50 text-white-50"  >Game Nester</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" className="text-white text-decoration-none text-white-50 text-white-50">Game CSS Diner</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" className="text-white text-decoration-none text-white-50 text-white-50">Game CSS Selectors</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" className="text-white text-decoration-none text-white-50 text-white-50">Game Froggy</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" className="text-white text-decoration-none text-white-50 text-white-50">Game Froggy Pro</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" className="text-white text-decoration-none text-white-50 text-white-50">Game Scoops</a></li>
            </ul>
          </div>

          {/* Tools Section */}
          <div className="col-md-2">
            <h5 className="mb-3">CÔNG CỤ</h5>
            <ul className="list-unstyled small">
              <li style={{ marginBottom: '5px' }}><a href="#" className="text-white text-decoration-none text-white-50">Tạo CV xin việc</a></li>            
              <li style={{ marginBottom: '5px' }}><a href="#" className="text-white text-decoration-none text-white-50">Clip-path maker</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" className="text-white text-decoration-none text-white-50">Snippet generator</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" className="text-white text-decoration-none text-white-50">CSS Grid generator</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" className="text-white text-decoration-none text-white-50">Cảnh báo sờ tay lên mặt</a></li>
            </ul>
          </div>

          {/* Company Info Section */}
          <div className="col-md-3">
            <h5 className="mb-3">CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8</h5>
            <p className="small mb-1 text-white-50">Mã số thuế: 0109922901</p>
            <p className="small mb-1 text-white-50">Ngày thành lập: 04/03/2022</p>
            <p className="small mb-3 text-white-50">Lĩnh vực hoạt động: Giáo dục, công nghệ - lập trình.</p>
            <p className="small text-white-50">Chúng tôi tập trung xây dựng và phát triển các sản phẩm mang lại giá trị cho cộng đồng lập trình viên Việt Nam.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="row align-items-center pt-3 ">
          <div className="col-md-6">
            <p className="text-white-50 small mb-0">© 2018 - 2025 F8. Nền tảng học lập trình hàng đầu Việt Nam</p>
          </div>
<div className="col-md-6 text-end">

    <a href="#" className="text-white me-3">
        <FontAwesomeIcon icon={faYoutube} style={{ color: '#FF0000' }} size="lg" />
    </a>
        <a href="#" className="text-white me-3">
        <FontAwesomeIcon icon={faFacebookF} style={{ color: '#1877F2' }} size="lg" />
    </a>
    <a href="#" className="text-white">
        <FontAwesomeIcon icon={faTiktok} style={{ color: '#E6E6E6' }} size="lg" />
    </a>
</div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;