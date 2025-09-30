document.addEventListener("DOMContentLoaded", () => {
    fetch('../nav/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.error('載入 nav.html 失敗:', error));
});
