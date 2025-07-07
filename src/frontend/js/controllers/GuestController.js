import { renderGuestView } from "../views/guestView.js";

export default class GuestController {
  Show() {
    renderGuestView();
    this.applyPreferences();
  }

  applyPreferences() {
    // Lấy trạng thái dark mode
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
      document.body.classList.add('dark-mode');
    }

    // Lấy ngôn ngữ
    const lang = localStorage.getItem('selectedLanguage') || 'vi';
    loadLanguage(lang);
  }
}

// Hàm tải dữ liệu ngôn ngữ
async function loadLanguage(lang) {
  try {
    const response = await fetch(`./src/frontend/lang/${lang}.json`);
    const translations = await response.json();

    // Cập nhật các thẻ có data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key]) el.textContent = translations[key];
    });

    // Cập nhật placeholder input
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[key]) el.placeholder = translations[key];
    });

    // Đặt thuộc tính lang
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('selectedLanguage', lang);

    // Cập nhật nút dark mode
    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
      const isDark = document.body.classList.contains('dark-mode');
      toggleBtn.textContent = isDark
        ? translations.toggleDarkMode.replace('Chuyển chế độ tối', 'Chuyển chế độ sáng').replace('Toggle Dark Mode', 'Toggle Light Mode')
        : translations.toggleDarkMode;
    }

  } catch (e) {
    console.error("Không thể tải ngôn ngữ:", e);
  }
}

// Hàm đổi ngôn ngữ
window.selectLanguage = function (lang) {
  loadLanguage(lang);
}

// Hàm chuyển đổi dark mode
window.toggleDarkMode = function () {
  const body = document.body;
  const toggleBtn = document.getElementById('dark-mode-toggle');
  body.classList.toggle('dark-mode');

  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');

  const lang = document.documentElement.getAttribute('lang') || 'vi';
  fetch(`/${lang}.json`)
    .then(res => res.json())
    .then(translations => {
      toggleBtn.textContent = isDark
        ? translations.toggleDarkMode.replace('Chuyển chế độ tối', 'Chuyển chế độ sáng').replace('Toggle Dark Mode', 'Toggle Light Mode')
        : translations.toggleDarkMode;
    });
}
