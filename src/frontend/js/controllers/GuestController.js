import { renderGuestView as renderGuestViewFunc } from '../views/guestView.js';

class GuestController {
    constructor() {
        this.currentView = null;
    }

    navigateToLogin() {
        window.location.href = 'login.html';
    }

    navigateToRegister() {
        alert('Registration feature coming soon! Redirecting to login...');
        window.location.href = 'login.html';
    }

    login(email) {
        if (email) {
            alert(`Logging in with email: ${email}. Redirecting to dashboard...`);
            window.location.href = 'index.html';
        } else {
            alert('Please enter an email!');
        }
    }

    renderGuestView() {
        if (typeof renderGuestViewFunc === 'function') {
            renderGuestViewFunc();
        } else {
            console.error('renderGuestView not found');
        }
    }
}

window.guestController = new GuestController();
