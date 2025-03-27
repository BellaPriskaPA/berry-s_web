document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  function setActiveMenu() {
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });

    const dropdownItems = dropdownMenu.querySelectorAll('a');
    let isDropdownActive = false;
    dropdownItems.forEach(item => {
      if (item.getAttribute('href') === currentPath) {
        isDropdownActive = true;
      }
    });

    if (isDropdownActive) {
      dropdownToggle.classList.add('active');
    } else {
      dropdownToggle.classList.remove('active');
    }
  }

  setActiveMenu();

  window.addEventListener('hashchange', setActiveMenu);

  dropdownToggle.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function(event) {
    if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.style.display = 'none';
    }
  });

  dropdownMenu.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      dropdownMenu.style.display = 'none';
    }
  });
});
