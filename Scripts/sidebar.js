function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-300px';
        document.getElementById('overlay').style.display = 'none';
    } else {
        sidebar.style.right = '0px';
        document.getElementById('overlay').style.display = 'block';
    }
}
