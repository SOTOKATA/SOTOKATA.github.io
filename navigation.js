function loadTable() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/navigation.html', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('navigation').innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}
window.addEventListener('load', loadTable);