window.onload = function() {
    window.YaAuthSuggest.init({
        client_id: 'c5d2842fe85f4a0bad9cecb6eefed09c',
        response_type: 'token',
        redirect_uri: 'https://yrdietapp.ru/suggest/token'
    },
    'https://yrdietapp.ru', {
        view: 'button',
        parentId: 'yandex-login',
        buttonView: 'main',
        buttonTheme: 'light',
        buttonSize: 'm',
        buttonBorderRadius: 8
    })
    .then(function(result) {
        return result.handler();
    })
    .then(function(data) {
        console.log('Успешная авторизация:', data);
        localStorage.setItem('yaAuthToken', data.access_token);
        window.location.href = '/profile.html';
    })
    .catch(function(error) {
        console.log('Ошибка авторизации:', error);
    });
};
