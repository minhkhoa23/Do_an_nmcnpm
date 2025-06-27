document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchBar').addEventListener('input', (e) => userController.searchTournaments(e.target.value));
    document.getElementById('loginBtn').addEventListener('click', () => {
        window.location.href = 'login.html';
    });
    document.getElementById('registerBtn').addEventListener('click', () => alert('Register functionality'));
    document.getElementById('createTournamentBtn').addEventListener('click', () => {
        import('./views/organizerView.js').then(({ renderCreateTournament }) => renderCreateTournament());
    });
    document.getElementById('toggleDarkMode').addEventListener('click', () => document.body.classList.toggle('dark-mode'));
});