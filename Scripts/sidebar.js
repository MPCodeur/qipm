function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-200px';
    } else {
        sidebar.style.right = '0px'; 
    }
}
