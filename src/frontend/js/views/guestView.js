export function renderGuestView() {
  const content = document.getElementById('content');
  if (!content) return;

  content.innerHTML = `
    <!-- Phần header trên cùng -->
    <div class="top-section">
      <div class="nav-icons">
        <div class="menu-wrapper">
          <div class="menu-icon">☰</div>
          <div class="dropdown-menu">
            <div class="mode-wrapper">
              <div id="dark-mode-toggle" class="mode-title" data-i18n="toggleDarkMode">Chuyển chế độ tối</div>
            </div>
            <div class="language-wrapper">
              <div class="language-title" data-i18n="toggleLanguage">Đổi ngôn ngữ</div>
              <div class="language-submenu">
                <div onclick="selectLanguage('vi')" data-i18n="languageVietnamese">Tiếng Việt</div>
                <div onclick="selectLanguage('en')" data-i18n="languageEnglish">Tiếng Anh</div>
              </div>
            </div>
          </div>
        </div>
        <div class="home">
          <span class="home-icon"><i class="fas fa-home"></i></span>
          <span data-i18n="home">Trang chủ</span>
        </div>
        <div class="search-bar">
          <input type="text" data-i18n-placeholder="searchPlaceholder" placeholder="Tìm kiếm">
          <div>✖</div>
        </div>
        <div class="support" data-i18n="support">Hỗ trợ</div>
        <div class="info" data-i18n="info">Thông tin</div>
      </div>
      <div class="auth-buttons">
        <button class="login" data-i18n="loginButton">Đăng nhập</button>
        <button class="register" data-i18n="registerButton">Đăng ký</button>
      </div>
    </div>

    <!-- Phần giữa -->
    <div class="middle-section"></div>

    <!-- Phần footer -->
    <div class="bottom-section">
      <div class="contact">
        <div class="title" data-i18n="contactTitle">Liên hệ với chúng tôi</div>
        <div class="social-icons">
          <div><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" class="icon-img"></div>
          <div><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg" alt="Telegram" class="icon-img"></div>
          <div><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" class="icon-img"></div>
          <div><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitch.svg" alt="Twitch" class="icon-img"></div>
        </div>
        <div>xxxxx@gmail.com</div>
      </div>
      <div class="info-links">
        <div class="info-item" data-i18n="appInfo">Thông tin ứng dụng</div>
        <div class="info-item" data-i18n="privacyPolicy">Chính sách bảo mật</div>
        <div class="info-item" data-i18n="termsOfUse">Điều khoản sử dụng</div>
        <div class="copyright" data-i18n="copyright">2025 Mọi quyền được bảo lưu</div>
      </div>
      <div class="extra-icons">
        <div class="icon-row">
          <div class="placeholder-icon"></div>
          <div class="placeholder-icon"></div>
        </div>
        <div class="zoom-buttons">
          <div class="magnifier zoom-in"></div>
          <div class="magnifier zoom-out"></div>
        </div>
      </div>
    </div>
  `;

  // Gán sự kiện cho nút dark mode
  document.getElementById('dark-mode-toggle')?.addEventListener('click', toggleDarkMode);
}
