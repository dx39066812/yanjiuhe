function validateForm() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    var username = usernameInput.value;
    var password = passwordInput.value;

    if (username !== 'baohuhuanjing') {
        alert('账号错误');
        return false;
    }

    if (password !== 'baohuhuanjing') {
        alert('密码错误');
        return false;
    }

    alert('欢迎登陆');
    window.location.href = 'index.html';
    return false;
}