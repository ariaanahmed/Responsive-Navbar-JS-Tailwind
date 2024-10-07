function toggle() {
    const smnav = document.getElementById('sm-nav-ul')

    if(smnav.classList.contains('hidden')) {
        showItem(smnav);
    } else {
        hiddenItem(smnav);
    }
}

function hiddenItem(elementId) {
    elementId.style.transition = 'all 0.3s';
    elementId.classList.add('hidden')
}

function showItem(elementId) {
    elementId.classList.remove('hidden')
}