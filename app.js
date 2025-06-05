fetch('menu.html')
.then(response => response.text())
.then(data => {
document.getElementById('menu-container').innerHTML = data;
});


fetch('footer.html')
.then(response => response.text())
.then(data => {
document.getElementById('footer-container').innerHTML = data;
});
    
    
