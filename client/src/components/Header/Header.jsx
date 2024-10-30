import "./Header.scss";
import logo from "~/assets/react.svg";

function Header() {
  return (
    <header>
      <div className="header-top">
        <img src={logo} alt="lỗi" className="header-top-logo" />
        <div className="header-top-care">Chăm sóc khách hàng</div>
      </div>

      <div className="header-bottom">
        <p>Home</p>
        <ul className="header-bottom-nav">
          <li>Trang chủ</li>
          <li>Danh sách sân bãi</li>
          <li>Giới thiệu</li>
          <li>Chính sách</li>
          <li>Điều khoản</li>
          <li>Dành cho chủ sân</li>
          <li>Liên hệ</li>
        </ul>

        <div className="header-bottom-action">
          <p>Đăng kí</p>
          <p>Đăng nhập</p>
        </div>
        <p className="test">123</p>
        <div className="header-bottom-search">Tìm kiếm</div>
      </div>
    </header>
  );
}

export default Header;
