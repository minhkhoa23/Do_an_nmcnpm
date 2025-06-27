let currentLang = 'en';
const translations = {
    en: null,
    vi: null
};

async function loadTranslations(lang) {
    try {
        console.log(`Loading translations for ${lang} from ./src/frontend/lang/${lang}.json`);
        const response = await fetch(`./src/frontend/lang/${lang}.json`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        translations[lang] = await response.json();
        console.log(`Translations for ${lang} loaded:`, translations[lang]);
        applyTranslations();
    } catch (error) {
        console.error(`Error loading ${lang} translations:`, error);
    }
}

function applyTranslations() {
    const langData = translations[currentLang];
    if (!langData) {
        console.warn('No translation data available for', currentLang);
        return;
    }

    // Cập nhật cho index.html
    const title = document.getElementById('title');
    if (title) title.textContent = langData.title;
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) loginBtn.textContent = langData.loginButton;
    const registerBtn = document.getElementById('registerBtn');
    if (registerBtn) registerBtn.textContent = langData.registerButton;
    const createTournamentBtn = document.getElementById('createTournamentBtn');
    if (createTournamentBtn) createTournamentBtn.textContent = langData.createTournamentButton;
    const toggleDarkMode = document.getElementById('toggleDarkMode');
    if (toggleDarkMode) toggleDarkMode.textContent = langData.toggleDarkMode;
    const searchBar = document.getElementById('searchBar');
    if (searchBar) searchBar.placeholder = langData.searchPlaceholder;

    // Cập nhật cho login.html
    const loginTitle = document.getElementById('loginTitle');
    if (loginTitle) loginTitle.textContent = langData.loginTitle;
    const registerLink = document.getElementById('registerLink');
    if (registerLink) registerLink.innerHTML = langData.registerLink;
}

// Gọi khi tải trang và khi thay đổi ngôn ngữ
document.addEventListener('DOMContentLoaded', () => {
    loadTranslations(currentLang);
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            currentLang = e.target.value;
            console.log(`Language changed to: ${currentLang}`);
            loadTranslations(currentLang);
        });
    }
});