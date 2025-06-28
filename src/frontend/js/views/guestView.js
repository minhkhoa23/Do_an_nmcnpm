// Sử dụng type="module" trong index.html để hỗ trợ import
export function renderGuestView() {
    console.log('Rendering guest view...');
    document.body.innerHTML = `
        <header class="guest-header">
            <h1 id="guestTitle">Tournament Manager</h1>
            <nav class="guest-nav">
                <input type="text" id="searchGuestBar" placeholder="Search tournaments...">
                <button id="loginGuestBtn" class="btn">Log In</button>
                <button id="registerGuestBtn" class="btn">Sign Up</button>
                <select id="languageSelect">
                    <option value="en">English</option>
                    <option value="vi">Tiếng Việt</option>
                </select>
            </nav>
        </header>
        <main id="guestContent">
            <div class="guest-container">
                <h2>Welcome to Tournament Manager</h2>
                <p>Explore exciting Esports tournaments, teams, and highlights. Log in or sign up to join the action!</p>
                <div class="login-section">
                    <h3>Quick Login</h3>
                    <input type="text" id="guestEmail" placeholder="Enter your email">
                    <button id="guestLoginBtn" class="btn">Login</button>
                </div>
                <div class="guest-preview">
                    <h3>Featured Tournaments</h3>
                    <ul>
                        <li>Summer 2025 League - Starts July 1</li>
                        <li>Global Esports Cup - Live Now</li>
                    </ul>
                </div>
            </div>
        </main>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #1A1A1A;
                color: #D3D3D3;
                transition: background-color 0.3s, color 0.3s;
            }
            .guest-header {
                background-color: #00FFCC;
                color: #1A1A1A;
                padding: 10px;
                text-align: center;
            }
            .guest-nav input, .guest-nav button, .guest-nav select {
                margin: 0 10px;
                padding: 5px 10px;
                background-color: #1A1A1A;
                color: #00FFCC;
                border: 1px solid #00FFCC;
                border-radius: 5px;
            }
            .guest-container {
                max-width: 600px;
                margin: 20px auto;
                padding: 20px;
                background-color: rgba(0, 255, 204, 0.1);
                border-radius: 10px;
            }
            .guest-container h2, .guest-container h3 {
                color: #00FFCC;
            }
            .login-section {
                margin: 20px 0;
            }
            .login-section input {
                padding: 5px;
                margin-right: 10px;
                border: 1px solid #00FFCC;
                border-radius: 5px;
                background-color: #1A1A1A;
                color: #D3D3D3;
            }
            .btn {
                background-color: #00FFCC;
                color: #1A1A1A;
                border: none;
                padding: 10px 20px;
                margin: 5px;
                border-radius: 5px;
                cursor: pointer;
            }
            .btn:hover {
                background-color: #00B894;
            }
        </style>
    `;

    // Gắn sự kiện sau khi DOM được tạo
    const guestController = window['guestController'];
    if (guestController) {
        document.getElementById('loginGuestBtn')?.addEventListener('click', () => guestController.navigateToLogin());
        document.getElementById('registerGuestBtn')?.addEventListener('click', () => guestController.navigateToRegister());
        document.getElementById('guestLoginBtn')?.addEventListener('click', () => {
            const email = document.getElementById('guestEmail').value;
            guestController.login(email);
        });
    } else {
        console.error('guestController not found in window');
    }

    // Xử lý ngôn ngữ
    let currentLang = 'en';
    const translations = { en: null, vi: null };
    async function loadTranslations(lang) {
        try {
            console.log(`Loading translations for ${lang} from ./lang/${lang}.json`);
            const response = await fetch(`./lang/${lang}.json`);
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
        if (!langData) return;
        document.getElementById('guestTitle').textContent = langData.title || 'Tournament Manager';
        document.getElementById('loginGuestBtn').textContent = langData.loginButton || 'Log In';
        document.getElementById('registerGuestBtn').textContent = langData.registerButton || 'Sign Up';
        document.getElementById('searchGuestBar').placeholder = langData.searchPlaceholder || 'Search tournaments...';
        document.getElementById('guestLoginBtn').textContent = langData.loginButton || 'Login';
    }

    document.getElementById('languageSelect')?.addEventListener('change', (e) => {
        currentLang = e.target.value;
        loadTranslations(currentLang);
    });

    // Tải ngôn ngữ mặc định
    loadTranslations(currentLang);
}