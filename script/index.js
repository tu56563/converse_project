const dropdownLink = document.querySelector('nav .dropdown');
    const dropdownMenu = document.getElementById('dropdown-menu');

    dropdownLink.addEventListener('mouseover', function() {
        dropdownMenu.classList.remove('hidden');
        dropdownMenu.style.display = 'block';
    });

    dropdownLink.addEventListener('mouseout', function() {
        dropdownMenu.classList.add('hidden');
        dropdownMenu.style.display = 'none';
    });

    dropdownMenu.addEventListener('mouseover', function() {
        dropdownMenu.classList.remove('hidden');
        dropdownMenu.style.display = 'block';
    });

    dropdownMenu.addEventListener('mouseout', function() {
        dropdownMenu.classList.add('hidden');
        dropdownMenu.style.display = 'none';
    });