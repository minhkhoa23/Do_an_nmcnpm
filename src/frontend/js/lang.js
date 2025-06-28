let currentLang = 'en';

const translations = {
    en: null,
    vi: null
};

// Tải dữ liệu ngôn ngữ từ file JSON
async function loadTranslations(lang) {
    currentLang = lang; // Cập nhật ngôn ngữ hiện tại

    try {
        console.log(`Loading translations for ${lang} from ./src/frontend/lang/${lang}.json`);
        const response = await fetch(`./src/frontend/lang/${lang}.json`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        translations[lang] = await response.json();
        console.log(`Translations for ${lang} loaded:`, translations[lang]);

        applyTranslations();
    } catch (error) {
        console.error(`Error loading ${lang} translations:`, error);
    }
}

// Cập nhật nội dung văn bản dựa trên ngôn ngữ hiện tại
function applyTranslations() {
    const langData = translations[currentLang];
    if (!langData) {
        console.warn('No translation data available for:', currentLang);
        return;
    }

    // 🔹 Giao diện Guest (guestView)
    const guestTitle = document.getElementById('guestTitle');
    if (guestTitle) guestTitle.textContent = langData.title;

    const loginGuestBtn = document.getElementById('loginGuestBtn');
    if (loginGuestBtn) loginGuestBtn.textContent = langData.loginButton;

    const registerGuestBtn = document.getElementById('registerGuestBtn');
    if (registerGuestBtn) registerGuestBtn.textContent = langData.registerButton;

    const guestLoginBtn = document.getElementById('guestLoginBtn');
    if (guestLoginBtn) guestLoginBtn.textContent = langData.loginButton;

    const searchGuestBar = document.getElementById('searchGuestBar');
    if (searchGuestBar) searchGuestBar.placeholder = langData.searchPlaceholder;

    // 🔹 Giao diện Login (login.html)
    const loginTitle = document.getElementById('loginTitle');
    if (loginTitle) loginTitle.textContent = langData.loginTitle;

    const registerLink = document.getElementById('registerLink');
    if (registerLink) registerLink.innerHTML = langData.registerLink;

    // 🔹 Các nút khác nếu cần (ví dụ: toggle theme, tạo giải)
    const createTournamentBtn = document.getElementById('createTournamentBtn');
    if (createTournamentBtn) createTournamentBtn.textContent = langData.createTournamentButton;

    const toggleDarkMode = document.getElementById('toggleDarkMode');
    if (toggleDarkMode) toggleDarkMode.textContent = langData.toggleDarkMode;
}

// Sự kiện DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    // Tải ngôn ngữ mặc định
    loadTranslations(currentLang);

    // Lắng nghe sự kiện thay đổi ngôn ngữ
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            console.log(`Language changed to: ${selectedLang}`);
            loadTranslations(selectedLang);
        });
    }
});
