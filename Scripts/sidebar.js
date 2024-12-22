function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');

    if (sidebar.style.right === '0px' && window.innerWidth > 768) {
        sidebar.style.right = '-20%';
        document.getElementById('overlay').style.display = 'none';
    } else if (sidebar.style.right === '0px' && window.innerWidth < 768) {
        sidebar.style.right = '-60%';
        document.getElementById('overlay').style.display = 'none';
    } else {
        sidebar.style.right = '0px';
        document.getElementById('overlay').style.display = 'block';
    }

}
