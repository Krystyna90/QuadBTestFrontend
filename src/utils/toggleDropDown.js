const toggleButton = document.querySelectorAll('.dropdown-toggle');

toggleButton.forEach((btn) => {
     btn.addEventListener('click', toggleDropdown);
 });

 function toggleDropdown(event) {
    const targetMenuId = event.currentTarget.getAttribute('data-target');
    const targetMenu = document.getElementById(targetMenuId);

    if (targetMenu) {
        targetMenu.style.display = (targetMenu.style.display === 'none' || targetMenu.style.display === '') ? 'block' : 'none';
    }
}