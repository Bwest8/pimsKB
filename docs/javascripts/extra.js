document.querySelectorAll('h3').forEach(function(header) {
    if (header.textContent.includes('[custom]')) {
        header.classList.add('custom-h3');
        header.textContent = header.textContent.replace('[custom]', '');
    }
});
